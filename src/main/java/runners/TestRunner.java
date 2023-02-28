package runners;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\QA\\Selenium_WorkSpace\\FreeCrmBDDFramework1\\src\\main\\java\\Features\\tagging.feature"}, //the path of the feature files package
		glue={"stepDefinitons"}, //Path of the step Definition files
		format= {"pretty","html:test-output","json:json_output/cucumber.jason","junit:junit_xml/cucumber.xml"}, // to generate different types of report
		monochrome = true, //to display console output user friendly of more readable 
		//strict = true, //it will check if any step is not defined in the stepDefinition
		dryRun = false, //to check mapping is proper between feature file and stepDdefinition file
		
		tags = {"@SmokeTest, ~@RegressionTest"}
		//tags = {"@SmokeTest, @RegressionTest"}  OR operator
		//tags = {"@SmokeTest", "@RegressionTest"}  AND operator
		//~ is used for ignorance.
		)

public class TestRunner {
	
}
