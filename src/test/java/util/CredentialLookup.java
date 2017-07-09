package util;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import static org.junit.Assert.fail;

/**
 * Credential lookup class for retrieving emails and passwords.
 */
public class CredentialLookup {

    private static Map<String, String> loginCredentials;

    /**
     * Retrive the {@link Map} of login credentials.
     * @return the {@link Map} of login credentials.
     */
    public static Map<String, String> retrieve() {
        try {
            FileReader fileReader = new FileReader(Constants.LOGIN_CREDENTIALS_FILE);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line;
            loginCredentials = new HashMap<String, String>();
            while ((line = bufferedReader.readLine()) != null) {
                String[] credential = StringUtils.split(line, ",");
                loginCredentials.put(credential[0], credential[1]);
            }
        } catch (IOException ioe) {
            fail(String.format("There was a problem retrieving passwords from the credentials file: %s",
                Constants.LOGIN_CREDENTIALS_FILE));
        }
        return loginCredentials;
    }
}
