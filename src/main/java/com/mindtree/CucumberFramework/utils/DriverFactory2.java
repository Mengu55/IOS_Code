package com.mindtree.CucumberFramework.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.junit.rules.TestName;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.cucumber.listener.Reporter;
import com.mindtree.CucumberFramework.pageObjects.BasePage;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;



public class DriverFactory2 {

	public static BasePage basepage=new BasePage();
    protected static Map<Long, AppiumDriver<MobileElement>> listOfDrivers = new HashMap<Long, AppiumDriver<MobileElement>>();
	
    static Properties p = new Properties();
 	static FileInputStream fis = null;

	public static void setDriver() throws Exception {

		listOfDrivers.put(Thread.currentThread().getId(), initialize());

	}
	
	public TestName name = new TestName() {
		 public String getMethodName() {
		 return String.format("%s", super.getMethodName());
		 }
	};

	

	public static RemoteWebDriver driver() {

		return listOfDrivers.get(Thread.currentThread().getId());

	}

	public static AppiumDriver<MobileElement> initialize() throws Exception {
		AppiumDriver<MobileElement> driver = null;
		
		try {

			ReadConfigFile file = new ReadConfigFile();
//			ReadExcelltestData data = new ReadExcelltestData();
			String browser = "mobile";
			constant cc = new constant();
			switch (browser) {
//			case "chrome":
//				if (driver == null) {
//					System.setProperty("webdriver.chrome.driver", cc.CHROME_DRIVER_DIRECTORY);
//					driver = new ChromeDriver();
//					driver.manage().window().maximize();
//				}
//				break;
//			case "edge":
//				if (driver == null) {
//					System.setProperty("webdriver.edge.driver", cc.EDGE_DRIVER_DIRECTORY);
//					driver = new EdgeDriver();
//					driver.manage().window().maximize();
//				}
//				break;
			case "mobile":
			{
			//working code
				URL url;
//				String username = "ArunShanmukha";
//				String accessKey = "934aef68-2bbb-4d9f-b7bb-b2456c5fe900";
//				String sauceUrl = "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
//				
				String username = "ArunShanmukha";
				String accessKey = "934aef68-2bbb-4d9f-b7bb-b2456c5fe900";
				String sauceUrl = "@ondemand.us-west-1.saucelabs.com:443/wd/hub";

				String SAUCE_REMOTE_URL = "https://"+username+":"+accessKey+ sauceUrl;
				url = new URL(SAUCE_REMOTE_URL);

				MutableCapabilities capabilities = new MutableCapabilities();
				capabilities.setCapability("idleTimeout", "90");
				  //capabilities.setCapability("noReset", "false");
				  capabilities.setCapability("newCommandTimeout", "90");
				  capabilities.setCapability("platformName", "iOS");
				  capabilities.setCapability("platformVersion", "15.3.1");
				  capabilities.setCapability("deviceName", "iPhone_12_Pro_Max_15_real");
				  capabilities.setCapability("app", "storage:filename=Project Finley QA (4).ipa");

				  driver = new IOSDriver<MobileElement>(url,capabilities);
//				capabilities.setCapability("username", "username");
//				capabilities.setCapability("accessKey", "accessKey");
//				capabilities.setCapability("platformName", "iOS");
//				//capabilities.setCapability("appiumVersion", "1.21.0");
//				capabilities.setCapability("idleTimeout", "90");
//				capabilities.setCapability("noReset", "false");
//				capabilities.setCapability("newCommandTimeout", "90");
//				capabilities.setCapability("platformVersion", "15.3");
//				capabilities.setCapability("deviceName", "iPhone_12_15_real_us");
////				  capabilities.setCapability("name", name.getMethodName());
//				  capabilities.setCapability("app", "storage:4818213b-1027-4e38-b014-d6709097b8c3");
//
//				
//				capabilities.setCapability("automationName", "shakeShackIOS");
//				capabilities.setCapability("appium:deviceName", "iPhone 12 Pro Max Simulator");
//				capabilities.setCapability("appium:platformVersion", "14.4");
//				//capabilities.setCapability("appium:app", "storage:3b628002-d68b-49b3-b8ab-74c87839cd2e");
//				capabilities.setCapability("appium:app","storage:filename=Project Finley Staging.zip");
//				MutableCapabilities sauceOptions = new MutableCapabilities();
//				sauceOptions.setCapability("appiumVersion", "1.21.0");
//				capabilities.setCapability("sauce:options", sauceOptions);
//				driver = new AppiumDriver<MobileElement>(url,capabilities);
			}
			}
			
			

		} catch (Exception e) {
			System.out.println("Unable to load browser: " + e.getMessage());
		} finally {
//			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		}
		return driver;
	}

}
