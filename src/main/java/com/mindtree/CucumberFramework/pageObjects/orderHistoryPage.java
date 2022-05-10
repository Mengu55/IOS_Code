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
import com.mindtree.CucumberFramework.utils.ReadConfigFile;

public class orderHistoryPage extends BasePage {
	Properties p = new Properties();
	FileInputStream fis = null;
	ExtentReports extent;
	ExtentTest test;

	public static ExtentTest logger;

	ReadConfigFile file = new ReadConfigFile();

	public orderHistoryPage() {
		PageFactory.initElements(driver(), this);

	}

	// reorder button
	@FindBy(xpath = "(//XCUIElementTypeStaticText[@name=\"Reorder\"])[1]")
	private WebElement reOrder;
	@FindBy(xpath = "//XCUIElementTypeOther[contains(@name,'Recent Orders')]")
	public WebElement orderHistoryPageTitle;
	// private String
	// orderHistoryPageTitle="//XCUIElementTypeOther[@name=\"Recent Orders. Your
	// latest go-to's\"]";
	@FindBy(xpath = "//*[@name=\"Dismiss button\"]")
	public WebElement dismissbutton;
	// private String dismissbutton="//*[@name=\"Dismiss button\"]";
	// @FindBy(xpath="(//*[@name=\"Favorite button\"])[1]")
	public WebElement favoriteicon;
	// private String favoriteicon="(//*[@name=\"Favorite button\"])[2]";
	// @FindBy(xpath="(//XCUIElementTypeButton[@name=\"More information\"])[1]")
	public WebElement moreinfo;
	// private String moreinfo="(//XCUIElementTypeButton[@name=\"More
	// information\"])[2]";
	// history
	@FindBy(xpath = "//XCUIElementTypeStaticText[@name=\"History\"]")
	public WebElement historyButton;
	
