package com.mindtree.CucumberFramework.pageObjects;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;
import java.util.concurrent.TimeoutException;

import org.junit.rules.TestName;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.cucumber.listener.Reporter;
import com.mindtree.CucumberFramework.execptions.WebDriverExceptions;
import com.mindtree.CucumberFramework.utils.ReadConfigFile;

public class DeliveryPage extends BasePage {

	Properties p = new Properties();
    FileInputStream fis = null;
	
	ReadConfigFile file = new ReadConfigFile();
	
	
	
	public DeliveryPage() {
		PageFactory.initElements(driver(), this);
	}
	
	private String allowWhileUsingApp = "Allow While Using App";

	
	private String addressBtn = "//XCUIElementTypeOther[@name=\"225 Varick Street, New York, NY, USA\"]";
	
	
	private String addressInputField = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[1]";
	
	private String selectAddress ="//XCUIElementTypeOther[@name=\"225 Varick Street, New York, NY, USA\"]";
	private String nextBtn = "//XCUIElementTypeButton[@name=\"Next\"]";
	private String startOrder = "XCUIElementTypeButton[@name=\"Start Order\"]"; 
	
	/*@FindBy(xpath = " //XCUIElementTypeOther[@name=\"225 Varick Street, New York, NY, USA\"]")
	public WebElement selectAddress;
	
	//next button
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Next\"]")
	public WebElement nextBtn;
	;
	//private String startOrderBtn = "//XCUIElementTypeButton[@name=\"Delivery\"]";
	
	//tapping on start order button
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Start Order\"]")
	public WebElement startOrder;
	
	//XCUIElementTypeButton[contains(text(),'Start Order')]";
	//XCUIElementTypeButton[@name=\"Start Order\"]";
	// "//XCUIElementTypeStaticText[@name=\"Start Order\"]";;
	//XCUIElementTypeButton(contains(text)[@name=\"Start Order\"]")*/
	
	//enter app/suite/unit
	private String optionalAddressField="(//XCUIElementTypeTextField[@name=\"Textfield\"])[2]";
	private String addressBtn1 ="//XCUIElementTypeTextField[@name=\"12-A\"]";
	private String selectAddress2="//XCUIElementTypeTextField[@name=\"12-A\"]";
	//@FindBy(xpath ="//XCUIElementTypeTextField[@name=\"12-A\"]")
	//public WebElement selectAddress2;
	private String NxtBtnAddressField = "//XCUIElementTypeButton[@name=\"Next\"]";
	
	//verify shack to your doorstep text
	private String shacktoyourdoorsteptext ="//XCUIElementTypeStaticText[@name=\"Shack To Your Doorstep\"]";
	//@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Shack To Your Doorstep\"]")
	//public WebElement shacktoyourdoorsteptext;
	
	//verify Enter your delivery address to get things rollin' text
	private String enterDeliveryAddText="//XCUIElementTypeStaticText[@name=\"Please enter your delivery address to get things rolling.\"]";
	//@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Please enter your delivery address to get things rolling.\"]")
	//public WebElement enterDeliveryAddText;
	
	//switch to pick up
	private String switchToPickUpBtn ="//XCUIElementTypeButton[@name=\"Switch To Pick-Up\"]";
	//@FindBy(xpath="//XCUIElementTypeButton[@name=\"Switch To Pick-Up\"]")
	//public WebElement switchToPickUpBtn;
	
	//delivery add field
	private String deliveryAddField ="(//XCUIElementTypeTextField[@name=\"Textfield\"])[1]";
	//@FindBy(xpath="(//XCUIElementTypeTextField[@name=\"Textfield\"])[1]")
	//public WebElement deliveryAddField;
	
	//appsuite field
	private String appSuiteUnitField ="(//XCUIElementTypeTextField[@name=\"Textfield\"])[2]";
	//@FindBy(xpath="(//XCUIElementTypeTextField[@name=\"Textfield\"])[2]")
	//public WebElement appSuiteUnitField;
	
