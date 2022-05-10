package com.mindtree.CucumberFramework.pageObjects;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeoutException;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.internal.TouchAction;
import org.openqa.selenium.interactions.touch.TouchActions;
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



public class paymentPage_common extends BasePage {
	Properties p = new Properties();
    FileInputStream fis = null;
    ExtentReports extent;
    ExtentTest test;
    
	public static ExtentTest logger;
    public static String StoreCreditValue,Storeval1, Storeval2, StoreVal3, Storeval4, Storeval5,Storeval6, Storeval7,Storeval8,Storeval9,shippingCost, RANDOMCONST, RANDOMCONSTPlusStoreval1, RANDOMStoreval1, giftCertificatePayment;
	static double StoreCredit;
	
	ReadConfigFile file = new ReadConfigFile();
	
	
	
	public paymentPage_common() {
		PageFactory.initElements(driver(), this);
	}
	
	private String payWithCreditCard = "(//XCUIElementTypeButton[@name=\"Selection View\"])[4]";
	private String CCNumber = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[1]";
	private String Name = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[2]";
	private String expiry = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[3]";
	private String billing = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[4]";
	private String CVV = "(//XCUIElementTypeTextField[@name=\"Textfield\"])[5]";
	private String continueWithPaymentButton = "Continue with Payment";
	private String pay = "//*[contains(@text,\"Pay $\")]";
	private String pay2 = "//XCUIElementTypeButton[@name=\"Pay $6.64\"]";
	
	private String againCVV = "Textfield";
	private String confirmButton = "//XCUIElementTypeStaticText[@name=\"Confirm\"]";
	private String done = "//XCUIElementTypeButton[@name=\"Done\" and @visible=\"true\"]";
	
	//xpath for tip	
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"10%\"]")
//	public WebElement tip10Btn;
	private String tip10Btn="//XCUIElementTypeButton[@name=\"10%\"]";//"//XCUIElementTypeStaticText[@name=\"10%\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"15%\"]")
//	public WebElement tip15Btn;
	private String tip15Btn="//XCUIElementTypeButton[@name=\"15%\"]";//"//XCUIElementTypeStaticText[@name=\"15%\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"20%\"]")
//	public WebElement tip20Btn;
	private String tip20Btn="//XCUIElementTypeButton[@name=\"20%\"]";//"//XCUIElementTypeButton[@name=\"20%\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Other\"]")
//	public WebElement tipOtherBtn;
	private String tipOtherBtn="//XCUIElementTypeButton[@name=\"Other\"]";//"//XCUIElementTypeStaticText[@name=\"Other\"]";
	
	//pay btn
	@FindBy(xpath="//XCUIElementTypeButton[*contains[@name=\"Pay\"]]")
	public WebElement payBtn1;
	
	
//	@FindBy(xpath="//XCUIElementTypeStaticText[contains(@name,'Pay $')]")
//	public WebElement payButton;
	private String payButton = "//XCUIElementTypeStaticText[contains(@name,'Pay $')]";
	//XCUIElementTypeApplication[@name="Project Finley Staging"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[6]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/Get Timing/XCUIElementTypeButton
	
	
	
	//tapping on other tip and entering amount and tapping add btn
	private String othertip="//XCUIElementTypeButton[@name=\"Other\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Other\"]")
//	public WebElement othertip;
	private String enterAmount="//XCUIElementTypeTextField[@name=\"Textfield\"]";
	private String addBtn="//XCUIElementTypeButton[@name=\"Add\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Add\"]")
//	public WebElement addBtn;
	
	//tapping on go back button
	private String goBackBtn="//XCUIElementTypeButton[@name=\"Go Back\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Go Back\"]")
//	public WebElement goBackBtn;
	private String selectYupDiscard="//XCUIElementTypeButton[@name=\"Yup, Discard\"]";
//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Yup, Discard\"]")
//	public WebElement selectYupDiscard;
	
	
	//
	// delivery address
	private String deliveryAddress= "//XCUIElementTypeOther[@name=\"Delivery to 225 Varick Street, New York, NY, USA\"]";
//		@FindBy(xpath = "//XCUIElementTypeOther[@name=\"Delivery to 225 Varick Street, New York, NY, USA\"]")
//		public WebElement deliveryAddress;
		// delivry details
	private String deliveryDetails= "(//XCUIElementTypeButton[@name=\"Selection View\"])[1]";
//		@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[1]")
//		public WebElement deliveryDetails;
		// contact info
	private String contactInfo= "(//XCUIElementTypeButton[@name=\"Selection View\"])[2]";
