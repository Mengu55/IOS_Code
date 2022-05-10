package com.mindtree.CucumberFramework.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.mindtree.CucumberFramework.pageObjects.BasePage;



public class DriverFactory1 {

	public static BasePage basepage=new BasePage();
    protected static Map<Long, RemoteWebDriver> listOfDrivers = new HashMap<Long, RemoteWebDriver>();
    static Properties p = new Properties();
 	static FileInputStream fis = null;

	public static void setDriver() throws Exception {

		listOfDrivers.put(Thread.currentThread().getId(), initialize());

	}
	

	public static RemoteWebDriver driver() {

		return listOfDrivers.get(Thread.currentThread().getId());

	}

	public static RemoteWebDriver initialize() throws Exception {
		RemoteWebDriver driver = null;
		
		try {

			ReadConfigFile file = new ReadConfigFile();
//			ReadExcelltestData data = new ReadExcelltestData();
			String browser = "mobile";
			constant cc = new constant();
			switch (browser) {
			case "chrome":
				if (driver == null) {
					System.setProperty("webdriver.chrome.driver", cc.CHROME_DRIVER_DIRECTORY);
					driver = new ChromeDriver();
					driver.manage().window().maximize();
				}
				break;
			case "edge":
				if (driver == null) {
					System.setProperty("webdriver.edge.driver", cc.EDGE_DRIVER_DIRECTORY);
					driver = new EdgeDriver();
					driver.manage().window().maximize();
				}
				break;
			case "mobile":
			{
			
				URL url;
				String username = "santhu61";
				String accessKey = "82636d34-6b73-4828-8967-e515779752a6";
				String sauceUrl = "@ondemand.us-west-1.saucelabs.com:443/wd/hub";

				String SAUCE_REMOTE_URL = "https://"+username+":"+accessKey+ sauceUrl;
				url = new URL(SAUCE_REMOTE_URL);



				MutableCapabilities capabilities = new MutableCapabilities();
				capabilities.setCapability("username", "username");
				capabilities.setCapability("accessKey", "accessKey");
				capabilities.setCapability("platformName", "iOS");
				capabilities.setCapability("appiumVersion", "1.21.0");

				capabilities.setCapability("automationName", "shakeShackIOS");
				capabilities.setCapability("appium:deviceName", "iPhone 11 Pro Max Simulator");
				capabilities.setCapability("appium:platformVersion", "14.4");
				//capabilities.setCapability("appium:app", "storage:3b628002-d68b-49b3-b8ab-74c87839cd2e");
				capabilities.setCapability("appium:app","storage:filename=Project_Finley_Staging.3.zip");
				MutableCapabilities sauceOptions = new MutableCapabilities();
				sauceOptions.setCapability("appiumVersion", "1.21.0");
				capabilities.setCapability("sauce:options", sauceOptions);
				driver = new RemoteWebDriver(url,capabilities);
			}
			break;
			case "browserStack":
			{
			
				URL url;
				String username = "arns_wvfPnj";
				String accessKey = "rj46oEsh2Ye4tWUsnCmp";
				String browserStack = "@hub-cloud.browserstack.com/wd/hub";

				String browserStack_URL = "http://"+username+":"+accessKey+ browserStack;
				url = new URL(browserStack_URL);



				MutableCapabilities capabilities = new MutableCapabilities();
				capabilities.setCapability("username", "username");
				capabilities.setCapability("accessKey", "accessKey");
				capabilities.setCapability("platformName", "iOS");
				capabilities.setCapability("appiumVersion", "1.21.0");

				capabilities.setCapability("automationName", "shakeShackIOS");
				capabilities.setCapability("appium:deviceName", "iPhone 11 Pro Max Simulator");
				capabilities.setCapability("appium:platformVersion", "14.4");
				//capabilities.setCapability("appium:app", "storage:3b628002-d68b-49b3-b8ab-74c87839cd2e");
				capabilities.setCapability("appium:app","storage:filename=Project_Finley_Staging.3.zip");
				MutableCapabilities sauceOptions = new MutableCapabilities();
				sauceOptions.setCapability("appiumVersion", "1.21.0");
				capabilities.setCapability("sauce:options", sauceOptions);
				driver = new RemoteWebDriver(url,capabilities);
				
				driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
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
