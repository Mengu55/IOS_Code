package com.mindtree.CucumberFramework.pageObjects;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.cucumber.listener.Reporter;
import com.mindtree.CucumberFramework.execptions.WebDriverExceptions;
import com.mindtree.CucumberFramework.utils.ReadConfigFile;

import io.appium.java_client.MobileElement;

public class LoginPageCommon extends BasePage {
	Properties p = new Properties();
	FileInputStream fis = null;
	ExtentReports extent;
	ExtentTest test;

	public static ExtentTest logger;

	ReadConfigFile file = new ReadConfigFile();

	public LoginPageCommon() {
		PageFactory.initElements(driver(), this);

	}

	// email id field
//	@FindBy(xpath = "//XCUIElementTypeTextField[@name=\"Email Textfield\"]")
//	public WebElement emailField;
	private String emailField = "//XCUIElementTypeTextField[@name=\"Email Textfield\"]";

	// tapping on continue button after entering mail id
	
	private String continueButton2 = "(//XCUIElementTypeButton[@name=\"Continue Button\"])[2]";

	// password field
//	@FindBy(xpath = "//XCUIElementTypeSecureTextField[@name=\"Password Textfield\"]")
//	public WebElement pwdField;
	private String pwdField = "//XCUIElementTypeSecureTextField[@name=\"Password Textfield\"]";

	// verify continue button is enable post entering mail id
	private String continueBtn1 = "//XCUIElementTypeButton[@name=\"Continue Button\"]";	
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Continue Button\"]")
//	public WebElement continueBtn1;

//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Next\"]")
//	public WebElement LoginButton;
	private String LoginButton="//XCUIElementTypeStaticText[@name=\"Next\"]";

//	@FindBy(xpath = "//*[@name=\"Next\"]")
//	private WebElement nextButton;
	private String nextButton= "//*[@name=\"Next\"]";

	// @FindBy(name = "Next")

	private String allow1 = "//XCUIElementTypeButton[@name=\"Allow\"]";
	// @FindBy(xpath = "//*[@name=\"Next\"]")
	private String nextButton1 = "//*[@name=\"Next\"]";
	private String SignIn = "Home Rewards Card";

	// xpath for pickup button
//	@FindBy(xpath = "//*[@name=\"Pick-Up\"]")
//	public WebElement pickupButton1;
	private String pickupButton1 = "//*[@name=\"Pick-Up\"]";
	private String pickUpBtn = "//XCUIElementTypeButton[@name=\"Pick-Up\"]";

	private String findAShackButton = "//XCUIElementTypeButton[@name=\"FindShackCTA\" and @visible=\"true\"]";

	private String allowWhileUsingApp = "Allow While Using App";
	private String searchInFindShack = "//XCUIElementTypeButton[@name=\"Search button\"]";

	private String addressInputText = "//*[@name=\"Textfield\"]";
	private String addressInputText2 = "Textfield";
	By address = By.xpath("//*[@name=\"Textfield\"]");
	private String startOrder = "//*[@name=\"Start Order\"]";
	private String yepThatsCorrect = "//*[@name=\"Yep, That’s Correct!\"]";
	private String indoorPickup = "//*[@name=\"Indoor Pick-Up\"]";
	private String bugerMenu = "//*[@name=\"Category Button - Burgers\"]";

	private String BurgerHeading = "//XCUIElementTypeOther[@name=\"Burgers, No hormones or antibiotics ever, our 100% Angus beef is humanely raised and grazed in the USA\"]";
	private String itemName = "(//XCUIElementTypeStaticText[@name=\"Name\"])[1]";
	private String priceInBurgerCategory = "(//XCUIElementTypeStaticText[@name=\"Price\"])[1]";
	private String itemCalories = "(//XCUIElementTypeStaticText[@name=\"Calories\"])[1]";

	private String QuantityNumber = "(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[2]";
	private String addtoBag = "(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[2]";

	private String signinOrCreateAccount = "//XCUIElementTypeButton[@name=\"Hi there! Sign in or create an account\"]";

	// xpath menu icon
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Drawer button\"]")
//	public WebElement menuIcon1;
	private String menuIcon1 = "//XCUIElementTypeButton[@name=\"Drawer button\"]";

	// xpath for history icon
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"History\"]")
//	public WebElement historyIcon1;
	private String historyIcon1 = "//XCUIElementTypeButton[@name=\"History\"]";

	// delivery button
