package util;

import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;

import static org.junit.Assert.fail;

/**
 * Class for taking screenshots during tests.
 */
public class ScreenShot {

    public static void capture(WebDriver webDriver, Scenario scenario) {
        WebDriver augmentedDriver = new Augmenter().augment(webDriver);
        byte[] bytes = ((TakesScreenshot) augmentedDriver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(bytes, "image/png");
    }
}
