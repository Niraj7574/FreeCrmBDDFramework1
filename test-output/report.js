$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/QA/Selenium_WorkSpace/FreeCrmBDDFramework1/src/main/java/Features/tagging.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login test for Free CRM Application",
  "description": "",
  "id": "login-test-for-free-crm-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Login with correct username and password",
  "description": "",
  "id": "login-test-for-free-crm-application;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    },
    {
      "line": 22,
      "name": "@RegressionTest"
    },
    {
      "line": 22,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.valid_login_test()"
});
formatter.result({
  "duration": 380293300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create a contact",
  "description": "",
  "id": "login-test-for-free-crm-application;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "This is a contact testcase",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_a_contact_testcase()"
});
formatter.result({
  "duration": 98400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create a deal",
  "description": "",
  "id": "login-test-for-free-crm-application;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "This is a deal testcase",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_a_deal_testcase()"
});
formatter.result({
  "duration": 119500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Create a task",
  "description": "",
  "id": "login-test-for-free-crm-application;create-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@SmokeTest"
    },
    {
      "line": 38,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "This is a task testcase",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_a_task_testcase()"
});
formatter.result({
  "duration": 171400,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "validate a report",
  "description": "",
  "id": "login-test-for-free-crm-application;validate-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@SmokeTest"
    },
    {
      "line": 72,
      "name": "@RegressionTest"
    },
    {
      "line": 72,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "This is a report test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_a_report_test()"
});
formatter.result({
  "duration": 100700,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "application logout",
  "description": "",
  "id": "login-test-for-free-crm-application;application-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@SmokeTest"
    },
    {
      "line": 76,
      "name": "@RegressionTest"
    },
    {
      "line": 76,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "This is a logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_a_logout_test()"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
});