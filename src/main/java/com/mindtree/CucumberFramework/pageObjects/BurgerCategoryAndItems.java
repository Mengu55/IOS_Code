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



public class BurgerCategoryAndItems extends BasePage {
	Properties p = new Properties();
    FileInputStream fis = null;
    ExtentReports extent;
    ExtentTest test;
    
	public static ExtentTest logger;
	
	ReadConfigFile file = new ReadConfigFile();
	
	public BurgerCategoryAndItems() {
		PageFactory.initElements(driver(), this);
	}
	
	public static String StoreCreditValue,Storeval1, Storeval2, StoreVal3, Storeval4, Storeval5,Storeval6, Storeval7,Storeval8,Storeval9,shippingCost, RANDOMCONST, RANDOMCONSTPlusStoreval1, RANDOMStoreval1, giftCertificatePayment;
	static double StoreCredit;

	
	private String bugerMenu = "//*[@name=\"Category Button - Burgers\"]"; 
	
	
	private String BurgerHeading = "//XCUIElementTypeOther[@name=\"Burgers, No hormones or antibiotics ever, our 100% Angus beef is humanely raised and grazed in the USA\"]";
	private String itemName = "(//XCUIElementTypeStaticText[@name=\"Name\"])[1]";
	private String priceInBurgerCategory = "(//XCUIElementTypeStaticText[@name=\"Price\"])[1]";
	private String itemCalories = "(//XCUIElementTypeStaticText[@name=\"Calories\"])[1]";
	
	private String singleCalories ="(//XCUIElementTypeButton[@name=\"Size Selection Button\"])[1]";
	private String QuantityNumber = "(//XCUIElementTypeStaticText[@name=\"Quantity Label\"])[2]";
	
	//private String bagQuantity = "//XCUIElementTypeStaticText[@name=\"Bag Quantity Label\"]";
	private String checkoutButton1 = "//*[@name=\"Checkout Button\"]";
	//private String checkout = "Checkout Button";
	//private String subTotal = "//XCUIElementTypeStaticText[@name=\"Subtotal Price Label\"]";
	private String checkoutButton2 = "Checkout Button";
	
	//increment qty
	private String increaseQty="//XCUIElementTypeButton[@name=\"Increment button\"]";
	//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Increment button\"]")
	//	public WebElement increaseQty;
	
	private String pickUpTime = "//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther";
	
	public void ClickOnAllowInPopup() {
		System.out.println(Thread.currentThread().getId());
		
		driver().switchTo().alert().accept();
        System.out.println("clicked on allow button");
       	
	}
	
	
	public void clickOnBurgerMenu() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(20000);
		clickUsingXPath(bugerMenu);
		System.out.println("clicked on Burger");
		Reporter.addStepLog("successfully selected burger category");
		
	}
	
	
	public void clickOnItemUnderBurger() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		
		getText(priceInBurgerCategory);
		WebElement element1 = driver().findElementByXPath(priceInBurgerCategory);
		String text = element1.getText();
		Reporter.addStepLog("Burger price:" +text);
		
		//System.out.println(priceInBurgerCategory);
		getText(itemCalories);
		WebElement element2 = driver().findElementByXPath(itemCalories);
		String text2 = element2.getText();
		Reporter.addStepLog("Burger calories:" +text2);
		//System.out.println(itemCalories);
		getText(itemName);
		WebElement element3 = driver().findElementByXPath(itemName);
		String text3 = element3.getText();
		Reporter.addStepLog("Burger name:" +text3);
		//System.out.println(itemName);
		//Assert.assertEquals(itemName, "trip list header is not displayed");
		clickUsingXPath(itemName);
		Reporter.addStepLog(text3+" burger selected");
	}
	
	public void selectSingleCalories()throws Exception{
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(2000);
		clickUsingXPath(singleCalories);
		System.out.println("tapped on single calories");
		Reporter.addStepLog("tapped on single calories");
	}
	
		
	
	
	public void changePickUpTime() throws Exception{
	//	System.out.println(Thread.currentThread().getId());
		clickUsingXPath(pickUpTime);
	}
	//increase qty
		public void increaseQuantity() throws Exception{
			clickUsingXPath(increaseQty);
			System.out.println("tapped on increase icon");
		}
	
	
//	public static String verifyProductValueInCart() throws IOException, InterruptedException{
//		try{
//		WebElement productPriceInCart = TORObj();
//		
//		if(productPriceInCart.getText().contains(Storeval1))
//		return PassResultUpdates("Successfully Stored "+productPriceInCart.getText().toLowerCase());
//		else
//			return FailResultUpdates(Storeval1 +"product value is not matching in cart" );
//		
//		}catch (Exception e) {
//			return FailResultUpdates(e.getMessage());
//		}
//					
//	}
	
	
	
}
