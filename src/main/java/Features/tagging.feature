#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@FunctionalTest
Feature: Login test for Free CRM Application

@SmokeTest @RegressionTest @End2End
Scenario: Login with correct username and password
  Given Valid login test
  
@RegressionTest
Scenario: Login with incorrect username and password
  Given Invalid login test

@SmokeTest
Scenario: Create a contact 
  Given This is a contact testcase
  
@SmokeTest
Scenario: Create a deal
  Given This is a deal testcase
  
@SmokeTest @RegressionTest
Scenario: Create a task
  Given This is a task testcase
  
@RegressionTest
Scenario: Create a case 
  Given This is a  testcase
  
@RegressionTest 
Scenario: Verify left panel link
  Given Clicking on left panel link
  
 @RegressionTest
Scenario: search a deal
  Given This is search a deal testcase
  
 @RegressionTest
Scenario: search a contact
  Given This is search a contact testcase
  
 @RegressionTest
Scenario: search a call
  Given This is search a call testcase
  
  
 @RegressionTest
Scenario: search a task
  Given This is search a task testcase
  
  
 @RegressionTest @End2End
Scenario: search an email
  Given This is search an email testcase
  
@SmokeTest @RegressionTest @End2End
Scenario: validate a report
  Given This is a report test
  
@SmokeTest @RegressionTest @End2End
Scenario: application logout
  Given This is a logout test
     
   
