package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * The account page for the BBC web site.
 */
public class AccountPage {

    /**
     * Retrieve the {@link WebElement} for the email text box.
     * @param webDriver the {@link WebDriver}.
     * @return The {@link WebElement} for the email text box.
     */
    public static WebElement txtEmail(WebDriver webDriver) {
        return (new WebDriverWait(webDriver, 10))
            .until(ExpectedConditions.presenceOfElementLocated(By.id("username-input")));
    }

    /**
     * Retrieve the {@link WebElement} for the password text box.
     * @param webDriver the {@link WebDriver}.
     * @return The {@link WebElement} for the password text box.
     */
    public static WebElement txtPassword(WebDriver webDriver) {
        return webDriver.findElement(By.id("password-input"));
    }

    /**
     * Retrieve the {@link WebElement} for the submit button.
     * @param webDriver the {@link WebDriver}.
     * @return The {@link WebElement} for the submit button.
     */
    public static WebElement btnSignIn(WebDriver webDriver) {
        return webDriver.findElement(By.id("submit-button"));
    }

    /**
     * Retrieve the {@link WebElement} for the login page.
     * @param webDriver the {@link WebDriver}.
     * @return The {@link WebElement} for the login page.
     */
    public static WebElement divSiginPage(WebDriver webDriver) {
        return webDriver.findElement(By.id("signin-page"));
    }

    /**
     * Retrieve the {@link WebElement} for the logout element.
     * @param webDriver the {@link WebDriver}.
     * @return The {@link WebElement} for the logout element.
     */
    public static WebElement spanSignOut(WebDriver webDriver) {
        return (new WebDriverWait(webDriver, 10))
            .until(ExpectedConditions.presenceOfElementLocated(By.linkText("Sign out")));
    }
}