//	@FindBy(xpath = "//*[@name=\"Delivery\"]")
//	public WebElement deliverybutton1;
	private String deliverybutton1 = "//*[@name=\"Delivery\"]";// XCUIElementTypeButton[@name="Delivery"]

	// play button
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Play button\"]")
//	public WebElement playbutton;
	private String playbutton= "//XCUIElementTypeButton[@name=\"Play button\"]";

	// lets get shacking
	private String letsGetShacking= "//XCUIElementTypeOther[@name=\"Home Rewards Card\"]";
//	@FindBy(xpath = "//XCUIElementTypeOther[@name=\"Home Rewards Card\"]")
//	public WebElement letsGetShacking;

	// verify home page is displayed
	private String homePage= "//XCUIElementTypeStaticText[@name=\"Header Label\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Header Label\"]")
//	public WebElement homePage;

	// verify hithere and signIn text
	private String hiTheretext= "//XCUIElementTypeStaticText [@name=\"Hi there!\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText [@name=\"Hi there!\"]")
//	public WebElement hiTheretext;
	private String signInCreateAccountText= "//XCUIElementTypeStaticText[@name=\"Sign in or create an account\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Sign in or create an account\"]")
//	public WebElement signInCreateAccountText;

	// Nutritional & Allergen info
	private String nutritionalAllergenInfo = "(//XCUIElementTypeButton[@name=\"Selection View\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[1]")
//	public WebElement nutritionalAllergenInfo;

	// FAQ
	private String faq = "(//XCUIElementTypeButton[@name=\"Selection View\"])[2]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[2]")
//	public WebElement faq;

	// contact us
	private String contactUs=" (//XCUIElementTypeButton[@name=\"Selection View\"])[3]";
//	@FindBy(xpath = " (//XCUIElementTypeButton[@name=\"Selection View\"])[3]")
//	public WebElement contactUs;

	// insta icon
	private String instaIcon = "//XCUIElementTypeButton[@name=\"Instagram button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Instagram button\"]")
//	public WebElement instaIcon;

	// twitter icon
	private String twitterIcon= "//XCUIElementTypeButton[@name=\"Twitter button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Twitter button\"]")
//	public WebElement twitterIcon;

	// FB icon
	//private String fbIcon= "Facebook button";
	private String fbIcon="//XCUIElementTypeButton[@name=\"Facebook button\"]";
//	@FindBy(name = "Facebook button")
//	public WebElement fbIcon;

	// verify terms and version
	private String terms="//XCUIElementTypeStaticText[@name=\"Terms and Privacy Policy\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Terms and Privacy Policy\"]")
//	public WebElement terms;
	private String version= "//XCUIElementTypeStaticText[contains[@name,'Version']]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[contains[@name,'Version']]")
//	public WebElement version;

	// close icon
	private String closeIcon= "//XCUIElementTypeButton[@name=\"Close Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Close Button\"]")
//	public WebElement closeIcon;

	// back button post tapping Hi there
	private String backBtn= "//XCUIElementTypeButton[@name=\"Back button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Back button\"]")
//	public WebElement backBtn;

	// verify text in login with mail
	private String getGoodsCreateAcc="//XCUIElementTypeOther[@name=\"Get the goods! Sign in or create an account.\"]";
//	@FindBy(xpath = "//XCUIElementTypeOther[@name=\"Get the goods! Sign in or create an account.\"]")
//	public WebElement getGoodsCreateAcc;

	// continue with fb,google,apple account
	private String continueFbBtn= "//XCUIElementTypeButton[@name=\"Continue with Facebook Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Continue with Facebook Button\"]")
