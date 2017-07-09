$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userLogin.feature");
formatter.feature({
  "line": 1,
  "name": "User login on news site",
  "description": "",
  "id": "user-login-on-news-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 127252,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enters valid email davidhay677@yahoo.com and valid password inttra677",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 7582257688,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2687599500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay677@yahoo.com",
      "offset": 19
    },
    {
      "val": "inttra677",
      "offset": 60
    }
  ],
  "location": "login.enters_valid_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 4958221574,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 5738014189,
  "status": "passed"
});
formatter.after({
  "duration": 120792422,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enters valid email \u003cemail\u003e and valid password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15,
      "id": "user-login-on-news-site;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "davidhay677@yahoo.com",
        "inttra677"
      ],
      "line": 16,
      "id": "user-login-on-news-site;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "davidhay547@yahoo.com",
        "inttra547"
      ],
      "line": 17,
      "id": "user-login-on-news-site;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "davidhay415@yahoo.com",
        "inttra415"
      ],
      "line": 18,
      "id": "user-login-on-news-site;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25781,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enters valid email davidhay677@yahoo.com and valid password inttra677",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 9014348865,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 3371844067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay677@yahoo.com",
      "offset": 19
    },
    {
      "val": "inttra677",
      "offset": 60
    }
  ],
  "location": "login.enters_valid_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 5882048426,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 6371181141,
  "status": "passed"
});
formatter.after({
  "duration": 120746583,
  "status": "passed"
});
formatter.before({
  "duration": 17544,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enters valid email davidhay547@yahoo.com and valid password inttra547",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 5595334837,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2467406568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay547@yahoo.com",
      "offset": 19
    },
    {
      "val": "inttra547",
      "offset": 60
    }
  ],
  "location": "login.enters_valid_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 8353815865,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 5865009495,
  "status": "passed"
});
formatter.after({
  "duration": 119541920,
  "status": "passed"
});
formatter.before({
  "duration": 85343,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enters valid email davidhay415@yahoo.com and valid password inttra415",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 6683833315,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2293660650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay415@yahoo.com",
      "offset": 19
    },
    {
      "val": "inttra415",
      "offset": 60
    }
  ],
  "location": "login.enters_valid_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 5202317193,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 7010518263,
  "status": "passed"
});
formatter.after({
  "duration": 122932915,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Unsuccessful login with invalidcredentials",
  "description": "",
  "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "enters invalid email as \u003cemail\u003e and password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Messsage displayed login failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;;1"
    },
    {
      "cells": [
        "invalid@yahoo.com",
        "inttra677"
      ],
      "line": 27,
      "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;;2"
    },
    {
      "cells": [
        "davidhay418@yahoo.com",
        ""
      ],
      "line": 28,
      "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35029,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Unsuccessful login with invalidcredentials",
  "description": "",
  "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "enters invalid email as invalid@yahoo.com and password as inttra677",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Messsage displayed login failed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 8617077836,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2316885773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid@yahoo.com",
      "offset": 24
    },
    {
      "val": "inttra677",
      "offset": 58
    }
  ],
  "location": "login.enters_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 1203893734,
  "status": "passed"
});
formatter.match({
  "location": "login.messsage_displayed_Login_Failed()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 790672952,
  "status": "passed"
});
formatter.after({
  "duration": 100035656,
  "status": "passed"
});
formatter.before({
  "duration": 24409,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Unsuccessful login with invalidcredentials",
  "description": "",
  "id": "user-login-on-news-site;unsuccessful-login-with-invalidcredentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "enters invalid email as davidhay418@yahoo.com and password as ",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Messsage displayed login failed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 6532905046,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2166311525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay418@yahoo.com",
      "offset": 24
    },
    {
      "val": "",
      "offset": 62
    }
  ],
  "location": "login.enters_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 311437359,
  "status": "passed"
});
formatter.match({
  "location": "login.messsage_displayed_Login_Failed()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 786725306,
  "status": "passed"
});
formatter.after({
  "duration": 101362118,
  "status": "passed"
});
formatter.before({
  "duration": 16125,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user navigates to login page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "enters valid email and valid password",
  "rows": [
    {
      "cells": [
        "email",
        "davidhay677@yahoo.com"
      ],
      "line": 34
    },
    {
      "cells": [
        "password",
        "inttra677"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Message displayed Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 5772531531,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2133328650,
  "status": "passed"
});
formatter.match({
  "location": "login.enters_valid_email_and_valid_password(DataTable)"
});
formatter.result({
  "duration": 15795380358,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 5446550621,
  "status": "passed"
});
formatter.after({
  "duration": 121132286,
  "status": "passed"
});
formatter.scenarioOutline({
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
    },
    {
      "cells": [
        "davidhay547@yahoo.com"
      ],
      "line": 47,
      "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;3"
    },
    {
      "cells": [
        "davidhay415@yahoo.com"
      ],
      "line": 48,
      "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94616,
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
  "duration": 8343112182,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2364101543,
  "status": "passed"
});
formatter.match({
  "location": "login.passwords_are_read_from_a_file()"
});
formatter.result({
  "duration": 4645251,
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
  "duration": 6112349708,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 6389852933,
  "status": "passed"
});
formatter.after({
  "duration": 126701085,
  "status": "passed"
});
formatter.before({
  "duration": 29258,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Successful login with valid crendentials from a file",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;3",
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
  "name": "user enters a valid davidhay547@yahoo.com",
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
  "duration": 7740446886,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2628074718,
  "status": "passed"
});
formatter.match({
  "location": "login.passwords_are_read_from_a_file()"
});
formatter.result({
  "duration": 315363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay547@yahoo.com",
      "offset": 20
    }
  ],
  "location": "login.enters_valid_email_and_valid_password_from_a_file(String)"
});
formatter.result({
  "duration": 5673070550,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 5666854535,
  "status": "passed"
});
formatter.after({
  "duration": 107942841,
  "status": "passed"
});
formatter.before({
  "duration": 35458,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Successful login with valid crendentials from a file",
  "description": "",
  "id": "user-login-on-news-site;successful-login-with-valid-crendentials-from-a-file;;4",
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
  "name": "user enters a valid davidhay415@yahoo.com",
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
  "duration": 6949664787,
  "status": "passed"
});
formatter.match({
  "location": "login.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 7945625905,
  "status": "passed"
});
formatter.match({
  "location": "login.passwords_are_read_from_a_file()"
});
formatter.result({
  "duration": 401450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davidhay415@yahoo.com",
      "offset": 20
    }
  ],
  "location": "login.enters_valid_email_and_valid_password_from_a_file(String)"
});
formatter.result({
  "duration": 5302454968,
  "status": "passed"
});
formatter.match({
  "location": "login.messageDisplayedLoginSuccess()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 5408736528,
  "status": "passed"
});
formatter.after({
  "duration": 125074161,
  "status": "passed"
});
});