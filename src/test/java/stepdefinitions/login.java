package stepdefinitions;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import pageobjects.AccountPage;
import pageobjects.HomePage;
import util.Constants;
import util.CredentialLookup;
import util.ScreenShot;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class login {

    private static WebDriver webDriver;
    private static Map<String, String> loginCredentials;
    private Scenario scenario;

    @Before
    public void setup(Scenario scenario) {
        this.scenario = scenario;
    }

    @After
    public void tearDown() {
        webDriver.close();
    }

    @Given("^user is on home page$")
    public void user_is_on_home_page() throws Throwable {
        webDriver = new ChromeDriver();
        webDriver.get(Constants.BBC_HOMEPAGE);
    }

    @When("^user navigates to login page$")
    public void user_navigates_to_login_page() throws Throwable {
        HomePage.lnkYourAccount(webDriver).click();
    }

    @And("^enters valid email (.*) and valid password (.*)$")
    public void enters_valid_email_as_and_password(String email, String password) throws Throwable {
        AccountPage.txtEmail(webDriver).sendKeys(email);
        AccountPage.txtPassword(webDriver).sendKeys(password);
        AccountPage.btnSignIn(webDriver).click();
    }

    @And("^enters invalid email as (.*) and password as (.*)$")
    public void enters_invalid_email_and_password(String email, String password) throws Throwable {
        AccountPage.txtEmail(webDriver).sendKeys(email);
        AccountPage.txtPassword(webDriver).sendKeys(password);
        AccountPage.btnSignIn(webDriver).click();
    }

    @And("^enters valid email and valid password$")
    public void enters_valid_email_and_valid_password(DataTable table) throws Throwable {
        Map<String, String> loginCredentials = table.asMap(String.class, String.class);
        AccountPage.txtEmail(webDriver).sendKeys(loginCredentials.get("email"));
        AccountPage.txtPassword(webDriver).sendKeys(loginCredentials.get("password"));
        AccountPage.btnSignIn(webDriver).click();

    }

    @And("^passwords are read from a file$")
    public void passwords_are_read_from_a_file() throws Throwable {
        loginCredentials = CredentialLookup.retrieve();
    }

    @And("^user enters a valid (.*)$")
    public void enters_valid_email_and_valid_password_from_a_file(String email) throws Throwable {
        AccountPage.txtEmail(webDriver).sendKeys(email);
        AccountPage.txtPassword(webDriver).sendKeys(loginCredentials.get(email));
        AccountPage.btnSignIn(webDriver).click();
    }

    @Then("^Login success$")
    public void messageDisplayedLoginSuccess() throws Throwable {
        ScreenShot.capture(webDriver, scenario);
        assertEquals("Your account", HomePage.lnkYourAccount(webDriver).getText());
        HomePage.lnkYourAccountLoggedIn(webDriver).click();
        AccountPage.spanSignOut(webDriver).click();
    }

    @Then("^Login failed$")
    public void messsage_displayed_Login_Failed() throws Throwable {
        try {
            AccountPage.divSiginPage(webDriver);
            ScreenShot.capture(webDriver, scenario);
        } catch (NoSuchElementException e) {
            ScreenShot.capture(webDriver, scenario);
            fail("The user should still be on the login page but was not.");
        }
    }
}
