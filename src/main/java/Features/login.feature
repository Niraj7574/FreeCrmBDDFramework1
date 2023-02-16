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

Feature: Free CRM Login Feature
  

Scenario: Free CRM Login Test Scenario
Given User is already on Login Page
When Title of Login Page is "Cogmento CRM"
Then User enters user name and password
Then User clicked on login button
Then User is on Home Page having Title "Cogmento CRM"
Then User quit

Scenario: User is able to Create New Contact
Given User is already on Home page
When User mouse hover on contact link
Then User click on contack link
Then User click on create button
Then User Enters First Name, Last name and email
Then User clicks on Save
Then User quit

