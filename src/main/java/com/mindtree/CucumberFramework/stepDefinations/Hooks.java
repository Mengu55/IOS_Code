package com.mindtree.CucumberFramework.stepDefinations;

import java.util.logging.LogManager;
import java.util.logging.Logger;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;

import com.aventstack.extentreports.ExtentTest;
import com.mindtree.CucumberFramework.utils.DriverFactory1;
//import com.mindtree.CucumberFramework.utils.DriverFactory;
import com.mindtree.CucumberFramework.utils.DriverFactory2;
import com.mindtree.CucumberFramework.utils.ReadConfigFile;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.StepDefinition;
import cucumber.runtime.java.StepDefAnnotation;

public class Hooks extends DriverFactory2 {

	private static ExtentTest test;
	private static boolean flag;
	public static Scenario scenario;
	//private static Logger logger=LogManager.addLogger(StepDefinition.class); 
	//private static Logger logger= Logger.

	@Before
	public void setup(Scenario scenario) throws Exception {
		setDriver();
//		this.scenario = scenario;
//		ReadConfigFile file = new ReadConfigFile();
//		String URL = file.getURL("URL");
//		driver().get(URL);
		
	}
	@After
	public void tearDownAndScreenShotOnfailure(Scenario scenario) {
		try {
			if (driver() != null && scenario.isFailed()) {
				scenario.embed(((TakesScreenshot) driver()).getScreenshotAs(OutputType.BYTES), "image/png");
				basepage.CaptureScreenShot();
				//driver().manage().deleteAllCookies();
				driver().quit();
				listOfDrivers.remove(Thread.currentThread().getId());
			}
			if (driver() != null) {
				//driver().manage().deleteAllCookies();
				driver().close();
				driver().quit();
				listOfDrivers.remove(Thread.currentThread().getId());
			}

		} catch (Exception e) {
			System.out.println("Method failed : tearDownAndScreenShotOnfailure, Exception " + e.getMessage());
		}
	}

}
