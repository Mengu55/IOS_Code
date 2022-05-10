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

public class FoodMainMenu extends BasePage {

	Properties p = new Properties();
	FileInputStream fis = null;
	ExtentReports extent;
	ExtentTest test;

	public static ExtentTest logger;

	ReadConfigFile file = new ReadConfigFile();

	public FoodMainMenu() {
		PageFactory.initElements(driver(), this);

	}
		
	// down arrow
	private String downArrow = "(//XCUIElementTypeButton[@name=\"Dismiss button\"])[1]";
//	@FindBy(xpath = "(//XCUIElementTypeButton[@name=\"Dismiss button\"])[1]")
//	public WebElement downArrow;

	// allergies icon
	private String allergiesIcon="//XCUIElementTypeButton[@name=\"Allergies\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Allergies\"]")
//	public WebElement allergiesIcon;

	// switch to pick up
	private String switchPickUpInMenu ="//XCUIElementTypeButton[@name=\"Switch to pick up.\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Switch to pick up.\"]")
//	public WebElement switchPickUpInMenu;

	// chicken main menu
	private String chickenMainMenu ="//XCUIElementTypeButton[@name=\"Category Button - Chicken\"]";
	//@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Chicken\"]")
	//public WebElement chickenMainMenu;

	// burger main menu
	private String burgerMainMenu = "//XCUIElementTypeButton[@name=\"Category Button - Burgers\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Burgers\"]")
//	public WebElement burgerMainMenu;

	// shakes and frozen custard main menu
	private String dessertMainMenu ="//XCUIElementTypeButton[@name=\"Category Button - Shakes & Frozen Custard\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Shakes & Frozen Custard\"]")
//	public WebElement dessertMainMenu;

	// fries main menu
	private String friesMainMenu="//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Crinkle Cut Fries\"]")
//	public WebElement friesMainMenu;

	// flat top dogs main menu
	private String flatTopDogsMainMenu="//XCUIElementTypeButton[@name=\"Category Button - Flat-Top Dogs\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Flat-Top Dogs\"]")
//	public WebElement flatTopDogsMainMenu;

	// drinks main menu
	private String drinksMainMenu="//XCUIElementTypeButton[@name=\"Category Button - Drinks\"]";
//	@FindBy(xpath = "//XCUIElementTypeButton[@name=\"Category Button - Drinks\"]")
//	public WebElement drinksMainMenu;


	public void verifyFoodMainMenu() throws Exception {
		//System.out.println(Thread.currentThread().getId());
		
		System.out.println("-----Food Main Menu Screen-----");
		
		waitForElementVisible(switchPickUpInMenu, 20);
		/*Assert.assertTrue(downArrow.isDisplayed());
		System.out.println("Down Arrow is displayed");
		Reporter.addStepLog("Down Arrow is displayed");*/
		
		Assert.assertTrue(isDisplayed(switchPickUpInMenu));
		System.out.println("Switch Pick Up is displayed");
		Reporter.addStepLog("Switch Pick Up is displayed");
		
		Assert.assertTrue(isDisplayed(chickenMainMenu));
		System.out.println("Chicken Main Menu is displayed");
		Reporter.addStepLog("Chicken Main Menu is displayed");
		
		Assert.assertTrue(isDisplayed(burgerMainMenu));
		System.out.println("Burger Main Menu is displayed");
		Reporter.addStepLog("Burger Main Menu is displayed");
				
		Assert.assertTrue(isDisplayed(dessertMainMenu));
		System.out.println("Shakes and Frozen Custard Main Menu is displayed");
		Reporter.addStepLog("Shakes and Frozen Custard Main Menu is displayed");
				
		Assert.assertTrue(isDisplayed(friesMainMenu));
		System.out.println("Fries Main Menu is displayed");
		Reporter.addStepLog("Fries Main Menu is displayed");
				
		Assert.assertTrue(isDisplayed(flatTopDogsMainMenu));
		System.out.println("Flat Top Dogs Main Menu is displayed");
		Reporter.addStepLog("Flat Top Dogs Main Menu is displayed");
				
		Assert.assertTrue(isDisplayed(drinksMainMenu));
		System.out.println("Drinks Main Menu is displayed");
		Reporter.addStepLog("Drinks Main Menu is displayed");
		
		
		

	}
}
