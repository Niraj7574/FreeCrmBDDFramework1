$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Title of Login Page is \"Cogmento CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters user name and password",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicked on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is on Home Page having Title \"Cogmento CRM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10990828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.title_of_Login_Page_is(String)"
});
formatter.result({
  "duration": 23998500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_user_name_and_password()"
});
formatter.result({
  "duration": 409707900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicked_on_login_button()"
});
formatter.result({
  "duration": 240701200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_is_on_Home_Page_having_Title(String)"
});
formatter.result({
  "duration": 5780800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_quit()"
});
formatter.result({
  "duration": 1272377200,
  "status": "passed"
});
});