	//need help
	@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Need Help\"])[1]")
	public WebElement needHelp;
	
	//verifying elements post tapping need help
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Close button\"]")
	public WebElement closeIcon;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Try these steps to resolve your issue as quickly as possible\"]")
	public WebElement description;
	//@FindBy(xpath="/XCUIElementTypeOther[@name=\"Call Our Delivery Service Provider. Call Now\"]")
	//public WebElement tapcallNow;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Call Now\"]")
	public WebElement callNowText;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Call Our Delivery Service Provider\"]")
	public WebElement callDeliverySPText;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Still Need Help\"]")
	//XCUIElementTypeOther[@name="Still Need Help"]
	public WebElement stillNeepHelp;
	
	//still need help elements
	@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Close button\"])[2]")
	public WebElement closeIcon1;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Choose an issue type from the list below\"]")
	public WebElement chooseIssueText;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Timeliness\"]") //XCUIElementTypeOther[@name="Timeliness"]
	public WebElement timeliness;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Delivery Issue\"]") //XCUIElementTypeOther[@name="Delivery Issue"]
	public WebElement deliveryIssue;
	
	//option screen elements
	@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Close button\"])[3]")
	public WebElement closeIcon2;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"We're sorry something was wrong with your order.\"]")
	public WebElement sorryText;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Please provide us more detail so we can fix it.\"]")
	public WebElement provideDetailText;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Additional Issue Details (Required)\"]")
	public WebElement additionalIssueText;
	private String textBox1="XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[12]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeTextView";
	@FindBy(xpath="//XCUIElementTypeApplication[@name=\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[12]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeTextView")
	public WebElement textBox;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Submit\"]")
	public WebElement submitBtn;
	
	//verify elements in refund screen
	@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Close button\"])[4]")
	public WebElement closeBtn;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"We're sorry that you had problems with your order.\"]")
	public WebElement sorryText1;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Don’t Worry — we’ve submitted your order for a refund and hope you will give us another chance to get it right next time.\"]")
	public WebElement refundText;
	@FindBy(xpath="//XCUIElementTypeOther[@name=\". Need further assistance? Continue the conversation by phone or email.\"]")
	public WebElement needAssitanceText;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Drop Us A Note\"]")
	public WebElement dropNoteText;
	@FindBy(xpath="//XCUIElementTypeStaticText[@name=\"Let us know the best way to get a hold of you and we'll be in touch with you shortly\"]")
	public WebElement desc;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Contact Us\"]")
	public WebElement contactUsBtn;
	@FindBy(xpath="(//XCUIElementTypeStaticText[@name=\"Call Our Delivery Service Provider\"])[2]")
	public WebElement  callDeliveryText;
	@FindBy(xpath="(//XCUIElementTypeButton[@name=\"Call Now\"])[2]")
	public WebElement callNowBtn;
	@FindBy(xpath="//XCUIElementTypeButton[@name=\"Return to Home\"]")
	public WebElement retunHomeBtn;
	
	public void clickonHistory() throws Exception {
		//System.out.println("Thread.currentThread().getId()");

		waitForElementClickable(historyButton, 10);
		clickUsingXPath(historyButton);
		System.out.println("Clicked on History button");
		Reporter.addStepLog("Clicked on History button");
	}

	public void verifyHistoryPage() throws Exception {
		//System.out.println(Thread.currentThread().getId());

		waitForElementClickable(orderHistoryPageTitle, 20);
		System.out.println(orderHistoryPageTitle.getText());
		Assert.assertEquals(orderHistoryPageTitle.getText(), "Recent Orders. Your latest go-to's");
		System.out.println("Recent Orders. Your latest go-to's is displayed");
		Reporter.addStepLog("Recent Orders. Your latest go-to's is displayed");

		System.out.println("---------History page Elements--------");
		waitForElementClickable(dismissbutton, 20);
		Assert.assertTrue(dismissbutton.isDisplayed());
		// Assert.assertTrue(isDisplayed(dismissbutton));
		System.out.println("Dismiss button is displayed");
		Reporter.addStepLog("Dismiss button is displayed");

		Assert.assertTrue(reOrder.isDisplayed());
		// Assert.assertTrue(isDisplayed(reOrder));
		System.out.println("Reorder button is displayed");
		Reporter.addStepLog("Reorder button is displayed");

		Assert.assertTrue(moreinfo.isDisplayed());
		// Assert.assertTrue(isDisplayed(moreinfo));
		System.out.println("Moreinfo is displayed");
		Reporter.addStepLog("Moreinfo is displayed");

		Assert.assertTrue(favoriteicon.isDisplayed());
		// Assert.assertTrue(isDisplayed(favoriteicon));
		System.out.println("Favorite icon is displayed");
		Reporter.addStepLog("Favorite icon is displayed");

	}

	public void downArrow() {
		//System.out.println(Thread.currentThread().getId());

		dismissbutton.click();
		System.out.println("Tapped on dismiss button");
		Reporter.addStepLog("Tapped on dismiss button");

	}
	
	//tap on need help
	public void tapNeedHelp() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(needHelp);
		System.out.println("tapped on need help");
		Reporter.addStepLog("tapped on need help");
	}
	public void verifyNeedHelpScreenElements(){
		//System.out.println(Thread.currentThread().getId());
		System.out.println("--------verifying elements post tapping Need Help----------");
		
		Assert.assertTrue(closeIcon.isDisplayed());
		System.out.println("close Icon is displayed");
		Reporter.addStepLog("close Icon is displayed");
		
		Assert.assertTrue(callDeliverySPText.isDisplayed());
		System.out.println(callDeliverySPText.getText());
		Reporter.addStepLog(callDeliverySPText.getText());
		
		Assert.assertTrue(callNowText.isDisplayed());
		System.out.println(callNowText.getText());
		Reporter.addStepLog(callNowText.getText());
		
		Assert.assertTrue(stillNeepHelp.isDisplayed());
		System.out.println("still Neep Help is displayed");
		Reporter.addStepLog("still Neep Help is displayed");
		
	}
	//tapping on still need help
	public void tapStillNeedHelp() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(stillNeepHelp);
		System.out.println("still Neep Help is tapped");
		Reporter.addStepLog("still Neep Help is tapped");
	}
	public void verifyStillNeedHelpScreenElements(){
		//System.out.println(Thread.currentThread().getId());
		
		Assert.assertTrue(closeIcon1.isDisplayed());
		System.out.println("close Icon is displayed");
		Reporter.addStepLog("close Icon is displayed");
		
		Assert.assertEquals("Choose an issue type from the list below", chooseIssueText.getText());
		System.out.println(chooseIssueText.getText());
		Reporter.addStepLog(chooseIssueText.getText());
		
		Assert.assertTrue(timeliness.isDisplayed());
		System.out.println("timeliness is displayed");
		Reporter.addStepLog("timeliness is displayed");
		
		Assert.assertTrue(deliveryIssue.isDisplayed());
		System.out.println("delivery Issue is displayed");
		Reporter.addStepLog("delivery Issue is displayed");
	}
	
	//tap on timeliness
	public void tapTimeliness() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(timeliness);
		System.out.println("timeliness is tapped");
		Reporter.addStepLog("timeliness is tapped");
	}
	//tap on delivery issue
	public void tapdeliveryIssue() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(deliveryIssue);
		System.out.println("deliveryIssue is tapped");
		Reporter.addStepLog("deliveryIssue is tapped");
	}
	//verify options screen elements
	public void verifyOptionScreenElements(){
		//System.out.println(Thread.currentThread().getId());
		Assert.assertTrue(closeIcon2.isDisplayed());
		System.out.println("close Icon is displayed");
		Reporter.addStepLog("close Icon is displayed");
		
		Assert.assertTrue(sorryText.isDisplayed());
		System.out.println(sorryText.getText());
		Reporter.addStepLog(sorryText.getText());
		
		Assert.assertTrue(provideDetailText.isDisplayed());
		System.out.println(provideDetailText.getText());
		Reporter.addStepLog(provideDetailText.getText());
		
		Assert.assertEquals("Additional Issue Details (Required)", additionalIssueText.getText());
		System.out.println(additionalIssueText.getText());
		Reporter.addStepLog(additionalIssueText.getText());
		
		Assert.assertTrue(textBox.isDisplayed());
		System.out.println("textBox is displayed");
		Reporter.addStepLog("textBox is displayed");
		
		Assert.assertTrue(submitBtn.isDisplayed());
		System.out.println("submitBtn is displayed");
		Reporter.addStepLog("submitBtn is displayed");
		
	}
	//tapp close icon in need help screen
	public void tapCloseIconNeedHelpScreen() throws Exception{
		//System.out.println(Thread.currentThread().getId());
		clickUsingXPath(closeIcon);
		System.out.println("close Icon is displayed");
		Reporter.addStepLog("close Icon is displayed");
	}
	//enter details
	public void enterIssue() throws Exception{
		//  System.out.println(Thread.currentThread().getId());
		  sendKeysUsingXpath(textBox1,p.getProperty("EnterIssue"));
		   Reporter.addStepLog("entered details :"+p.getProperty("EnterIssue"));
		   System.out.println("entered details :"+p.getProperty("EnterIssue"));
		   
		  
	}
	//tap submit button
	public void tapSubmitBtn() throws Exception{
		clickUsingXPath(submitBtn);
		System.out.println("submitBtn is tapped");
		Reporter.addStepLog("submitBtn is tapped");
		
	}
	//verify refund confirmation screen
	public void verifyRefundConfirmationScreen(){
		Assert.assertTrue(closeBtn.isDisplayed());
		System.out.println("Close icon is displayed");
		Reporter.addStepLog("Close icon is displayed");
		
		Assert.assertEquals("We're sorry that you had problems with your order.", sorryText1.getText());
		System.out.println(sorryText1.getText());
		Reporter.addStepLog(sorryText1.getText());
		
		Assert.assertEquals("Don’t Worry — we’ve submitted your order for a refund and hope you will give us another chance to get it right next time.", refundText.getText());
		System.out.println(refundText.getText());
		Reporter.addStepLog(refundText.getText());
		
		Assert.assertEquals(". Need further assistance? Continue the conversation by phone or email.", needAssitanceText.getText());
		System.out.println(needAssitanceText.getText());
		Reporter.addStepLog(needAssitanceText.getText());
		
		Assert.assertEquals("Drop Us A Note", dropNoteText.getText());
		System.out.println(dropNoteText.getText());
		Reporter.addStepLog(dropNoteText.getText());
		
		Assert.assertEquals("Let us know the best way to get a hold of you and we'll be in touch with you shortly", desc.getText());
		System.out.println(desc.getText());
		Reporter.addStepLog(desc.getText());
		
		Assert.assertTrue(contactUsBtn.isDisplayed());
		System.out.println("Close icon is displayed");
		Reporter.addStepLog("Close icon is displayed");
		
		Assert.assertEquals("Call Our Delivery Service Provider", callDeliveryText.getText());
		System.out.println(callDeliveryText.getText());
		Reporter.addStepLog(callDeliveryText.getText());
		
		Assert.assertTrue(callNowBtn.isDisplayed());
		System.out.println("Call Now button is displayed");
		Reporter.addStepLog("Call Now button is displayed");
		
		Assert.assertTrue(retunHomeBtn.isDisplayed());
		System.out.println("Return Home button is displayed");
		Reporter.addStepLog("Return Home button is displayed");
	}
}

