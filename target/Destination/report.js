$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/features/deliveryModule.feature");
formatter.feature({
  "line": 1,
  "name": "Delivery functionality validation",
  "description": "",
  "id": "delivery-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 133781480500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#1"
    }
  ],
  "line": 4,
  "name": "I can set a tip % amount to my courier on the Check Out confirmation modal",
  "description": "",
  "id": "delivery-functionality-validation;i-can-set-a-tip-%-amount-to-my-courier-on-the-check-out-confirmation-modal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TipAmount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 14,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 24,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 25,
      "value": "#Then select item"
    }
  ],
  "line": 26,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "tap on desired tip",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7155170300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25221802200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12429844300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6708019600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19106731800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10212458800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 7018110900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 37933450900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6759483000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12457454100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3391093500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8868039700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61738496400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [NXYL3JM8RM.NXYL3JM8RM*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: c47623b5-8268-44ac-a70c-932..., deviceName: 00008101-001E4C503498001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: f565efa40dbc4f93b17462e3356..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 8bf53fe9-3cad-41d5-b505-a65..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001E4C503498001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5715, webStorageEnabled: false}\nSession ID: 92ab3572-dcf6-42ec-96bc-9b920e2cbd06\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_desired_tip()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4471941800,
  "status": "passed"
});
formatter.before({
  "duration": 28867055100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#2"
    }
  ],
  "line": 33,
  "name": "I should be able to see Apt/Suite/Unit/Etc. field",
  "description": "",
  "id": "delivery-functionality-validation;i-should-be-able-to-see-apt/suite/unit/etc.-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@ViewAppSuitField"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 43,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6976437600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25432427800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11529060700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6797979800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19940983800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10701213100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 8231921700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 38664185700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 7005130800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12144330500,
  "status": "passed"
});
formatter.after({
  "duration": 4197252100,
  "status": "passed"
});
formatter.before({
  "duration": 122885632000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "#3"
    }
  ],
  "line": 47,
  "name": "I should be able to add Apt/Suite/Unit/Etc. information for delivery order",
  "description": "",
  "id": "delivery-functionality-validation;i-should-be-able-to-add-apt/suite/unit/etc.-information-for-delivery-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@AddOptionalAddress"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 57,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "enter delivery optional address",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 9198808300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25391319300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12135270200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6787592600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 18428177500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 13286842100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 6595558800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 35590745500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6859632400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12314598600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3406760000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_delivery_optional_address()"
});
formatter.result({
  "duration": 16397383000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //XCUIElementTypeTextField[@name\u003d\"12-A\"] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementClickable(BasePage.java:348)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.enterAppsuit(DeliveryPage.java:160)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.enter_delivery_optional_address(ShakeShackIOSE2E.java:438)\r\n\tat ✽.And enter delivery optional address(./src/test/resources/features/deliveryModule.feature:60)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 1b801c29-13fb-442b-9db4-c67..., deviceName: 00008101-001364221405001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 6abda297ea1d48fa8ccd1a33a4e..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 84c72c64-11b7-4f8f-840b-dff..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001364221405001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5717, webStorageEnabled: false}\nSession ID: e9b3ba63-a066-4991-a744-a68b899c9504\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeTextField[@name\u003d\"12-A\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementClickable(BasePage.java:348)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.enterAppsuit(DeliveryPage.java:160)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.enter_delivery_optional_address(ShakeShackIOSE2E.java:438)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4690433600,
  "status": "passed"
});
formatter.before({
  "duration": 62975228600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 63,
      "value": "#4"
    }
  ],
  "line": 65,
  "name": "As a User, I can confirm order details on the Check Out screen",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-confirm-order-details-on-the-check-out-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@ConfirmDetailsInCheckoutScreen"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 74,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 75,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#tap on scheduled time"
    }
  ],
  "line": 81,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 85,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 86,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 87,
      "value": "#Then select item"
    },
    {
      "line": 88,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 89,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6925351600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25603100900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 10981703400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6492321000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19097817900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10319518200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 9646752600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 36473619600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6994630100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 13517340200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3133561400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8999976700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61508116700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:79)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 96534e3d-7b5b-4c88-a6c8-c26..., deviceName: 00008101-000B39143699001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 934ca7d50fd24aaab622ce8455a..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: f6afdf81-ad5e-4c4c-9c9d-228..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-000B39143699001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5716, webStorageEnabled: false}\nSession ID: 7306bde1-d3ea-4cfa-8f0c-0e824d057288\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 4846300900,
  "status": "passed"
});
formatter.before({
  "duration": 33010095000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 92,
      "value": "#5"
    }
  ],
  "line": 94,
  "name": "I can set a custom tip amount to my courier on the Check Out confirmation modal",
  "description": "",
  "id": "delivery-functionality-validation;i-can-set-a-custom-tip-amount-to-my-courier-on-the-check-out-confirmation-modal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@SetCustomTipAmount"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 103,
      "value": "# Then Home page is displayed"
    }
  ],
  "line": 104,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 113,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 114,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 115,
      "value": "#Then select item"
    },
    {
      "line": 116,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 117,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "tap on Other tip and enter the desired amount",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "tap on Add button",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7121644900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25358180800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11974815200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6554783100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 20754830400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10698261700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 8418967500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 35282856200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6559232199,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 16725244700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3369425800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9513491500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61370725200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:108)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [HP4NU52CJC.HP4NU52CJC*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 92016877-d23e-410b-b435-b92..., deviceName: 00008101-001A5D390A47001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: b6863839ac324070a422ce83c2f..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 88054ba0-40c0-45ac-a2cc-ac3..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001A5D390A47001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5725, webStorageEnabled: false}\nSession ID: 599f0855-2fcc-4e39-96a1-f7b20b17ca4c\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Other_tip_and_enter_the_desired_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 4905689001,
  "status": "passed"
});
formatter.before({
  "duration": 33068973401,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 122,
      "value": "#6"
    }
  ],
  "line": 124,
  "name": "As a user, I can place a Delivery Order without suggested items",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-place-a-delivery-order-without-suggested-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@PlaceOrderWithoutSuggestedItems"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 133,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 134,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 144,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 145,
      "value": "#Then select item"
    },
    {
      "line": 146,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 147,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "tap on order message",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "order tracking screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7235540200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25357044600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12617471400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6849011199,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 21764389000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10346873601,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 7478287200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 36362873200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6820193100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 11984347199,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 5864230301,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8965491299,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61820182800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:138)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [NXYL3JM8RM.NXYL3JM8RM*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 6fb7afd5-d411-4bb5-a614-c50..., deviceName: 00008101-001E4C503498001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 41b18faa9a0d4276b4bb2c5e736..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 094bb5fa-8ddb-41d6-90ca-ee6..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001E4C503498001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5715, webStorageEnabled: false}\nSession ID: ebb8add9-e66e-4d83-8578-1b2248a5bd50\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_order_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_tracking_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 4376360600,
  "status": "passed"
});
formatter.before({
  "duration": 33527922100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 156,
      "value": "#7"
    }
  ],
  "line": 158,
  "name": "As a user, I can place a Delivery Order with suggested items",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-place-a-delivery-order-with-suggested-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 157,
      "name": "@PlaceOrderWithSuggestedItems"
    }
  ]
});
formatter.step({
  "line": 159,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 163,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 172,
      "value": "#dismiss the screen"
    }
  ],
  "line": 173,
  "name": "tap on fries menu",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "fries menu items are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "select item",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "selected item screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "tap on go back button and select yup discard",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "tap on order message",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "order tracking screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6874522700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 29257513600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 10977502401,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6492443700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12015084700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3166745000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9034833400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61964130999,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:166)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [HP4NU52CJC.HP4NU52CJC*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: ba9b5362-f58b-43c8-b7e8-172..., deviceName: 00008101-001A5D390A47001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 6c5109d6e55240cf9cb8ba7a9ba..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: ba2dbcae-fa4a-44ae-920d-e83..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001A5D390A47001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5725, webStorageEnabled: false}\nSession ID: 31b21034-84fc-4f0d-88d3-914c9a681fc7\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_fries_menu_and_select_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.fries_menu_items_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.selected_item_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_go_back_button_and_select_yup_discard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_order_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_tracking_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 4898799499,
  "status": "passed"
});
formatter.before({
  "duration": 28319767700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 189,
      "value": "#8"
    }
  ],
  "line": 191,
  "name": "As a user, when I reach the Checkout confirmation screen I can see Delivery and Service Fees detailed",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-when-i-reach-the-checkout-confirmation-screen-i-can-see-delivery-and-service-fees-detailed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 190,
      "name": "@ViewDelivery\u0026ServiceFeeDetails"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 198,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 200,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 201,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 204,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 210,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 211,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 212,
      "value": "#Then select item"
    },
    {
      "line": 213,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 214,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6943961600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25767423100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11787079600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6579607600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19853958600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 13060105000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 7023149000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 36070772900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6802995200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 16724782800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3002523000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8769663900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 63302433900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:205)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: c1d8da69-b6b2-4934-821e-a1e..., deviceName: 00008101-001364221405001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 7a13f7a84528456ead91b17b35b..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 696403a5-f66b-4c26-ae26-44b..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001364221405001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5717, webStorageEnabled: false}\nSession ID: a250f065-ba10-4334-84e2-f06798d6fbe2\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 4444705500,
  "status": "passed"
});
formatter.before({
  "duration": 27651997800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 218,
      "value": "#9 delivery fee is $0.99 with subtotal \u003c\u003d$12"
    }
  ],
  "line": 220,
  "name": "I should see $3.49 Delivery fee when my subtotal is \u003d\u003c$12",
  "description": "",
  "id": "delivery-functionality-validation;i-should-see-$3.49-delivery-fee-when-my-subtotal-is-\u003d\u003c$12",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 219,
      "name": "@DeliveryFee\u003d$3.49WithSubtotal\u003c\u003d$12"
    }
  ]
});
formatter.step({
  "line": 221,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 222,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 233,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "verify delivery fee",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 238,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "tap on order message",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "order tracking screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6924176600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 27520854200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11488153000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6626536600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 11355728700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3311519400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8851278700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 61959877600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:228)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [NXYL3JM8RM.NXYL3JM8RM*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: acece0fe-f062-4c7c-aa9c-631..., deviceName: 00008101-001E4C503498001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: e0b8527a582245729ef41ab78d5..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 68f901f6-9bed-4f60-aead-038..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001E4C503498001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5715, webStorageEnabled: false}\nSession ID: 858ae745-3233-40d6-8248-65cf5eb271a6\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.verify_delivery_fee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_order_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_tracking_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 4811095500,
  "status": "passed"
});
formatter.before({
  "duration": 33053229100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 245,
      "value": "#10"
    }
  ],
  "line": 247,
  "name": "I should see $0.99 Delivery fee when my subtotal is \u003e $12 and \u003d\u003c $34.99",
  "description": "",
  "id": "delivery-functionality-validation;i-should-see-$0.99-delivery-fee-when-my-subtotal-is-\u003e-$12-and-\u003d\u003c-$34.99",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 246,
      "name": "@DeliveryFee\u003d$0.99WithSubtotal\u003e$12and\u003c\u003d$34.99"
    }
  ]
});
formatter.step({
  "line": 248,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 251,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "choose your delivery time screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 258,
  "name": "increase the item to make it $\u003c\u003d34.99",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 260,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 263,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "verify delivery fee",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 267,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 268,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "tap on order message",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "order tracking screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6974658100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25392404900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12248585800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6543624000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12718437100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3168724300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9654278300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed()"
});
formatter.result({
  "duration": 62683855100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat ✽.Then choose your delivery time screen is displayed(./src/test/resources/features/deliveryModule.feature:255)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: c21a3722-5a72-4ef8-8a1a-7d0..., deviceName: 00008101-001364221405001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 3930bbf1c34042538e46ebd755c..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 77b83757-b72d-4ee1-8573-a61..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001364221405001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5717, webStorageEnabled: false}\nSession ID: 62b2ebf3-7176-404c-ae80-e6677028377d\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Choose Your Delivery Time\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyChooseDeliveryScreen(DeliveryPage.java:197)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.choose_your_delivery_time_screen_is_displayed(ShakeShackIOSE2E.java:204)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 32
    },
    {
      "val": "99",
      "offset": 35
    }
  ],
  "location": "ShakeShackIOSE2E.increase_the_to_make_it_$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.verify_delivery_fee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_order_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_tracking_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 4498611600,
  "status": "passed"
});
formatter.before({
  "duration": 37974380300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 273,
      "value": "#10"
    }
  ],
  "line": 275,
  "name": "Verify user can view Need Help button for delivery orders in Order history",
  "description": "",
  "id": "delivery-functionality-validation;verify-user-can-view-need-help-button-for-delivery-orders-in-order-history",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 274,
      "name": "@ViewNeedHelpButton"
    }
  ]
});
formatter.step({
  "line": 276,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 278,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 279,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 280,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 283,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "tap on Order History in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 285,
  "name": "order history page is displayed with order details",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7090048800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 28190303100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12558729900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6452423000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19169344800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 11377203200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 6734482000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 13769852900,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [HP4NU52CJC.HP4NU52CJC*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 9a45cb8b-e167-4d62-9fd5-2a1..., deviceName: 00008101-001A5D390A47001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: 203800402e314dd082bb0228b47..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: a9e803f1-a3a6-4c15-98d2-aa2..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001A5D390A47001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5725, webStorageEnabled: false}\nSession ID: c47698f3-ed0c-4355-8eb4-ac9b0753d4b7\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeSecureTextField[@name\u003d\"Password Textfield\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.isDisplayed(BasePage.java:531)\r\n\tat com.mindtree.CucumberFramework.pageObjects.LoginPageCommon.loginWithValidCredentials(LoginPageCommon.java:441)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.loginWithValidCredentials(ShakeShackIOSE2E.java:149)\r\n\tat ✽.Then do Login with valid credentials(./src/test/resources/features/deliveryModule.feature:283)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Order_History_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_history_page_is_displayed_with_order_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 3213137600,
  "status": "passed"
});
formatter.before({
  "duration": 253209708900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 287,
      "value": "#11"
    }
  ],
  "line": 289,
  "name": "As a User, When I go to Order history I should be able to dismiss the order history page",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-when-i-go-to-order-history-i-should-be-able-to-dismiss-the-order-history-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 288,
      "name": "@DismissOrderHistoryPage"
    }
  ]
});
formatter.step({
  "line": 290,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 291,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 292,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 293,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 294,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 295,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 296,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 297,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "tap on Order History in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "order history page is displayed with order details",
  "keyword": "Then "
});
formatter.step({
  "line": 300,
  "name": "tap on down arrow to close order history screen",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7167765400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25750140900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11484010200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6736289300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 23834456300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10567019300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 6961880100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 35434488000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Order_History_in_home_page()"
});
formatter.result({
  "duration": 1270800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: driver.version: IOSDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementClickable(BasePage.java:211)\r\n\tat com.mindtree.CucumberFramework.pageObjects.orderHistoryPage.clickonHistory(orderHistoryPage.java:122)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.tap_on_Order_History_in_home_page(ShakeShackIOSE2E.java:414)\r\n\tat ✽.Then tap on Order History in home page(./src/test/resources/features/deliveryModule.feature:298)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_history_page_is_displayed_with_order_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_down_arrow_to_close_order_history_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 3559666200,
  "status": "passed"
});
formatter.before({
  "duration": 28194217000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 302,
      "value": "#11"
    }
  ],
  "line": 304,
  "name": "As a user who has selected Delivery, I can change my delivery time from the Checkout confirmation page",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user-who-has-selected-delivery,-i-can-change-my-delivery-time-from-the-checkout-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 303,
      "name": "@ChangeDeliveryTime"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 307,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 308,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 309,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 310,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 311,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 312,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 314,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 315,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 321,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 322,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 323,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 324,
      "value": "#Then select item"
    },
    {
      "line": 325,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 326,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "tap on deivery time section",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "pop up modal is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "tap on any time under schedule later",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "delivery time in payment screen is displayed with new time",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7132866500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25915001800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 18276235200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6739099100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 18838383800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10143418600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 8769372300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 36584551500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 9011868400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 31268991000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //XCUIElementTypeStaticText[@name\u003d\"Shack To Your Doorstep\"] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyDeliveryAddScreenElements(DeliveryPage.java:257)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.delivery_address_page_is_displayed(ShakeShackIOSE2E.java:288)\r\n\tat ✽.And delivery address page is displayed(./src/test/resources/features/deliveryModule.feature:315)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 87439c89-2997-4542-9fb9-2d4..., deviceName: 00008101-000B39143699001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: e6ca37ee52e544398a6137ee45b..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: f847f847-fa40-4ce3-b6fa-dd8..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-000B39143699001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5716, webStorageEnabled: false}\nSession ID: b027f1ea-56d7-40cb-9b10-91fbc3e28c2c\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeStaticText[@name\u003d\"Shack To Your Doorstep\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementVisiblility(BasePage.java:313)\r\n\tat com.mindtree.CucumberFramework.pageObjects.DeliveryPage.verifyDeliveryAddScreenElements(DeliveryPage.java:257)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.delivery_address_page_is_displayed(ShakeShackIOSE2E.java:288)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_deivery_time_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.pop_up_modal_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_any_time_under_schedule_later()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_time_in_payment_screen_is_displayed_with_new_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 3749498600,
  "status": "passed"
});
formatter.before({
  "duration": 32722816100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 334,
      "value": "#12"
    }
  ],
  "line": 336,
  "name": "As a user, I can add drop-off instructions to my delivery order",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-add-drop-off-instructions-to-my-delivery-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 335,
      "name": "@DropDeliveryInstructions"
    }
  ]
});
formatter.step({
  "line": 337,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 338,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 340,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 341,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 342,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 345,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 346,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 347,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 353,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 354,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 355,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 356,
      "value": "#Then select item"
    },
    {
      "line": 357,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 358,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 359,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "tap on delivery details section",
  "keyword": "Then "
});
formatter.step({
  "line": 362,
  "name": "select come outside option",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "tap on add and enter instructions",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "tap back button",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7202514900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 28482562300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11473756000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6530974400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 19561820200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10228158200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 19349918300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 34777674800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6855654300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 11072837700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3232450500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8802621500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_details_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_come_outside_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_add_and_enter_instructions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_back_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 613089200,
  "status": "passed"
});
formatter.before({
  "duration": 142894125200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 365,
      "value": "#Then drop off instructions success message is displayed"
    },
    {
      "line": 367,
      "value": "#13"
    }
  ],
  "line": 369,
  "name": "As a user, upon selecting Delivery as an order type, I will be taken to the delivery address input screen.",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-upon-selecting-delivery-as-an-order-type,-i-will-be-taken-to-the-delivery-address-input-screen.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 368,
      "name": "@DisplayDeliveryScreen"
    }
  ]
});
formatter.step({
  "line": 370,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 371,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 372,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 373,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 374,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7097010900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25353547000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11689871300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 8431136700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12653714600,
  "status": "passed"
});
formatter.after({
  "duration": 393612300,
  "status": "passed"
});
formatter.before({
  "duration": 32752390900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 376,
      "value": "#14"
    }
  ],
  "line": 378,
  "name": "As a User, I can dismiss the system keyboard after adding a custom tip",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-dismiss-the-system-keyboard-after-adding-a-custom-tip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 377,
      "name": "@DismissSystemKeyboard"
    }
  ]
});
formatter.step({
  "line": 379,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 380,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 381,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 382,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 383,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 384,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 385,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 386,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 387,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 388,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 389,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 391,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 393,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 395,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 396,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 397,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 398,
      "value": "#Then select item"
    },
    {
      "line": 399,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 400,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 401,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 402,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "tap on Other tip and enter the desired amount",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "tap on Add button",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6938906400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25187656600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11109101200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6479141300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 27758738200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 9889570100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 7578717400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 38179089900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6936793000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 13850106500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 4137312200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9684913600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Other_tip_and_enter_the_desired_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 486500000,
  "status": "passed"
});
formatter.before({
  "duration": 128211745000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 405,
      "value": "#Then system keyboard is dismissed from the screen"
    },
    {
      "line": 407,
      "value": "#15"
    }
  ],
  "line": 409,
  "name": "As a user, I cannot cancel an ASAP Delivery Order",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-cannot-cancel-an-asap-delivery-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 408,
      "name": "@RestrictCancelASAPDelivery"
    }
  ]
});
formatter.step({
  "line": 410,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 411,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 413,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 414,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 415,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 416,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 418,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 419,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 420,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 422,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 424,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 426,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 427,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 428,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 429,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 431,
  "name": "tap on go back button and select yup discard",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.step({
  "line": 433,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 434,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "tap on order message",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "order tracking screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 437,
  "name": "tap on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6969152600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 26993442900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 15146121300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6348254400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 31502280600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10675656700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 8295211200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 34482199200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6773627900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12291440900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3039742700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9419556000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_go_back_button_and_select_yup_discard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_order_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.order_tracking_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 393271300,
  "status": "passed"
});
formatter.before({
  "duration": 34855966600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 438,
      "value": "#tapping on order message will display that Cancel button is not displayed"
    },
    {
      "line": 440,
      "value": "#16"
    }
  ],
  "line": 442,
  "name": ": I should be able to change the delivery time for my order",
  "description": "",
  "id": "delivery-functionality-validation;:-i-should-be-able-to-change-the-delivery-time-for-my-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 441,
      "name": "@ChangeDeliveryTimeAndPlaceOrder1"
    }
  ]
});
formatter.step({
  "line": 443,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 444,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 445,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 446,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 447,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 449,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 450,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 451,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 452,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 453,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 455,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 457,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 459,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 460,
      "value": "#Then tap on fries menu"
    },
    {
      "line": 461,
      "value": "#And fries menu items are displayed"
    },
    {
      "line": 462,
      "value": "#Then select item"
    },
    {
      "line": 463,
      "value": "#And selected item screen is displayed"
    }
  ],
  "line": 464,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 466,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "tap on deivery time section",
  "keyword": "Then "
});
formatter.step({
  "line": 468,
  "name": "pop up modal is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "tap on any time under schedule later",
  "keyword": "Then "
});
formatter.step({
  "line": 470,
  "name": "delivery time in payment screen is displayed with new time",
  "keyword": "And "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6938101000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25276963900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 14125009800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6359431400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 22922577700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10413555900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 11975014300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 37157862900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 7566205400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 15088688900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3153230200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 8908071200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_deivery_time_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.pop_up_modal_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_any_time_under_schedule_later()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_time_in_payment_screen_is_displayed_with_new_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 404403400,
  "status": "passed"
});
formatter.before({
  "duration": 37624705600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 472,
      "value": "#17"
    }
  ],
  "line": 474,
  "name": "As a User I should be able to place an order with the new delivery time changed",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user-i-should-be-able-to-place-an-order-with-the-new-delivery-time-changed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 473,
      "name": "@placeOrderWithNewDeliveryTime1"
    }
  ]
});
formatter.step({
  "line": 475,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 476,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 477,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 478,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 479,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 480,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 481,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 482,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 483,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 484,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 485,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 487,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 489,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 491,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 492,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 493,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 494,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 495,
  "name": "tap on deivery time section",
  "keyword": "Then "
});
formatter.step({
  "line": 496,
  "name": "pop up modal is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "tap on any time under schedule later",
  "keyword": "Then "
});
formatter.step({
  "line": 498,
  "name": "delivery time in payment screen is displayed with new time",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 500,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 7023959500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25860986700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 10743322400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6667549500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 20943263600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 9986416000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 6707665200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 13419665900,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [NXYL3JM8RM.NXYL3JM8RM*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: 15b6b262-c91c-48ab-a21c-496..., deviceName: 00008101-001E4C503498001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: bc6c13d130e54958a93a2689c1b..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 2eda3530-101d-46f0-8841-94f..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-001E4C503498001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5715, webStorageEnabled: false}\nSession ID: 8b78ea35-bc8c-49ea-8263-2f53615806b0\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeSecureTextField[@name\u003d\"Password Textfield\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.isDisplayed(BasePage.java:531)\r\n\tat com.mindtree.CucumberFramework.pageObjects.LoginPageCommon.loginWithValidCredentials(LoginPageCommon.java:441)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.loginWithValidCredentials(ShakeShackIOSE2E.java:149)\r\n\tat ✽.Then do Login with valid credentials(./src/test/resources/features/deliveryModule.feature:482)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_deivery_time_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.pop_up_modal_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_any_time_under_schedule_later()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_time_in_payment_screen_is_displayed_with_new_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 3274892500,
  "status": "passed"
});
formatter.before({
  "duration": 28052167600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 502,
      "value": "#18"
    }
  ],
  "line": 504,
  "name": "As a User, I can checkout a Scheduled Delivery Order successfully",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-checkout-a-scheduled-delivery-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 503,
      "name": "@PlaceDeliveryOrderWithScheduleLaterOption"
    }
  ]
});
formatter.step({
  "line": 505,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 506,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 507,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 508,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 509,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 510,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 511,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 512,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 513,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 514,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 515,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 517,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "tap on any time under schedule later",
  "keyword": "Then "
});
formatter.step({
  "line": 519,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 520,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 521,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 522,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 523,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 524,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 525,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 526,
  "name": "tap on deivery time section",
  "keyword": "Then "
});
formatter.step({
  "line": 527,
  "name": "pop up modal is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 528,
  "name": "tap on any time under schedule later",
  "keyword": "Then "
});
formatter.step({
  "line": 529,
  "name": "delivery time in payment screen is displayed with new time",
  "keyword": "And "
});
formatter.step({
  "line": 530,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 531,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6906173400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25583506300,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12901074100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6565935500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 18595302800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 10462418200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 7205316000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 38265123800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6534796400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 12965302500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3217430700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9034219900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_any_time_under_schedule_later()"
});
formatter.result({
  "duration": 41314291500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //XCUIElementTypeApplication[@name\u003d\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton (tried for 40 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementClickable(BasePage.java:348)\r\n\tat com.mindtree.CucumberFramework.pageObjects.CommonElements.tapSheduleLaterTime(CommonElements.java:218)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.tap_on_any_time_under_schedule_later(ShakeShackIOSE2E.java:379)\r\n\tat ✽.Then tap on any time under schedule later(./src/test/resources/features/deliveryModule.feature:518)\r\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MININT-53TP037\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities {additionalWebviewBundleIds: [DUJHR2RGFZ.DUJHR2RGFZ*], automationName: XCUITest, browserName: , bundleId: com.shakeshack.shakeshackapp, commandTimeouts: {default: 60000}, databaseEnabled: false, deviceContextId: f334a2bc-44ef-44a2-b9fa-65a..., deviceName: 00008101-000B39143699001E, idleTimeout: 90, javascriptEnabled: true, jobUuid: ec22b299b27846d886013ae6aec..., language: en, locale: en_US, locationContextEnabled: false, networkConnectionEnabled: false, newCommandTimeout: 90, noReset: true, orientation: PORTRAIT, platform: MAC, platformName: iOS, platformVersion: 15.3.1, processArguments: {args: [-AppleLanguages, (en-US), -AppleLocale, en_US, -NSLanguages, (en), -AppleLanguages, (en), -NSLanguages, (en), -AppleLocale, en_US], env: {}}, realDevice: true, takesScreenshot: true, testobject_device: iPhone_12_Pro_Max_15_real, testobject_device_name: iPhone 12 Pro Max, testobject_device_session_id: 227e4054-17b3-4bb8-be94-4a6..., testobject_platform_name: iOS, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: ddavisshakeshack, udid: 00008101-000B39143699001E, usedCachedDevice: false, webDriverAgentUrl: http://127.0.0.1:5716, webStorageEnabled: false}\nSession ID: 6b02565c-d661-4e44-9bac-61dfbe9705e0\n*** Element info: {Using\u003dxpath, value\u003d//XCUIElementTypeApplication[@name\u003d\"Project Finley Staging\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[7]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElementByXPath(IOSDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.ios.IOSDriver.findElement(IOSDriver.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.mindtree.CucumberFramework.pageObjects.BasePage.waitForElementClickable(BasePage.java:348)\r\n\tat com.mindtree.CucumberFramework.pageObjects.CommonElements.tapSheduleLaterTime(CommonElements.java:218)\r\n\tat com.mindtree.CucumberFramework.stepDefinations.ShakeShackIOSE2E.tap_on_any_time_under_schedule_later(ShakeShackIOSE2E.java:379)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_deivery_time_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.pop_up_modal_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_any_time_under_schedule_later()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_time_in_payment_screen_is_displayed_with_new_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 4720454200,
  "status": "passed"
});
formatter.before({
  "duration": 33920880400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 533,
      "value": "#19"
    }
  ],
  "line": 535,
  "name": "As a User, I can checkout an ASAP Delivery Order successfully",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-checkout-an-asap-delivery-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 534,
      "name": "@PlaceASAPOrder"
    }
  ]
});
formatter.step({
  "line": 536,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 537,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 538,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 539,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 540,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 541,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 542,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 543,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 544,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 545,
  "name": "tap on delivery button",
  "keyword": "Then "
});
formatter.step({
  "line": 546,
  "name": "delivery address page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "enter the delivery address",
  "keyword": "Then "
});
formatter.step({
  "line": 548,
  "name": "tap on next button",
  "keyword": "And "
});
formatter.step({
  "line": 549,
  "name": "choose your delivery time and tap start button",
  "keyword": "Then "
});
formatter.step({
  "line": 550,
  "name": "food main menu screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "Tap On Burger category Select item",
  "keyword": "Then "
});
formatter.step({
  "line": 552,
  "name": "select calories",
  "keyword": "Then "
});
formatter.step({
  "line": 553,
  "name": "Add to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 554,
  "name": "do Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 555,
  "name": "payment screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 556,
  "name": "tap on Pay button",
  "keyword": "Then "
});
formatter.step({
  "line": 557,
  "name": "Pay with Credit Card",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6940525400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25310260700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 11588048100,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 6456843000,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
formatter.result({
  "duration": 18136932900,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Hi_there_text()"
});
formatter.result({
  "duration": 9901576700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Login_with_email_page_is_displayed()"
});
formatter.result({
  "duration": 6396746500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.loginWithValidCredentials()"
});
formatter.result({
  "duration": 34952420800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_delivery_button()"
});
formatter.result({
  "duration": 6651841400,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.delivery_address_page_is_displayed()"
});
formatter.result({
  "duration": 14952982600,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.enter_the_delivery_address()"
});
formatter.result({
  "duration": 3140129700,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next_button()"
});
formatter.result({
  "duration": 9042652800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ShakeShackIOSE2E.food_main_menu_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Tap_On_Burger_category_Select_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.select_calories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Add_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.payment_screen_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_Pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Pay_with_Credit_Card()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 433800800,
  "status": "passed"
});
formatter.before({
  "duration": 173284245500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 558,
      "value": "#And order placed screen is displayed with order details"
    },
    {
      "line": 560,
      "value": "#20"
    }
  ],
  "line": 562,
  "name": "As a user, I can access the Customer Help screen from the order History for an already delivered order",
  "description": "",
  "id": "delivery-functionality-validation;as-a-user,-i-can-access-the-customer-help-screen-from-the-order-history-for-an-already-delivered-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 561,
      "name": "@HelpForDeliveredOrder"
    }
  ]
});
formatter.step({
  "line": 563,
  "name": "user launch the ShackShack app and tap on Allow InPopup",
  "keyword": "Given "
});
formatter.step({
  "line": 564,
  "name": "tap on next",
  "keyword": "Then "
});
formatter.step({
  "line": 565,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 566,
  "name": "tap on menu icon",
  "keyword": "Then "
});
formatter.step({
  "line": 567,
  "name": "hamburger menu screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 568,
  "name": "tap on Hi there text",
  "keyword": "Then "
});
formatter.step({
  "line": 569,
  "name": "Login with email page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 570,
  "name": "do Login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 571,
      "value": "#Then Home page is displayed"
    }
  ],
  "line": 572,
  "name": "tap on Order History in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 573,
  "name": "order history page is displayed with order details",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 574,
      "value": "#scroll to recent order"
    }
  ],
  "line": 575,
  "name": "tap on need help",
  "keyword": "Then "
});
formatter.step({
  "line": 576,
  "name": "need help screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "tap on still need help",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "still need help screen is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 579,
  "name": "tap on timeliness option",
  "keyword": "When "
});
formatter.step({
  "line": 580,
  "name": "tap on delivery issue option",
  "keyword": "When "
});
formatter.step({
  "line": 581,
  "name": "verify options screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ShakeShackIOSE2E.user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup()"
});
formatter.result({
  "duration": 6963105500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_next()"
});
formatter.result({
  "duration": 25902961200,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.Home_page_is_displayed()"
});
formatter.result({
  "duration": 12554545500,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.tap_on_menu_icon()"
});
formatter.result({
  "duration": 7621826800,
  "status": "passed"
});
formatter.match({
  "location": "ShakeShackIOSE2E.hamburger_menu_screen_is_displayed()"
});
