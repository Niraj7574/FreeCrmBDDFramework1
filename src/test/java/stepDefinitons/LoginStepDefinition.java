package stepDefinitons;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

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
		driver.manage().deleteAllCookies();
	  
	}

	@When("^Title of Login Page is \"([^\"]*)\"$")
	public void title_of_Login_Page_is(String Title) {
		String expectedTitle = Title;
		String actualTitle = driver.getTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	   
	}

	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_user_name_and_password(String userName, String password) {
		driver.findElement(By.name("email")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^User clicked on login button$")
	public void user_clicked_on_login_button(){
		driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	}

	@Then("^User is on Home Page displaying user name label$")
	public void user_is_on_Home_Page_displaying_user_name_label() {
		Assert.assertTrue(driver.findElement(By.xpath("//span[@class='user-display']")).isDisplayed());
	}

	@Then("^User move to contacts page$")
	public void user_move_to_contacts_page() {
		driver.findElement(By.xpath("//i[@class='users icon']")).click();
	}

	@Then("^User click on Create button$")
	public void user_click_on_Create_button(){
		driver.findElement(By.linkText("Create")).click();
	}

	@Then("^User enters contact details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and(String firstName, String lastName, String company)  {
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(firstName);
		driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(lastName);
		driver.findElement(By.xpath("//div[@name='company']")).sendKeys(company);
	}

	@Then("^user click on Save button$")
	public void user_click_on_Save_button()  {
		driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
	}

	@Then("^User quit$")
	public void user_quit() {
	   driver.close();
	}
}
