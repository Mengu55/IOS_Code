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

public class CommonElements extends BasePage {

	Properties p = new Properties();
	FileInputStream fis = null;
	ExtentReports extent;
	ExtentTest test;
	
	

	public static ExtentTest logger;

	ReadConfigFile file = new ReadConfigFile();

	public CommonElements() {

		PageFactory.initElements(driver(), this);

	}

	// add to bag
	private String addtoBag = "//XCUIElementTypeButton[@name=\"Add Item Button\"]";

	private String subTotal = "//XCUIElementTypeStaticText[@name=\"Subtotal Price Label\"]";
	private String bagQuantity = "//XCUIElementTypeStaticText[@name=\"Bag Quantity Label\"]";
	private String checkout = "Checkout Button";
	private String checkoutBtn = "//XCUIElementTypeButton[@name=\"Checkout Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Checkout Button\"]")
//	public WebElement checkoutBtn;

	// verify elements after tapping checkout btn1
	// down arrow
	private String downArrow= "(//XCUIElementTypeButton[@name=\"Dismiss button\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Dismiss button\"])[1]")
//	public WebElement downArrow;
	// sweet text
	private String sweetAlmostdoneText= "//XCUIElementTypeStaticText[@name=\"Sweet, you’re almost done!\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Sweet, you’re almost done!\"]")
//	public WebElement sweetAlmostdoneText;
	// sweet sub descrp
	private String subDescription= "//XCUIElementTypeStaticText[@name=\"These items pair well with your order.\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"These items pair well with your order.\"]")
//	public WebElement subDescription;
	// suggestions
	private String suggestion= "//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeCollectionView/XCUIElementTypeCell[2]";
//	@FindBy(xpath = "//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeScrollView/XCUIElementTypeOther[2]/XCUIElementTypeCollectionView/XCUIElementTypeCell[2]")
	//public WebElement suggestion;
	
	//subtotal with bag qty in checkout1
	private String bagQty="//XCUIElementTypeStaticText[@name=\"Bag Quantity Label\"]";
	//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Bag Quantity Label\"]")
	//	public WebElement bagQty;
	private String subTotal1= "//XCUIElementTypeStaticText[@name=\"Subtotal Price Label\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Subtotal Price Label\"]")
	//public WebElement subTotal1;

	// verify elements after tapping checkout btn2
	
	// item name
	private String friesItemName = "//XCUIElementTypeStaticText[@name=\"Fries\"]";
//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Fries\"]")
//	public WebElement friesItemName;
	private String switchPickUp= "//XCUIElementTypeButton[@name=\"Switch to Pick-Up Button\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Switch to Pick-Up Button\"]") //XCUIElementTypeButton[@name="Switch to pick up."]
//	public WebElement switchPickUp;
	
	// fries with price
	private String friesAndPrice="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]")
//	public WebElement friesAndPrice;
	
	//delivery time pop-up modal
	private String updateDeliveryText="//XCUIElementTypeStaticText[@name=\"Update Your Delivery Time\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Update Your Delivery Time\"]")
//	public WebElement updateDeliveryText;
	private String backIcon="//XCUIElementTypeButton[@name=\"Back button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Back button\"]")
//	public WebElement backIcon;
	private String nextAvailable="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton")
//	public WebElement nextAvailable;
	private String scheduleLater="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton")
//	public WebElement scheduleLater;
	
	//schedule later
	//@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]")
	//@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton")
	//public WebElement scheduleLater1;
	private String scheduleLater1 = "//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton";
	
	//adding instructions
	private String addInstTextBox="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[5]/XCUIElementTypeTextView";
//	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[5]/XCUIElementTypeTextView")
//	public WebElement addInstTextBox;
	//tap bck btn
	private String backbutton1="//XCUIElementTypeButton[@name=\"Back button\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Back button\"]")