//		@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[2]")
//		public WebElement contactInfo;
		// select pymnrt
	private String selectPymnt = "(//XCUIElementTypeStaticText[@name=\"Selection View\"])[1]";
//		@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Selection View\"])[1]")
//		public WebElement selectPymnt;
		// apple pay
	private String applePay= "(//XCUIElementTypeButton[@name=\"Selection View\"])[3]";
//		@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[3]")
//		public WebElement applePay;
		// cc
	private String creditCard= "(//XCUIElementTypeButton[@name=\"Selection View\"])[4]";
//		@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Selection View\"])[4]")
//		public WebElement creditCard;
		// promo text
	private String havePromoText  = "//XCUIElementTypeStaticText[@name=\"Have A Promo Code?\"]";
	//	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Have A Promo Code?\"]")
	//	public WebElement havePromoText;
		// promo
	private String promoField= "//XCUIElementTypeTextField(contains[name,'Add Promo Textfield']";
//		@FindBy(xpath = "//XCUIElementTypeTextField(contains[name,'Add Promo Textfield']")
//		public WebElement promoField;
		// add promo btn
	private String addButton= "//XCUIElementTypeButton[@name=\"Add Promo Code\"]";
//		@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Add Promo Code\"]")
//		public WebElement addButton;
		// tip courier text
	private String tipYourCourierText= "//XCUIElementTypeStaticText[@name=\"Tip Your Courier\"]";
//		@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Tip Your Courier\"]")
//		public WebElement tipYourCourierText;
		// your order text
	private String yourOrderText= "//XCUIElementTypeStaticText[@name=\"Your Order\"]";
//		@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"Your Order\"]")
//		public WebElement yourOrderText;
		//delivery time
	private String deliveryTime="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton";
//		@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton")
		//XCUIElementTypeApplication[@name="Project Finley Staging"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton
//		public WebElement deliveryTime;
		//dont see save cards hyperlink
	private String dontSeeSaveCards="//XCUIElementTypeStaticText[@name=\"Don’t see your saved cards?\"]";
//		@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Don’t see your saved cards?\"]")
//		public WebElement dontSeeSaveCards;
		
		//subtotal
	private String Subtotal="//XCUIElementTypeOther[contains(@name='Subtotal')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Subtotal')]")
//		public WebElement Subtotal;
	private String Tip="//XCUIElementTypeOther[contains(@name='Tip')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Tip')]")
//		public WebElement Tip;
	private String ServiceFee="//XCUIElementTypeOther[contains(@name='Service Fee')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Service Fee')]")
//		public WebElement ServiceFee;
	private String BagFee="//XCUIElementTypeOther[contains(@name='Bag Fee')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Bag Fee')]")
//		public WebElement BagFee;
	private String SmallOrderFee="//XCUIElementTypeOther[contains(@name='Small Order')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Small Order')]")
//		public WebElement SmallOrderFee;
	private String DeliveryFee="//XCUIElementTypeOther[contains(@name='Delivery Fee')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Delivery Fee')]")
//		public WebElement DeliveryFee;
	private String Tax="//XCUIElementTypeOther[contains(@name='Tax')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Tax')]")
//		public WebElement Tax;
	private String Total="//XCUIElementTypeOther[contains(@name='Total')]";
//		@FindBy(xpath="//XCUIElementTypeOther[contains(@name='Total')]")
//		public WebElement Total;
		
		//tapping delivery time
	private String tapDeliveryTime="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton";
//		@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeButton")
//		public WebElement tapDeliveryTime;
		
		//delivery details section
	private String deliveryDetailsSection="(//XCUIElementTypeButton[@name=\"Selection View\"])[1]";
//		@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Selection View\"])[1]")
//		public WebElement deliveryDetailsSection;
		
		//verify elements post tapping delivery details section
	private String dropOffTextAndDesc="//XCUIElementTypeOther[@name=\"Drop-Off Instructions, Tell us how you'd like your Shack delivered.\"]";
//		@FindBy(xpath="//XCUIElementTypeOther[@name=\"Drop-Off Instructions, Tell us how you'd like your Shack delivered.\"]")
//		public WebElement dropOffTextAndDesc;
	private String backbutton ="//XCUIElementTypeButton[@name=\"Back button\"]";
//		@FindBy(xpath="//XCUIElementTypeButton[@name=\"Back button\"]")
//		public WebElement backbutton;
	private String deliverToMyDoor="//XCUIElementTypeButton[@name=\"Deliver to my door\"]";