//	public WebElement continueFbBtn;
	private String continueGoogleBtn= "//XCUIElementTypeButton[@name=\"Continue with Google Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Continue with Google Button\"]")
//	public WebElement continueGoogleBtn;
	private String continueAppleBtn= "//XCUIElementTypeButton[@name=\"Continue with Apple Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Continue with Apple Button\"]")
//	public WebElement continueAppleBtn;

	// back button in password page
	private String backBtn2= "(//XCUIElementTypeButton[@name=\"Back button\"])[2]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Back button\"])[2]")
//	public WebElement backBtn2;

	// continue button post entering password
	private String continueBtn2= "(//XCUIElementTypeButton[@name=\"Continue Button\"])[2]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Continue Button\"])[2]")
//	public WebElement continueBtn2;

	// forgot password
	private String forgotPwd= "//XCUIElementTypeButton[@name=\"Forgot Password Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Forgot Password Button\"]")
//	public WebElement forgotPwd;
	
	//order msg in home screen post placing order
	private String pendingOrder="//XCUIElementTypeOther[@name=\"Home Rewards Card\"]";
//			@FindBy(xpath="//XCUIElementTypeOther[@name=\"Home Rewards Card\"]")
//			public WebElement pendingOrder;
	private String pickupButton = "//*[@name=\"Pick-Up\"]";
	
	

	public void ClickOnAllowInPopup() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(allow1);
		// if(driver.findElement(By.xpath("menuIcon));
		// Assert.assertEquals("Menu icon is displayed on
		// screen",isDisplayed(menuIcon));
		System.out.println("clicked on allow button");
		Reporter.addStepLog("successfully tapped on allow button");
	}

	public void ClickOnNextButtonInAdvertizement() throws Exception {
		System.out.println(Thread.currentThread().getId());
		Thread.sleep(5000);
		try {
			clickUsingXPath(nextButton1);
			System.out.println("click on next");
			Reporter.addStepLog("successfully tapped on next button");
		} catch (Exception e) {
			throw e;
		}

	}

	public void ClickOnNextButtonInIfAdvertizementIsDisplayed() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		waitForElementClickableByID(addressInputText2, 15);
		try {
			if (nextButton1.contains("Next")) {
				clickUsingXPath(nextButton1);
				System.out.println("click on next");
				Reporter.addStepLog("successfully tapped on next button");
				Thread.sleep(6000);
				driver().switchTo().alert().accept();
				System.out.println("click on second allow");
				Reporter.addStepLog("successfully tapped on second allow button");
				Thread.sleep(4000);
			} else {
				clickUsingXPath(pickupButton);
				System.out.println("clicked on Pick-up");
				Reporter.addStepLog("successfully tapped on pick-up button");
			}
		} catch (Exception e) {
			throw e;
		}

	}

	public void ClickOnNextButton() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(8000);
		try {
			clickUsingXPath(nextButton1);
			System.out.println("---------tapping on next and allow button----------");
			System.out.println("tapped on next button");
			Reporter.addStepLog("successfully tapped on next button");
			Thread.sleep(6000);
			driver().switchTo().alert().accept();
			System.out.println("tapped on second allow");
			Reporter.addStepLog("successfully tapped on second allow button");
			Thread.sleep(3000);

		} catch (Exception e) {
			throw e;
		}

	}

	public void tapOnSignInHomePage() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(4000);
		try {
			clickUsingID(SignIn);
			System.out.println("tap on SignIn in home page");
			Reporter.addStepLog("tap on SignIn in home page");
			Thread.sleep(6000);

		} catch (Exception e) {
			throw e;
		}

	}

	public void clickOnPickup() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(pickupButton);
		driver().findElementByName("Pick-Up").click();
		// logger.log(LogStatus.INFO, "tap on pickup");
		System.out.println("clicked on Pick-up");
		Reporter.addStepLog("tapped on Pick-up");
		/*
		 * WebElement e = driver().findElementByXPath(pickupButton); if
		 * (e.isDisplayed()){ System.out.println("pickup button displayed");
		 * Reporter.addStepLog("pickup button displayed");
		 * clickUsingXPath(pickupButton); } else {
		 * System.out.println("pickup button not displayed");
		 * Reporter.addStepLog("pickup button not displayed"); }
		 */

	}

	public void clickOnPickupButtonInHomeScreen() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(3000);
		driver().switchTo().alert().accept();
		System.out.println("click on second allow");
		Reporter.addStepLog("click on second allow");
		Thread.sleep(2000);
		clickUsingXPath(pickupButton);
		// driver().findElementByName("Pick-Up").click();
		// logger.log(LogStatus.INFO, "tap on pickup");
		System.out.println("clicked on Pick-up");
		Reporter.addStepLog("tapped on Pick-up");
	}

	public void clickOnFindShack() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(findAShackButton);
		Reporter.addStepLog("tapped on Find a Shack button");
		System.out.println("clicked on find a shack button");
	}

	public void popupPermissionAllowWhileUsingApp() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(12000);
		clickUsingName(allowWhileUsingApp);
		Reporter.addStepLog("Allow while using App permission provided");
		System.out.println("allow permission popup Allow While Using App");
		Thread.sleep(5000);
		clickUsingXPath(searchInFindShack);

	}

	public void enterTheNearestShackOrPostalCodeInTextField() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		p.load(fis);
		Thread.sleep(200);
		waitForElementClickableByID(addressInputText2, 15);
		System.out.println("clicked on address text using ID");
		sendKeysUsingName(addressInputText2, p.getProperty("restaurantAddressFiled1"));
		Reporter.addStepLog("the nearest Shack is - " + p.getProperty("restaurantAddressFiled1"));
		// driver().findElementByXPath("//*[@name=\"Textfield\"]").sendKeys("Demo
		// Vendor");
		Thread.sleep(1000);
		driver().findElementByXPath("//*[@name=\"Textfield\"]").sendKeys(Keys.ENTER);
		// }else{

		// }
		// driver().findElementByXPath("//*[@name=\"done\"]").click();
		// logger.log(LogStatus.INFO, "enter the nearest shack Demo Vendor");
		System.out.println("enter the nearest shack Demo Vendor");
	}

	public void clickOnStartOrderButtonAndTapOnYepThatsCorrect() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(5000);
		clickUsingXPath(startOrder);

		// driver().findElementByXPath("//*[@name=\"Start Order\"]").click();
		Thread.sleep(1000);
		clickUsingXPath(yepThatsCorrect);
		System.out.println("Yep Thats Correct");
		// driver().findElementByXPath("//*[@name=\"Yep, That’s
		// Correct!\"]").click();

	}

	public void selectIndoorPickup() throws Exception {
		waitForElementClickable(indoorPickup, 40);
		System.out.println("clicked on Indoor Pickup");
	}

	// login function

	public void loginWithValidCredentials() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		p.load(fis);

		Thread.sleep(5000);
		// clickUsingXPath(emailID);
		sendKeysUsingXpath(emailField, p.getProperty("login.username"));
		System.out.println("----Entering mailid/pwd and clicking on continue button------");
		Reporter.addStepLog("email ID entered:" + p.getProperty("login.username"));
		driver().findElementByXPath("//*[@name=\"Email Textfield\"]").sendKeys(Keys.ENTER);
		WebElement e = driver().findElementByXPath(continueBtn1);
		if (e.isEnabled()) {
			System.out.println("Continue button is enabled post entering mailid");
			Reporter.addStepLog("Continue button is enabled post entering mailid");
			clickUsingXPath(continueBtn1);
			System.out.println("tapped on Continue button");
			Reporter.addStepLog("tapped on continue button after entering emailId");
		} else {
			System.out.println("Continue button not displayed");
			Reporter.addStepLog("Continue button not displayed");
		}
		/*
		 * Assert.assertTrue(backBtn2.isDisplayed());
		 * System.out.println("Back Button is displayed");
		 * Reporter.addStepLog("Back Button is displayed");
		 */
		Assert.assertTrue(isDisplayed(pwdField));
		System.out.println("Password field is displayed");
		Reporter.addStepLog("Password field is displayed");

		Assert.assertTrue(isDisplayed(forgotPwd));
		System.out.println("Forgot password Button is displayed");
		Reporter.addStepLog("Forgot password Button is displayed");

		sendKeysUsingXpath(pwdField, p.getProperty("login.password"));
		Reporter.addStepLog("password entered:" + p.getProperty("login.password"));
		System.out.println("password entered successfully");
		// driver().findElementByXPath("//*[@name=\"Password
		// Textfield\"]").sendKeys(Keys.ENTER);
		WebElement e1 = driver().findElementByXPath(continueButton2);
		if (e1.isEnabled()) {
			System.out.println("Continue button is enabled post entering password");
			Reporter.addStepLog("Continue button is enabled post entering password");
			clickUsingXPath(continueButton2);
			System.out.println("tapped on Continue button");
			Reporter.addStepLog("tapped on continue button after entering emailId");
		} else {
			System.out.println("Continue button not displayed");
			Reporter.addStepLog("Continue button not displayed");
		}
		System.out.println("tapped on continue button after entering password");
		Reporter.addStepLog("tapped on continue button after entering password");
	}

	// tapping on signin
	public void accountSignInCreation() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		waitForElementClickable(signinOrCreateAccount, 20);
		clickUsingXPath(signinOrCreateAccount);
		System.out.println("----Hi there text-------");
		Reporter.addStepLog("successfully tapped on account creation/signin");
		System.out.println("tapped on Hi there");
	}

	// tapping on menu icon
	public void clickOnMenuIcon() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(menuIcon1);
		System.out.println("---Hamburger menu icon------");
		System.out.println("Successfully tapped on Hamburger menu icon");
		Reporter.addStepLog("successfully tapped on menu icon");
	}

	// tapping on delivery button
	public void clickOnDeliveryBtn() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(deliverybutton1);
		System.out.println("-----delivery button in home page-----");
		Reporter.addStepLog("successfully tapped on delivery button");
		System.out.println("tapped on delivery");

	}

	public void verifyHomePageElements() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		waitForElementVisiblility(menuIcon1, 60);

		System.out.println("-----Verify Home Screen Elements------");
		Assert.assertTrue(isDisplayed(menuIcon1));
		System.out.println("hamburger menu is displayed");
		Reporter.addStepLog("hamburger menu is displayed");

		Assert.assertTrue(isDisplayed(historyIcon1));
		System.out.println("History icon is displayed");
		Reporter.addStepLog("History icon is displayed");

		Assert.assertTrue(isDisplayed(pickupButton1));
		System.out.println("pickup button is displayed");
		Reporter.addStepLog("pickup button is displayed");

		Assert.assertTrue(isDisplayed(deliverybutton1));
		System.out.println("Delivery button is displayed");
		Reporter.addStepLog("Delivery button is displayed");

		Assert.assertTrue(isDisplayed(playbutton));
		System.out.println("Play button  is displayed");
		Reporter.addStepLog("Play button is displayed");

		 Assert.assertEquals("Let’s get Shackin’!. Sign in or sign up.",getText(letsGetShacking));
		// System.out.println(getText(letsGetShacking));
		  Reporter.addStepLog("Let's Get Shackin'!,sign in or sign up text is displayed");
		 

		Assert.assertEquals("Korean-style Fried Chick'n", getText(homePage));
		System.out.println("Home Page is displayed");
		Reporter.addStepLog("Home Page is displayed");

	}

	public void verifyHamburgerMenuScreenElements() throws InterruptedException, Exception {
		//System.out.println(Thread.currentThread().getId());
		
		
		System.out.println("------Hamburger Menu Elements------");
		Thread.sleep(5000);
		Assert.assertEquals("Hi there!", getText(hiTheretext));
		System.out.println("Menu is displayed");
		Reporter.addStepLog("Menu is displayed");
		//System.out.println("Hi There text is displayed");
		//Reporter.addStepLog("Hi There text is displayed");

		Assert.assertEquals("Sign in or create an account", getText(signInCreateAccountText));
		//System.out.println("Sign In or Create Account Text is displayed");
		Reporter.addStepLog("Sign In Create Account Text is displayed");

		Assert.assertTrue(isDisplayed(nutritionalAllergenInfo));
		System.out.println("Nutritional Allergen Info  is displayed");
		Reporter.addStepLog("Nutritional Allergen Info  is displayed");

		Assert.assertTrue(isDisplayed(faq));
		System.out.println("FAQ is displayed");
		Reporter.addStepLog("FAQ is displayed");

		Assert.assertTrue(isDisplayed(contactUs));
		System.out.println("Contact Us  is displayed");
		Reporter.addStepLog("Contact Us is displayed");

		Assert.assertTrue(isDisplayed(instaIcon));
		System.out.println("Instagram Icon is displayed");
		Reporter.addStepLog("Instagram Icon is displayed");

		Assert.assertTrue(isDisplayed(twitterIcon));
		System.out.println("Twitter Icon is displayed");
		Reporter.addStepLog("Twitter Icon is displayed");

		Assert.assertTrue(isDisplayed(fbIcon));
		System.out.println("Facebook Icon is displayed");
		Reporter.addStepLog("Facebook Icon is displayed");

		Assert.assertEquals("Terms and Privacy Policy", getText(terms));
		//System.out.println("Terms and Privacy Policy is displayed");
		Reporter.addStepLog("Terms and Privacy Policy is displayed");

		/*Assert.assertEquals("Version 0.01", version.getText());
		System.out.println("Version is displayed");
		Reporter.addStepLog("Version is displayed");*/

		Assert.assertTrue(isDisplayed(closeIcon));
		System.out.println("Close Icon is displayed");
		Reporter.addStepLog("Close Icon is displayed");
	}

	public void verifyLoginWithMailPageElements() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		
		System.out.println("-----Email Screen Elements------");
		/*waitForElementVisible(backBtn, 40);
		Assert.assertTrue(isDisplayed(backBtn));
		System.out.println("Back Button is displayed");
		Reporter.addStepLog("Back Button is displayed");*/

		Assert.assertEquals("Get the goods! Sign in or create an account.", getText(getGoodsCreateAcc));
		//System.out.println("Get the goods! Sign in or create an account text is displayed");
		Reporter.addStepLog("Get the goods! Sign in or create an account text is displayed");

		Assert.assertTrue(isDisplayed(emailField));
		System.out.println("Email Field is displayed");
		Reporter.addStepLog("Email Field is displayed");

		Assert.assertTrue(isDisplayed(continueFbBtn));
		System.out.println("Continue Facebook Button is displayed");
		Reporter.addStepLog("Continue Facebook button is displayed");

		Assert.assertTrue(isDisplayed(continueGoogleBtn));
		System.out.println("Continue Google Button is displayed");
		Reporter.addStepLog("Continue Google Button is displayed");

		Assert.assertTrue(isDisplayed(continueAppleBtn));
		System.out.println("Continue Apple Button is displayed");
		Reporter.addStepLog("Continue Apple Button is displayed");
	}

	public void verifyContinueBtnIsEnable() {
		//System.out.println(Thread.currentThread().getId());

		Assert.assertTrue(isEnabled(continueBtn1));
		System.out.println("Continue Button is enabled");
		Reporter.addStepLog("Continue Button is enabled");

	}

	public void verifyContineBtnAfterEnteringPwd() {
		//System.out.println(Thread.currentThread().getId());
		Assert.assertTrue(isEnabled(continueBtn2));
		System.out.println("Continue Button is displayed");
		Reporter.addStepLog("Continue Button is displayed");

	}
	//pending order displayed in home screen
	public void verifyPendingOrder(){
		//System.out.println(Thread.currentThread().getId());
		Assert.assertTrue(isDisplayed(pendingOrder));
		System.out.println("Pending/Track your order is displayed");
		Reporter.addStepLog("Pending/Track your order is displayed");
	}
}