//	public WebElement backbutton1;
	
	
	public void addToBag() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(2000);
		clickUsingXPath(addtoBag);
		System.out.println("clicked on Add to Bag");
		System.out.println("------After tapping add to bag-----");
		waitForElementVisible(checkoutBtn, 30);
		Assert.assertTrue(isDisplayed(checkoutBtn));
		System.out.println("Checkout button is displayed");
		Reporter.addStepLog("Checkout button is displayed");
		// Thread.sleep(500);
		// click1(addtoBag);
		// System.out.println("clicked on Add to Bag");
		// click1(singleCalories);
		// getText(QuantityNumber);
	}

	public void checkout() throws Exception {
		System.out.println(Thread.currentThread().getId());
		//Thread.sleep(10000); // XCUIElementTypeStaticText[@name="Bag Quantity
								// Label"]
		clickUsingID(checkout);
		Reporter.addStepLog("tapped on checkout once");
		System.out.println("clicked on checkout1 using ID");
		Thread.sleep(6000);
		
		waitForElementVisible(subTotal, 20);
		System.out.println("-----verifying checkout1 screen---------");
		getText(subTotal);
		getText(bagQuantity);
		WebElement subtotal = driver().findElementByXPath(subTotal);
		String subtotals = subtotal.getText();
		Reporter.addStepLog("Subtotal:" + subtotals);
		WebElement bagQuantities = driver().findElementByXPath(subTotal);
		String quantity = bagQuantities.getText();
		Reporter.addStepLog("bag quantity:" + quantity);
		/*Assert.assertTrue(downArrow.isDisplayed());
		System.out.println("Down Arrow is displayed");
		Reporter.addStepLog("Down Arrow is displayed");*/

		Assert.assertEquals("Sweet, you’re almost done!", getText(sweetAlmostdoneText));
		System.out.println("Sweet, you’re almost done! text is displayed");
		Reporter.addStepLog("Sweet, you’re almost done! text is displayed");

		Assert.assertEquals("These items pair well with your order.", getText(subDescription));
		System.out.println("These items pair well with your order. text displayed");
		Reporter.addStepLog("These items pair well with your order. text is displayed");

		/*Assert.assertTrue(suggestion.isDisplayed());
		System.out.println("Suggestions is displayed");
		Reporter.addStepLog("Suggestions is displayed");*/
		
		Assert.assertTrue(isDisplayed(switchPickUp));
		System.out.println("Switch to pick up is displayed");
		Reporter.addStepLog("Switch to pick up is displayed");
		
		/*Assert.assertTrue(friesAndPrice.isDisplayed());
		System.out.println(friesAndPrice.isDisplayed());
		Reporter.addStepLog("Fries and Price is displayed");*/
		
		Assert.assertTrue(isDisplayed(checkoutBtn));
		System.out.println("Checkout button is displayed");
		Reporter.addStepLog("Checkout button is displayed");
		
		/*Assert.assertTrue(friesItemName.isDisplayed());  
		System.out.println(friesItemName.getText());
		Reporter.addStepLog(friesItemName.getText());*/
		
		
		driver().findElementByName("Checkout Button").click();
		Reporter.addStepLog("tapped on checkout twice");
		// clickUsingName(checkoutButton2);
		System.out.println("clicked on checkout2 using ID");
		
		
		}
	
//post tapping delivery time section
	public void verifydeliveryTimePopupScreenElements() throws Exception{
		System.out.println(Thread.currentThread().getId());
		
		Assert.assertEquals("Update Your Delivery Time", getText(updateDeliveryText));
		System.out.println(getText(updateDeliveryText));
		Reporter.addStepLog(getText(updateDeliveryText));
		
		Assert.assertTrue(isDisplayed(backIcon));
		System.out.println("back button is displayed");
		Reporter.addStepLog("back button is displayed");
		
		Assert.assertTrue(isDisplayed(nextAvailable));
		System.out.println("next available with time is displayed");
		Reporter.addStepLog("next available with time is displayed");
		
		Assert.assertTrue(isDisplayed(scheduleLater));
		System.out.println("schedule Later with time is displayed");
		Reporter.addStepLog("schedule Later with time is displayed");
		
	}
//tap on any time
	public void tapSheduleLaterTime() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		waitForElementClickable(scheduleLater1, 40);
		clickUsingXPath(scheduleLater1);
		System.out.println("schedule Later with time is tapped");
		Reporter.addStepLog("schedule Later with time is tapped");
		
	}
//adding inst
	public void tapAddInst() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(addInstTextBox);
		System.out.println(getText(addInstTextBox));
		Reporter.addStepLog("add instructions  is tapped");
		sendKeysUsingXpath(addInstTextBox, "passing instructions");
		System.out.println(getText(addInstTextBox));
		
	}
	//tap back buton
	public void tapBackButton() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(backbutton1);
		System.out.println(getText(addInstTextBox));
		
	}
	
}
