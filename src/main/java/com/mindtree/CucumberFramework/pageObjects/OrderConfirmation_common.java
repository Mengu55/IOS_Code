package com.mindtree.CucumberFramework.pageObjects;

import java.io.FileInputStream;
import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.listener.Reporter;
import com.mindtree.CucumberFramework.execptions.WebDriverExceptions;
import com.mindtree.CucumberFramework.utils.ReadConfigFile;



public class OrderConfirmation_common extends BasePage {
	Properties p = new Properties();
    FileInputStream fis = null;
    public static String StoreCreditValue,Storeval1, Storeval2, StoreVal3, Storeval4, Storeval5,Storeval6, Storeval7,Storeval8,Storeval9,shippingCost, RANDOMCONST, RANDOMCONSTPlusStoreval1, RANDOMStoreval1, giftCertificatePayment;
	static double StoreCredit;
	
	ReadConfigFile file = new ReadConfigFile();
	
	
	
	public OrderConfirmation_common() {
		PageFactory.initElements(driver(), this);
	}
	
	private String notNowPopup = "Not Now";
	private String OrderConfirmationHeader = "//XCUIElementTypeStaticText[@name=\"Header Label\"]";
	private String shackName = "//XCUIElementTypeStaticText[@name=\"Location Label\"]";
	private String shackAddress = "//XCUIElementTypeStaticText[@name=\"Address Label\"]";
	private String orderMessage = "//XCUIElementTypeStaticText[@name=\"Order Confirmation Message Label\"]";
	private String pickUpTime = "//XCUIElementTypeStaticText[@name=\"Pick-Up Time Label\"]";
	private String orderNumber = "//XCUIElementTypeStaticText[@name=\"Order Number Label\"]";
	private String orderTotal = "//XCUIElementTypeStaticText[@name=\"Order Total Label\"]";
	private String viewReceiptButton = "//XCUIElementTypeButton[@name=\"View Receipt Button\"]";
	
	private String contactInfo = "Selection View";
	private String subTotalBagFeeTaxTotalInfo ="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[3]";
	private String doneInReceipt = "Done";
	
	//order screen post placing order
	private String closeIcon="//XCUIElementTypeNavigationBar[@name=\"Project_Finley_Staging.UberEatsWebView\"]/XCUIElementTypeButton";
//	@FindBy(xpath="//XCUIElementTypeNavigationBar[@name=\"Project_Finley_Staging.UberEatsWebView\"]/XCUIElementTypeButton")
//	public WebElement closeIcon;
	private String shakeShackLogo="//XCUIElementTypeNavigationBar[@name=\"Project_Finley_Staging.UberEatsWebView\"]/XCUIElementTypeImage";
//	@FindBy(xpath="//XCUIElementTypeNavigationBar[@name=\"Project_Finley_Staging.UberEatsWebView\"]/XCUIElementTypeImage")
//	public WebElement shakeShackLogo;
	private String prepOrderText="//XCUIElementTypeStaticText[@name=\"Preparing your order…\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Preparing your order…\"]")
//	public WebElement prepOrderText;
	private String arrivingText="//XCUIElementTypeStaticText(contains[@name,'Arriving'])";
//	@FindBy(xpath="//XCUIElementTypeStaticText(contains[@name,'Arriving'])")
//	public WebElement arrivingText;
	private String latestArrivalText="//XCUIElementTypeStaticText(contains[@name,'Latest arrival'])";
//	@FindBy(xpath="//XCUIElementTypeStaticText(contains[@name,'Latest arrival'])")
//	public WebElement latestArrivalText;
	private String deliveryDetails="//XCUIElementTypeStaticText[@name=\"Delivery details\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Delivery details\"]")
//	public WebElement deliveryDetails;
	private String address="//XCUIElementTypeStaticText[@name=\"225 Varick St, New York, NY 10014, USA\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"225 Varick St, New York, NY 10014, USA\"]")
//	public WebElement address;
	private String meetAtDoorText="//XCUIElementTypeStaticText[@name=\"Meet at door\"]";
//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Meet at door\"]")
//	public WebElement meetAtDoorText;
	
	
	//order msg in home screen post placing order
	private String orderMsg="//XCUIElementTypeOther[@name=\"Home Rewards Card\"]";
//		@FindBy(xpath="//XCUIElementTypeOther[@name=\"Home Rewards Card\"]")
//		public WebElement orderMsg;
	
	

	public void notNowPopup() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		waitForElementClickableByName(notNowPopup, 50); System.out.println("clicked on not now in popup");
		System.out.println("clicked on Not Now in rating popup");
		
	}
	
	public void OrderSummaryVerification() throws Exception{
//		getTextUsingID(OrderConfirmationHeader);
//		getTextUsingID(shackName);
//		getTextUsingID(shackAddress);
//		getTextUsingID(orderMessage);
//		getTextUsingID(pickUpTime);
//		getTextUsingID(orderNumber);
//		getTextUsingID(orderTotal);
		clickUsingID(viewReceiptButton);System.out.println("clicked on view receipt");
		
	}
	
	public void receiptVerification() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		getTextUsingID(contactInfo);
		getText(subTotalBagFeeTaxTotalInfo);
		getTextUsingID(doneInReceipt);
		
		
	}
	//tapping close icon in order screen
	public void tapCloseIcon() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(closeIcon);
		System.out.println("close icon tapped");
		Reporter.addStepLog("close icon tapped");
		
	}
	public void tapOrderMsg() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(orderMsg);
		System.out.println("tapped on order msg");
		Reporter.addStepLog("tapped on order msg");
		
	}
	
	
	//verify order screen post placing order
	public void verifyOrderScreenElements() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		System.out.println("-----verify order screen post placing order--------");
		Assert.assertTrue(isDisplayed(closeIcon));
		System.out.println("close icon is displayed");
		Reporter.addStepLog("close icon is displayed");
		
		Assert.assertTrue(isDisplayed(shakeShackLogo));
		System.out.println("Shake Shack logo is displayed");
		Reporter.addStepLog("Shake Shack logo is displayed");
		
		Assert.assertTrue(isDisplayed(prepOrderText));
		System.out.println(getText(prepOrderText));
		Reporter.addStepLog(getText(prepOrderText));
		
		Assert.assertTrue(isDisplayed(arrivingText));
		System.out.println(getText(arrivingText));
		Reporter.addStepLog(getText(arrivingText));
		
		Assert.assertTrue(isDisplayed(latestArrivalText));
		System.out.println(getText(latestArrivalText));
		Reporter.addStepLog(getText(latestArrivalText));
		
		Assert.assertTrue(isDisplayed(deliveryDetails));
		System.out.println("delivery Details is displayed");
		Reporter.addStepLog("delivery Details is displayed");
		
		Assert.assertTrue(isDisplayed(address));
		System.out.println(getText(address));
		Reporter.addStepLog(getText(address));
				
		Assert.assertTrue(isDisplayed(meetAtDoorText));
		System.out.println(getText(meetAtDoorText));
		Reporter.addStepLog(getText(meetAtDoorText));
		
		
		
		
	}
	
	
	
}
