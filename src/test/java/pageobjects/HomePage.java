package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

    /**
     * Retrieve the {@link WebElement} for the account link.
     * @param webDriver the {@link WebDriver}.
     * @return the {@link WebElement} for the account link.
     */
    public static WebElement lnkYourAccount(WebDriver webDriver) {
        return (new WebDriverWait(webDriver, 10))
            .until(ExpectedConditions.presenceOfElementLocated(By.id("idcta-link")));
    }

    /**
     * Retrieve the {@link WebElement} for the logged in account link.
     * @param webDriver the {@link WebDriver}.
     * @return the {@link WebElement} for the logged in account link.
     */
    public static WebElement lnkYourAccountLoggedIn(WebDriver webDriver) {
        return (new WebDriverWait(webDriver, 10))
            .until(ExpectedConditions.presenceOfElementLocated(By.id("idcta-username")));
    }
}
