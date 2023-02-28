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

Feature: Free CRM create contacts
  

Scenario Outline: Free CRM create new contact scenario
Given User is already on Login Page
When Title of Login Page is "Cogmento CRM"
Then User enters "<userName>" and "<password>"
Then User clicked on login button
Then User is on Home Page displaying user name label
Then User move to contacts page
Then User click on Create button
Then User enters contact details "<firstName>", "<lastName>" and "<company>"
Then user click on Save button
Then User quit


    Examples: 
      |       userName 							| password   | firstName  | lastName    | company  |
      | nirajradadiya1997@gmail.com | Niraj@1234 | Krishna    | Yadav       | Dwarika  |
      #| nirajradadiya1997@gmail.com | Niraj@1234 | Ramchandra | Raghuvanshi | Ayodhya  |
      #| nirajradadiya1997@gmail.com | Niraj@1234 | Shankar    | Mahadev     | Kailash  |