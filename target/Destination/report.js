$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userLogin.feature");
formatter.feature({
  "line": 1,
  "name": "User login on news site",
  "description": "",
  "id": "user-login-on-news-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Scenario: Successful login with valid credentials"
    },
    {
      "line": 4,
      "value": "#    Given user is on home page"
    },
    {
      "line": 5,
      "value": "#    When user navigates to login page"
    },
    {
      "line": 6,
      "value": "#    And enters valid email davidhay677@yahoo.com and valid password inttra677"
    },
    {
      "line": 7,
      "value": "#    Then Message displayed Login Success"
    },
    {
      "line": 9,
      "value": "#  Scenario Outline: Successful login with valid credentials"
    },
    {
      "line": 10,
      "value": "#    Given user is on home page"
    },
    {
      "line": 11,
      "value": "#    When user navigates to login page"
    },
    {
      "line": 12,
      "value": "#    And enters valid email \u003cemail\u003e and valid password \u003cpassword\u003e"
    },
    {
      "line": 13,
      "value": "#    Then Message displayed Login Success"
    },
    {
      "line": 14,
      "value": "#    Examples:"
    },
    {
      "line": 15,
      "value": "#      | email                 | password  |"
    },
    {
      "line": 16,
      "value": "#      | davidhay677@yahoo.com | inttra677 |"
    },
    {
      "line": 17,
      "value": "#      | davidhay547@yahoo.com | inttra547 |"
    },
    {
      "line": 18,
      "value": "#      | davidhay415@yahoo.com | inttra415 |"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#  Scenario Outline: Unsuccessful login with invalidcredentials"
    },
    {
      "line": 21,
      "value": "#    Given user is on home page"
    },
    {
      "line": 22,
      "value": "#    When user navigates to login page"
    },
    {
      "line": 23,
      "value": "#    And enters invalid email as \u003cemail\u003e and password as \u003cpassword\u003e"
    },
    {
      "line": 24,
      "value": "#    Then Messsage displayed login failed"
    },
    {
      "line": 25,
      "value": "#    Examples:"
    },
    {
      "line": 26,
      "value": "#      | email                 | password  |"
    },
    {
      "line": 27,
      "value": "#      | invalid@yahoo.com     | inttra677 |"
    },
    {
      "line": 28,
      "value": "#      | davidhay418@yahoo.com |           |"
    },
    {
      "line": 29,
      "value": "#"
    },
    {
      "line": 30,
      "value": "#  Scenario: Successful login with valid credentials"
    },
    {
      "line": 31,
      "value": "#    Given user is on home page"
    },
    {
      "line": 32,
      "value": "#    When user navigates to login page"
    },
    {
      "line": 33,
      "value": "#    And enters valid email and valid password"
    },
    {
      "line": 34,
      "value": "#      | email    | davidhay677@yahoo.com |"
    },
    {
      "line": 35,
      "value": "#      | password | inttra677             |"
    },
    {
      "line": 36,
      "value": "#    Then Message displayed Login Success"
    }
  ],
  "line": 38,
  "name": "Successful login with valid crendentials from a file",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "passwords are read from a file",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enters a valid \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 45,
      "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;1"
    },
    {
      "cells": [
        "davidhay677@yahoo.com"
      ],
      "line": 46,
      "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 154444,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Successful login with valid crendentials from a file",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "passwords are read from a file",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enters a valid davidhay677@yahoo.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 9685206813,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2219765255,
  "status": "passed"
});
formatter.match({
  "location": "login.passwords_are_read_from_a_file()"
});
formatter.result({
  "duration": 4651334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay677@yahoo.com",
      "offset": 20
    }
  ],
  "location": "login.enters_valid_email_and_valid_password_from_a_file(String)"
});
formatter.result({
  "duration": 7640095396,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.result({
  "duration": 4099719099,
  "status": "passed"
});
formatter.after({
  "duration": 110908037,
  "status": "passed"
});
});