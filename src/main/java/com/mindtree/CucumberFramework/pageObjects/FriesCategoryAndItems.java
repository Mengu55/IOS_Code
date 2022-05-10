package com.mindtree.CucumberFramework.pageObjects;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.cucumber.listener.Reporter;
import com.mindtree.CucumberFramework.execptions.WebDriverExceptions;
import com.mindtree.CucumberFramework.utils.ReadConfigFile;

public class FriesCategoryAndItems extends BasePage {
	Properties p = new Properties();
	FileInputStream fis = null;
	ExtentReports extent;
	ExtentTest test;

	public static ExtentTest logger;

	ReadConfigFile file = new ReadConfigFile();

	public FriesCategoryAndItems() {
		PageFactory.initElements(driver(), this);
	}

	public static String StoreCreditValue, Storeval1, Storeval2, StoreVal3, Storeval4, Storeval5, Storeval6, Storeval7,
			Storeval8, Storeval9, shippingCost, RANDOMCONST, RANDOMCONSTPlusStoreval1, RANDOMStoreval1,
			giftCertificatePayment;
	static double StoreCredit;

	// tapping on Crinkle fries menu
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]")
//	public WebElement friesMainMenu;
	private String friesMainMenu = "//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]";
	
	private String friesItem="//XCUIElementTypeCell[@name=\"Fries\"]/XCUIElementTypeOther";
//	@FindBy(xpath="//XCUIElementTypeCell[@name=\"Fries\"]/XCUIElementTypeOther")
//	public WebElement friesItem;
	private String itemName = "//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]";

	// fries menu items and text
	private String crinkleCutFriesAndDesc="//XCUIElementTypeOther[@name=\"Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil\"]";
//	@FindBy(xpath = "//XCUIElementTypeOther[@name=\"Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil\"]")
//	public WebElement crinkleCutFriesAndDesc;

	// fries item image
	private String friesItemImage ="(//XCUIElementTypeImage[@name=\"Image\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeImage[@name=\"Image\"])[1]")
//	public WebElement friesItemImage;

	// fries item name
	private String friesItemName = "(//XCUIElementTypeStaticText[@name=\"Name\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Name\"])[1]")
//	public WebElement friesItemName;

	// fries item description
	private String friesItemDesc= "(//XCUIElementTypeStaticText[@name=\"Description\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Description\"])[1]")
//	public WebElement friesItemDesc;

	// fries item price
	private String friesItemPrice="(//XCUIElementTypeStaticText[@name=\"Price\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Price\"])[1]")
//	public WebElement friesItemPrice;

	// fries item calories
	private String friesItemCalories = "(//XCUIElementTypeStaticText[@name=\"Calories\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Calories\"])[1]")
//	public WebElement friesItemCalories;
	
	//Add to bag
	private String addToBagBtn ="//XCUIElementTypeButton[@name=\"Add Item Button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Add Item Button\"]")
//	public WebElement addToBagBtn;
	
	//customize text
	private String customizeText= "//XCUIElementTypeStaticText[@name=\"Customize\"])[3]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Customize\"])[3]")
//	public WebElement customizeText;
	
	//down arrow
	private String downArrow ="//XCUIElementTypeButton[@name=\"Dismiss button\"])[1]";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[5]/XCUIElementTypeOther[1]/XCUIElementTypeImage")
//	public WebElement downArrow;
	
	//quantity text
	private String quantityText="(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[1]";
//	@FindBy(xpath="(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[1]")
//	public WebElement quantityText;
	
	//increment qty
	private String incrementBtn="//XCUIElementTypeButton[@name=\"Increment button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Increment button\"]")
//	public WebElement incrementBtn;
	
	//decrement qty
	private String decrementBtn="//XCUIElementTypeButton[@name=\"Decrement button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Decrement button\"]")
//	public WebElement decrementBtn;
	
	//1 qty
	private String oneQuantity="(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[2] (1 qty)";
//	@FindBy(xpath="(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[2] (1 qty)")
//	public WebElement oneQuantity;
	
	//verify description,calories,price after selecting Fries item
	private String description ="//XCUIElementTypeStaticText[@name=\"Description label\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Description label\"]")
//	public WebElement description;
	private String price="//XCUIElementTypeStaticText[@name=\"Subtotal label\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Subtotal label\"]")
//	public WebElement price;
	private String calories="//XCUIElementTypeStaticText[@name=\"Calories label\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Calories label\"]")
//	public WebElement calories;
	private String fries="//XCUIElementTypeStaticText[@name=\"Title label\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Title label\"]")
//	public WebElement fries;
	
	//back button in item selection screen
	private String backBtn="//XCUIElementTypeButton[@name=\"Back button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Back button\"]")
//	public WebElement backBtn;
	
	//other fries item
	private String cheeseFriesItem="//XCUIElementTypeCell[@name=\"Cheese Fries\"]/XCUIElementTypeOther";
//	@FindBy(xpath="//XCUIElementTypeCell[@name=\"Cheese Fries\"]/XCUIElementTypeOther")
	//(//XCUIElementTypeStaticText[@name="Name"])[2] ->>>>(text path)
//	public WebElement cheeseFriesItem;
	private String baconCheeseFriesItem="//XCUIElementTypeCell[@name=\"Bacon Cheese Fries\"]/XCUIElementTypeOther";
