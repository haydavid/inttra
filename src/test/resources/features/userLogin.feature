Feature: User login on news site

  Scenario: Successful login with valid credentials
    Given user is on home page
    When user navigates to login page
    And enters valid email davidhay677@yahoo.com and valid password inttra677
    Then Message displayed Login Success

  Scenario Outline: Successful login with valid credentials
    Given user is on home page
    When user navigates to login page
    And enters valid email <email> and valid password <password>
    Then Message displayed Login Success
    Examples:
      | email                 | password  |
      | davidhay677@yahoo.com | inttra677 |
      | davidhay547@yahoo.com | inttra547 |
      | davidhay415@yahoo.com | inttra415 |

  Scenario Outline: Unsuccessful login with invalidcredentials
    Given user is on home page
    When user navigates to login page
    And enters invalid email as <email> and password as <password>
    Then Messsage displayed login failed
    Examples:
      | email                 | password  |
      | invalid@yahoo.com     | inttra677 |
      | davidhay418@yahoo.com |           |

  Scenario: Successful login with valid credentials
    Given user is on home page
    When user navigates to login page
    And enters valid email and valid password
      | email    | davidhay677@yahoo.com |
      | password | inttra677             |
    Then Message displayed Login Success

  Scenario Outline: Successful login with valid crendentials from a file
    Given user is on home page
    When user navigates to login page
    And passwords are read from a file
    And user enters a valid <email>
    Then Message displayed Login Success
    Examples:
      | email |
      | davidhay677@yahoo.com |
      | davidhay547@yahoo.com |
      | davidhay415@yahoo.com |