//		@FindBy(xpath="//XCUIElementTypeButton[@name=\"Deliver to my door\"]")
//		public WebElement deliverToMyDoor;
	private String comeOutside="//XCUIElementTypeButton[@name=\"I'll come outside\"]";
	//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"I'll come outside\"]")
	//	public WebElement comeOutside;
	private String contactFreeDropOff="//XCUIElementTypeButton[@name=\"Contact-free drop off\"]";
	//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Contact-free drop off\"]")
	//	public WebElement contactFreeDropOff;
	private String addInstText="//XCUIElementTypeStaticText[@name=\"Add instructions for your driver\"]";
	//	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Add instructions for your driver\"]")
	//	public WebElement addInstText;
	private String preferPickUpText="(//XCUIElementTypeStaticText[@name=\"Prefer pick-up?\"])[1]";
	//	@FindBy(xpath="(//XCUIElementTypeStaticText[@name=\"Prefer pick-up?\"])[1]")
	//	public WebElement preferPickUpText;
	private String preferPickUpButton="//XCUIElementTypeButton[@name=\"Prefer pick-up?\"]";
	//	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Prefer pick-up?\"]")
//		public WebElement preferPickUpButton;


	public void selectCreditCard() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		//scroll(payWithCreditCard);
		waitForElementClickable(payWithCreditCard, 20);
		System.out.println("cc got selected");
		Reporter.addStepLog("credit card got slected");
		
	}
	
	public void enterCreditCardDetails() throws Exception{
		System.out.println(Thread.currentThread().getId());
		try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		p.load(fis);
		Thread.sleep(200);
		
	
		sendKeysUsingXpath(CCNumber, p.getProperty("CCNumber"));
		Reporter.addStepLog("credit card number: " +p.getProperty("CCNumber"));
		sendKeysUsingXpath(Name, p.getProperty("Name"));
		Reporter.addStepLog("name on credit card: " +p.getProperty("Name"));
		sendKeysUsingXpath(expiry, p.getProperty("Expiry"));
		Reporter.addStepLog("credit card expiry: " +p.getProperty("Expiry"));
		sendKeysUsingXpath(billing, p.getProperty("Billing"));
		Reporter.addStepLog("billing: " +p.getProperty("Billing"));
		sendKeysUsingXpath(CVV, p.getProperty("CVV"));
		Reporter.addStepLog("CVV: " +p.getProperty("CVV"));
		//driver().findElementByXPath("(//XCUIElementTypeTextField[@name=\"Textfield\"])[5]").sendKeys(Keys.ENTER);
		clickUsingName(continueWithPaymentButton);System.out.println("clicked on Continue with Payment");
		Reporter.addStepLog("tapped on continue payment button");
	}
	
	
	
	public void tapOnPay() throws Exception {
	//	System.out.println(Thread.currentThread().getId());
		Thread.sleep(8000);
		waitForElementClickable(pay2, 9);
		Reporter.addStepLog("tapped on payment button once again");
		//clickUsingXPath(pay2);System.out.println("clicked on Pay $");
		//clickUsingXPath(pay);System.out.println("clicked on Pay $");
		
	}
	
	public void againEnterCVVdetailsandConfirm() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		Thread.sleep(1500);
		clickUsingName(againCVV);
		sendKeysUsingName(againCVV, p.getProperty("CVV")); 
		Reporter.addStepLog("again CVV entered: " +p.getProperty("CVV"));
		System.out.println("again CVV added  "+ p.getProperty("CVV"));
		Thread.sleep(1000);
		clickUsingXPath(done); 
		Reporter.addStepLog("tapped on done");
		//driver().findElement(By.xpath("//XCUIElementTypeButton[@name=\"Done\" and @visible=\"true\"]")).click(); System.out.println("clicked on Done button");// click done button in keyboard
		Thread.sleep(1000);