//	@FindBy(xpath="//XCUIElementTypeCell[@name=\"Bacon Cheese Fries\"]/XCUIElementTypeOther")
	//(//XCUIElementTypeStaticText[@name="Name"])[1] ->>>>(text path)
//	public WebElement baconCheeseFriesItem;
	private String friesMenu ="//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]";
	
	//scroll in fries menu screen
//	private String
	@FindBy(xpath="//XCUIElementTypeOther[@name=\"Vertical scroll bar, 12 pages\"]")
	public WebElement verticalScroll;
		
	

	public void clickOnFriesMenu() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(friesMenu);
		System.out.println("---tapping on Fries Menu Icon------");
		System.out.println("Fries menu clicked");
		Reporter.addStepLog("Successfully opened Fries Menu screen");

	}

	public void clickOnCrinkleFries() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		System.out.println("----tapping on Fries Item--------");
		clickUsingXPath(friesItem);		
		System.out.println("Crinkle Cut Fries item clicked");
		Reporter.addStepLog("Successfully clicked on Crinkle Cut Fries item");
		
		waitForElementVisible(fries, 40);
		Assert.assertTrue(isDisplayed(fries));  
		System.out.println(getText(fries));
		Reporter.addStepLog("Fries text is displayed ");
		
		
		Assert.assertTrue(isDisplayed(description));
		
		System.out.println(getText(description));
		Reporter.addStepLog("Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil text is displayed");
		
		Assert.assertTrue(isDisplayed(price));
		System.out.println(getText(price));
		Reporter.addStepLog("Price is displayed");
				
		Assert.assertTrue(isDisplayed(calories));
		System.out.println(getText(calories));
		Reporter.addStepLog("Calories is displayed");
		
	}

	public void verifyFriesMenuElements() throws Exception{
	//	System.out.println(Thread.currentThread().getId());
	Assert.assertTrue(isDisplayed(friesMainMenu));
	System.out.println("-------verify Fries Menu Screen----------");
	System.out.println("Fries Main Menu is displayed");
	Reporter.addStepLog("Fries Main Menu is displayed");
		
	Assert.assertEquals("Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil", getText(crinkleCutFriesAndDesc));
	System.out.println("Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil text is displayed");
	Reporter.addStepLog("Crinkle Cut Fries, Crispy and cut from golden potatoes, prepared in pure, cholesterol-free soy oil text is displayed");
	
	/*Assert.assertTrue(friesItemImage.isDisplayed());
	System.out.println("Fries Item Image is displayed");
	Reporter.addStepLog("Fries Item Image is displayed");*/
	
	/*Assert.assertTrue(friesItemName.isDisplayed());
	System.out.println("Fries Item Name is displayed"); 
	Reporter.addStepLog("Fries Item Name is displayed");*/
	
	Assert.assertTrue(isDisplayed(friesItemDesc));
	System.out.println("Fries Item Description is displayed");
	Reporter.addStepLog("Fries Item Description is displayed");
	
	Assert.assertTrue(isDisplayed(friesItemPrice));
	System.out.println("Fries Item Price is displayed");
	Reporter.addStepLog("Fries Item Price is displayed");
	
	Assert.assertTrue(isDisplayed(friesItemCalories));
	System.out.println("Fries Item Calories is displayed");
	Reporter.addStepLog("Fries Item Calories is displayed");
	
	
	Assert.assertTrue(isDisplayed(cheeseFriesItem));
	System.out.println("Cheese Fries Item  is displayed");
	Reporter.addStepLog("Cheese Fries Item  is displayed");
	
	
		
	Assert.assertTrue(isDisplayed(baconCheeseFriesItem));
	System.out.println("Fries Item Calories is displayed");
	Reporter.addStepLog("Fries Item Calories is displayed");
	
	}
	
	public void verifyAfterItemSelectionScreenCommonElements() throws Exception{
	//	System.out.println(Thread.currentThread().getId());
	
		waitForElementVisible(customizeText, 40);
	System.out.println("------verifying common elements after selecting an item------------");
	Assert.assertTrue(isDisplayed(customizeText)); 
	System.out.println(getText(customizeText));
	Reporter.addStepLog("Customize text is displayed");
	
	Assert.assertEquals("Quantity Label", getText(quantityText));
	System.out.println("Quantity text is displayed");
	Reporter.addStepLog("Quantity text is displayed");
	
	Assert.assertTrue(isDisplayed(incrementBtn));
	System.out.println("Increment button is displayed");
	Reporter.addStepLog("Increment button is displayed");
		
	Assert.assertTrue(isDisplayed(decrementBtn));
	System.out.println("Decrement button is displayed");
	Reporter.addStepLog("Decrement button is displayed");
	
	Assert.assertTrue(isDisplayed(oneQuantity));
	System.out.println("1 Quantity is displayed");
	Reporter.addStepLog("1 Quantity is displayed");
	
	
	Assert.assertTrue(isDisplayed(downArrow));
	System.out.println("Down Arrow is displayed");
	Reporter.addStepLog("Down Arrow is displayed");
	
	Assert.assertTrue(isDisplayed(backBtn));
	System.out.println("Back button is displayed");
	Reporter.addStepLog("Back button is displayed");
	
	Assert.assertTrue(isDisplayed(addToBagBtn));
	System.out.println("Add to Bag button is displayed");
	Reporter.addStepLog("Add to Bag button is displayed");
	}
}
