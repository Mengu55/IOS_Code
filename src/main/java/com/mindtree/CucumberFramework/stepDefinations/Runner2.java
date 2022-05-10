package com.mindtree.CucumberFramework.stepDefinations;

import java.io.File;

import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "./src\\test\\resources\\features\\deliveryModule.feature"
		//CucumberFramework/src/test/resources/features
		,glue={"com.mindtree.CucumberFramework.stepDefinations"},
		//tags= {"@PlaceOrderWithoutSuggestedItems"},
		//,@ViewAppSuitField, @AddAppSuitField,@ConfirmDetailsInCheckoutScreen, @SetCustomTipAmount,@PlaceOrderWithoutSuggestedItems, @PlaceOrderWithSuggestedItems, @ViewDelivery&ServiceFeeDetails, @ViewNeedHelpButton, @DismissOrderHistoryPage,@ChangeDeliveryTime,@DropDeliveryInstructions,@DisplayDeliveryScreen,@DismissSystemKeyboard,@ChangeDeliveryTimeAndPlaceOrder"},
		plugin = {"pretty", "html:target/Destination","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" }, 
		monochrome = true
		)

public class Runner2 extends AbstractTestNGCucumberTests {

	
	public static void WriteExtentReport() {
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir")
				+"\\src\\main\\java\\com\\mindtree\\CucumberFramework\\utils\\ReportsConfig.xml"));
	}
	
}