//		JavascriptExecutor js = (JavascriptExecutor) driver();
//		js.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');",
//		clickUsingXPath(done); System.out.println("click on done button");
		clickUsingXPath(confirmButton); System.out.println("click on confirm button ");
		Reporter.addStepLog("tapped on confirm");
	}
	
	private void clickUsingXpath() {
		// TODO Auto-generated method stub
		
	}

	//tapping on the available tips 	
	public void choosetip() throws Exception{
	//	System.out.println(Thread.currentThread().getId());
		
		clickUsingXPath(tip10Btn);
		System.out.println("click on tip10");
		System.out.println("subtotal" + getText(Subtotal));//xpath of subtotal
		Reporter.addStepLog("successfully tapped on 10% tip and subtotal  is displayed"+getText(Subtotal));
		Thread.sleep(2000);
		
		clickUsingXPath(tip15Btn);
		System.out.println("click on tip15Btn");
		System.out.println("subtotal" + getText(Subtotal));
		Reporter.addStepLog("successfully tapped on second tip");
		
		Thread.sleep(2000);
		clickUsingXPath(tip20Btn);
		System.out.println("click on tip20Btn");
		System.out.println("subtotal" + getText(Subtotal));
		Reporter.addStepLog("successfully tapped on third tip");
				
		Thread.sleep(2000);
		clickUsingXPath(tipOtherBtn);
		System.out.println("click on tipOther");
		System.out.println("subtotal" + getText(Subtotal));
		Reporter.addStepLog("successfully tapped on other ");
		}
	
	//tapping on other tip,entering amount
	public void otherTip() throws Exception{
		//System.out.println("Thread.currentThread().getId()");
		clickUsingXPath(tipOtherBtn);
		System.out.println("successfully tapped on Other");
		Reporter.addStepLog("successfully tapped on other ");
		try {
			fis = new FileInputStream("./DataSource/Data.Properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		p.load(fis);

		Thread.sleep(5000);
		sendKeysUsingXpath(enterAmount, p.getProperty("amount"));
		System.out.println("----Entering amount------");
		Reporter.addStepLog("amount entered:" + p.getProperty("amount"));
		driver().findElementByXPath("//XCUIElementTypeTextField[@name=\"Textfield\"]").sendKeys(Keys.ENTER);
				
	}
	
	public void tapAddBtn() throws Exception{
	//	System.out.println(Thread.currentThread().getId());
		clickUsingXPath(addBtn);
		System.out.println("tapped on add button");
		Reporter.addStepLog("tapped on add button");
		
	}

public void tapPayBtn() throws Exception{
//	System.out.println(Thread.currentThread().getId());
	waitForElementClickable(payButton, 30);
	clickUsingXPath(payButton);
	System.out.println("tapped on pay button");
}

public void tapGoBackBtn() throws Exception{
//	System.out.println(Thread.currentThread().getId());
	clickUsingXPath(goBackBtn);
	System.out.println("tapped on go back button");
	Reporter.addStepLog("tapped on go back button");
	clickUsingXPath(selectYupDiscard);
	System.out.println("tapped on go Yup Discard");
	Reporter.addStepLog("tapped on go Yup Discard");
	
	
	
}



public void verifyPaymentScreenElements() throws TimeoutException, Exception{
//	System.out.println(Thread.currentThread().getId());
	Assert.assertEquals("Delivery to 225 Varick Street, New York, NY, USA",getText(deliveryAddress));
	System.out.println(getText(deliveryAddress));
	//Reporter.addStepLog(deliveryAddress.getText(deliveryAddress));
	
	/*Assert.assertTrue(deliveryTime.isDisplayed());
	System.out.println("Delivery Time is displayed");
	Reporter.addStepLog("Delivery Time is displayed");
	
	Assert.assertTrue(deliveryDetails.isDisplayed());
	System.out.println("Delivery Details is displayed");
	Reporter.addStepLog("Delivery Details is displayed");
	
		
	Assert.assertTrue(selectPymnt.isDisplayed());
	System.out.println("Select Payment is displayed");
	Reporter.addStepLog("Select Payment is displayed");
	
	Assert.assertTrue(applePay.isDisplayed());
	System.out.println("Apple Pay is displayed");
	Reporter.addStepLog("Apple Pay is displayed");
	
	Assert.assertTrue(creditCard.isDisplayed());
	System.out.println("Credit Card is displayed");
	Reporter.addStepLog("Credit Card is displayed");
	
	/*Assert.assertEquals("Don’t see your saved cards?", dontSeeSaveCards.getText());
	System.out.println(dontSeeSaveCards.getText());
	Reporter.addStepLog(dontSeeSaveCards.getText());*/
	
	//iosScrollToAnElement(havePromoText);
	
	Assert.assertEquals("Have A Promo Code?",getText(havePromoText));
	System.out.println(getText(havePromoText));
	Reporter.addStepLog(getText(havePromoText));
	
	waitForElementClickable(promoField, 40);
	Assert.assertTrue(isDisplayed(promoField));
	System.out.println("Enter Promo code field is displayed");
	Reporter.addStepLog("Enter Promo code field is displayed");
	
	Assert.assertTrue(isDisplayed(addButton));
	System.out.println("Add button is displayed");
	Reporter.addStepLog("Add button is displayed");
	
	Assert.assertEquals("Tip Your Courier",getText(tipYourCourierText));
	System.out.println(getText(tipYourCourierText));
	Reporter.addStepLog(getText(tipYourCourierText));
	
	Assert.assertEquals("Your Order",getText(yourOrderText));
	System.out.println(getText(yourOrderText));
	Reporter.addStepLog(getText(yourOrderText));
	
	Assert.assertTrue(isDisplayed(Subtotal));
	System.out.println(getText(Subtotal));
	Reporter.addStepLog(getText(Subtotal));
	
	Assert.assertTrue(isDisplayed(Tip));
	System.out.println(getText(Tip));
	Reporter.addStepLog(getText(Tip));
	
	Assert.assertTrue(isDisplayed(ServiceFee));
	System.out.println(getText(ServiceFee));
	Reporter.addStepLog(getText(ServiceFee));
	
	Assert.assertTrue(isDisplayed(BagFee));
	System.out.println(getText(BagFee));
	Reporter.addStepLog(getText(BagFee));
	
	Assert.assertTrue(isDisplayed(SmallOrderFee));
	System.out.println(getText(SmallOrderFee));
	Reporter.addStepLog(getText(SmallOrderFee));
	
	Assert.assertTrue(isDisplayed(DeliveryFee));
	System.out.println(getText(DeliveryFee));
	Reporter.addStepLog(getText(DeliveryFee));
	
	Assert.assertTrue(isDisplayed(Tax));
	System.out.println(getText(Tax));
	Reporter.addStepLog(getText(Tax));
	
	Assert.assertTrue(isDisplayed(Total));
	System.out.println(getText(Total));
	Reporter.addStepLog(getText(Total));
	
	
	
}


//tap delivery time
public void tapDeliveryTime() throws Exception{
	//System.out.println(Thread.currentThread().getId());
	clickUsingXPath(tapDeliveryTime);
	System.out.println("tapped on delivery time");
	Reporter.addStepLog("tapped on delivery time");
}

public void tapDeliveryDetails() throws Exception{
	//System.out.println(Thread.currentThread().getId());
	clickUsingXPath(deliveryDetailsSection );
	System.out.println("tapped son delivery details section");
	Reporter.addStepLog("tapped son delivery details section");
	
	waitForElementVisible(dropOffTextAndDesc , 20);
	Assert.assertEquals("Drop-Off Instructions, Tell us how you'd like your Shack delivered.", getText(dropOffTextAndDesc));
	System.out.println(getText(dropOffTextAndDesc));
	Reporter.addStepLog(getText(dropOffTextAndDesc));
	
	Assert.assertTrue(isDisplayed(backbutton));
	System.out.println("back button is displayed");
	Reporter.addStepLog("back button is displayed");
	
	Assert.assertTrue(isSelected(deliverToMyDoor));
	System.out.println("deliver To My Door is displayed and selected by default");
	Reporter.addStepLog("deliver To My Door is displayed and selected by default");
	
	Assert.assertTrue(isDisplayed(comeOutside));
	System.out.println("come outside with radio button is displayed");
	Reporter.addStepLog("come outside with radio button is displayed");
	
	Assert.assertTrue(isDisplayed(contactFreeDropOff));
	System.out.println("contact Free DropOff  with radio button is displayed");
	Reporter.addStepLog("contact Free DropOff  with radio button is displayed");
	
	Assert.assertEquals("Add instructions for your driver",getText(addInstText));
	System.out.println(getText(addInstText));
	Reporter.addStepLog(getText(addInstText));
	
	Assert.assertEquals("Prefer pick-up?",getText(preferPickUpText));
	System.out.println(getText(preferPickUpText));
	Reporter.addStepLog(getText(preferPickUpText));
	
	Assert.assertTrue(isDisplayed(preferPickUpButton));
	System.out.println("prefer Pick Up Button is displayed");
	Reporter.addStepLog("prefer Pick Up Button is displayed");
	
	
	
}
//new delivery time
public void newDeliveryTime() throws Exception{
	//System.out.println(Thread.currentThread().getId());
	Assert.assertTrue(isDisplayed(tapDeliveryTime));
	System.out.println(getText(tapDeliveryTime));
	Reporter.addStepLog(getText(tapDeliveryTime));
}
//selecting I'll come outside
public void comeOutsideOption() throws Exception{
	//System.out.println(Thread.currentThread().getId());
	clickUsingXPath(comeOutside);
	System.out.println("successfully selected I'll come outside");
	Reporter.addStepLog("successfully selected I'll come outside");
	
}
//verify deivery fee
public void verifyDeliveryFee() throws Exception{
	Assert.assertTrue(isDisplayed(DeliveryFee));
	System.out.println(getText(DeliveryFee));
	Reporter.addStepLog(getText(DeliveryFee));
}

}

	
	
		

