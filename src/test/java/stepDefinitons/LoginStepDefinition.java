package stepDefinitons;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() {		
		System.setProperty("webdriver.gecko.driver", "C:\\QA\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://ui.cogmento.com/");
	  
	}

	@When("^Title of Login Page is \"([^\"]*)\"$")
	public void title_of_Login_Page_is(String Title) {
		String expectedTitle = Title;
		String actualTitle = driver.getTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	   
	}

	@Then("^User enters user name and password$")
	public void user_enters_user_name_and_password() {
		driver.findElement(By.name("email")).sendKeys("nirajradadiya1997@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Niraj@1234");
	}

	@Then("^User clicked on login button$")
	public void user_clicked_on_login_button(){
		driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	}

	@Then("^User is on Home Page having Title \"([^\"]*)\"$")
	public void user_is_on_Home_Page_having_Title(String Title) {
	    String expectedTitle = Title;
	    String actualTitle = driver.getTitle();
	    Assert.assertEquals(expectedTitle, actualTitle);
	}
	
	@Then("^User quit$")
	public void user_quit() {
	   driver.close();
	}



}