	//suggested adddress displayed 
	private String suggestedAdd="//XCUIElementTypeOther[@name=\"26 Broadway, New York, NY, USA\"]";
	//@FindBy(xpath="//XCUIElementTypeOther[@name=\"26 Broadway, New York, NY, USA\"]")
	//public WebElement suggestedAdd;
	
	//back button2
	private String backBtn1 ="//XCUIElementTypeButton[@name=\"Back button\"]";
	private String backBtn2 ="Back button";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Back button\"]")
//	public WebElement backBtn2;
	//choose your delivery time
//	private String chooseDeliveryTime="Choose Your Delivery Time";
	private String chooseDeliveryTime="//XCUIElementTypeStaticText[@name=\"Choose Your Delivery Time\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Choose Your Delivery Time\"]")
//	public WebElement chooseDeliveryTime;
	//next avaialable text
	private String nextAvlText="//XCUIElementTypeStaticText[@name=\"Next Available\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Next Available\"]")
//	public WebElement nextAvlText;
	//schedule for later
	private String scheduleLater="//XCUIElementTypeStaticText[@name=\"Or Schedule For Later\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Or Schedule For Later\"]")
//	public WebElement scheduleLater;
	
	private String nextAvail ="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]")
//	public WebElement nextAvail;
	
	public void clickOnAllowButton() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingName(allowWhileUsingApp);
		System.out.println("allow permission popup Allow While Using App");
	}
	
      
   public void enterTheAddress() throws Exception {
	  // System.out.println(Thread.currentThread().getId());
	   try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace(); 
		}
		p.load(fis);
	   //waitForElementClickable(deliveryBtn, 10);
		
		
		/*Assert.assertTrue(suggestedAdd.isDisplayed());
		  System.out.println("Suggested address is displayed ");
		   Reporter.addStepLog("Suggested address is displayed");*/
	   sendKeysUsingXpath(addressInputField,p.getProperty("DeliveryAddress1"));
	   System.out.println("------entering delivery address and appsuite address--------");
	   Reporter.addStepLog("entered the delivery address :"+p.getProperty("DeliveryAddress1"));
	   System.out.println("entered the delivery address :"+p.getProperty("DeliveryAddress1"));
	  // waitForElementClickable(addressBtn,30);
	     
   }
	   
	   public void enterAppsuit() throws Exception{
		  // System.out.println(Thread.currentThread().getId());
	  sendKeysUsingXpath(optionalAddressField,p.getProperty("AppSuitUnit"));
	   Reporter.addStepLog("entered the optional delivery address :"+p.getProperty("AppSuitUnit"));
	   System.out.println("entered the optional delivery address :"+p.getProperty("AppSuitUnit"));
	   Thread.sleep(1000);
	   waitForElementClickable(addressBtn1,10);
	   
	}
   //enter incomplete delivery address
   public void enterIncompleteAddress() throws Exception {
	 //  System.out.println(Thread.currentThread().getId());
	   try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace(); 
		}
		p.load(fis);
	   //waitForElementClickable(deliveryBtn, 10);
		
		
		/*Assert.assertTrue(suggestedAdd.isDisplayed());
		  System.out.println("Suggested address is displayed ");
		   Reporter.addStepLog("Suggested address is displayed");*/
	   sendKeysUsingXpath(addressInputField,p.getProperty("DeliveryAddressIncomplete"));
	   System.out.println("------entering incomplete delivery address--------");
	   Reporter.addStepLog("entered the delivery address :"+p.getProperty("DeliveryAddressIncomplete"));
	   System.out.println("entered the delivery address :"+p.getProperty("DeliveryAddressIncomplete"));
	   waitForElementClickable(addressBtn,20);
   }

	public void clickOnNextBtnOnAddressField() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		
		//waitForElementClickable(NxtBtnAddressField, 20);
		clickUsingXPath(NxtBtnAddressField);
		System.out.println("-----next button-----");
		System.out.println("successfully tapped on next button");
		Reporter.addStepLog("tap on next button in Shack to Door Step page");
	}
	public void verifyChooseDeliveryScreen() throws Exception{
		//waitForElementVisible(, 40);
		waitForElementVisiblility(switchToPickUpBtn, 40);
		waitForElementVisiblility(chooseDeliveryTime, 60);
		System.out.println("-----verifying the elements after tapping on next button-----");
		/*Assert.assertTrue(isDisplayed(backBtn2));
		System.out.println("Back button is displayed");
		Reporter.addStepLog("Back button is displayed");
		
		/*Assert.assertTrue(isDisplayed(nextAvail));
		System.out.println("Next Available  is selected by default");
		Reporter.addStepLog("Next Available is selected by default");*/

		Assert.assertTrue(isDisplayed(switchToPickUpBtn));
		System.out.println("Switch to pick up button is displayed");
		Reporter.addStepLog("Switch to pick up button is displayed");
		
		Assert.assertEquals("Choose Your Delivery Time",getText(chooseDeliveryTime));
		//System.out.println(getText(chooseDeliveryTime));
		Reporter.addStepLog("Choose Your Delivery Time text is displayed");
		
		
		Assert.assertTrue(isDisplayed(startOrder));
		System.out.println("Start Order button is displayed");
		Reporter.addStepLog("Start Order button is displayed");

		Assert.assertEquals("Or Schedule For Later", getText(scheduleLater));
		System.out.println("Schedule For Later text is displayed");
		Reporter.addStepLog("Schedule For Later text is displayed");
		
		
	}
	

   public void clickOnStartOderBtn() throws Exception {
	   //System.out.println(Thread.currentThread().getId());
	   
	   waitForElementClickable(startOrder, 20);
	   clickUsingXPath(startOrder);
	   System.out.println("-----choose delivery time and tapping start button-----");
	   System.out.println("successfully tapped start order button");
	   Reporter.addStepLog("successfully tapped start order button");

	}
   
   
 /*//enter optional address App/suite/Unit
   public void enterOptionalAddress() throws Exception {
	   try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		p.load(fis);
	   sendKeysUsingXpath(optionalAddressField,p.getProperty("DeliveryAddress2"));
	   Reporter.addStepLog("entered the optional delivery address :"+p.getProperty("DeliveryAddress2"));
	   System.out.println("entered the optional delivery address :"+p.getProperty("DeliveryAddress2"));
	   clickUsingXPath(addressBtn1);
	}*/
   
   public void verifyDeliveryAddScreenElements() throws  Exception{
	   //System.out.println(Thread.currentThread().getId());
	   //waitForElementVisible(shacktoyourdoorsteptext, 30);
	   waitForElementVisiblility(shacktoyourdoorsteptext, 30);
	   Thread.sleep(2000);
	   
	   System.out.println("------delivery address screen---------");
	   Assert.assertEquals("Shack To Your Doorstep",getText(shacktoyourdoorsteptext));
	  // System.out.println("Shack To Your Doorstep text is displayed ");
	   Reporter.addStepLog("Shack To Your Doorstep text is displayed");
	   
	   Assert.assertEquals("Please enter your delivery address to get things rolling.",getText(enterDeliveryAddText));
	  // System.out.println("Enter your delivery address to get things rollin' text is displayed ");
	   Reporter.addStepLog("Enter your delivery address to get things rollin' text is displayed");
	   
	   Assert.assertTrue(isDisplayed(switchToPickUpBtn));
	   System.out.println("Switch to pick up button is displayed ");
	   Reporter.addStepLog("Switch to pick up button is displayed");
	   
	   Assert.assertTrue(isDisplayed(deliveryAddField));
	   System.out.println("Delivery address field is displayed ");
	   Reporter.addStepLog("Delivery address field is displayed");
	   
	   Assert.assertTrue(isDisplayed(appSuiteUnitField));
	   System.out.println("App/Suite/Unit/Etc field is displayed ");
	   Reporter.addStepLog("App/Suite/Unit/Etc field is displayed");
	   
	   Assert.assertTrue(isDisplayed(nextBtn));
	   System.out.println("Next button is displayed ");
	   Reporter.addStepLog("Next button is displayed");
   }
 
   
   	}
	
	

