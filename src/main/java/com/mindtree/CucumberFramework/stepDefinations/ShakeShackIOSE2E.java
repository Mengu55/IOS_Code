package com.mindtree.CucumberFramework.stepDefinations;

import java.util.concurrent.TimeoutException;

import com.mindtree.CucumberFramework.pageObjects.BurgerCategoryAndItems;
import com.mindtree.CucumberFramework.pageObjects.CommonElements;
import com.mindtree.CucumberFramework.pageObjects.DeliveryPage;
import com.mindtree.CucumberFramework.pageObjects.FoodMainMenu;
import com.mindtree.CucumberFramework.pageObjects.FriesCategoryAndItems;
import com.mindtree.CucumberFramework.pageObjects.LoginPageCommon;
import com.mindtree.CucumberFramework.pageObjects.OrderConfirmation_common;
import com.mindtree.CucumberFramework.pageObjects.orderHistoryPage;
import com.mindtree.CucumberFramework.pageObjects.paymentPage_common;
import com.mindtree.CucumberFramework.pageObjects.pickup_common;
//import com.mindtree.CucumberFramework.utils.DriverFactory;
import com.mindtree.CucumberFramework.utils.DriverFactory2;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShakeShackIOSE2E extends LoginPageCommon {

	public static LoginPageCommon loginPage = new LoginPageCommon();
	public static BurgerCategoryAndItems BurgerAndItems = new BurgerCategoryAndItems();
	public static paymentPage_common paymentPage = new paymentPage_common();
	public static DriverFactory2 driverFactory = new DriverFactory2();
	public static OrderConfirmation_common orderConfirm = new OrderConfirmation_common();
	public static pickup_common pickup = new pickup_common();
	public static DeliveryPage deliveryPage = new DeliveryPage();
	public static FriesCategoryAndItems FriesAndItems = new FriesCategoryAndItems();
	public static FoodMainMenu foodMenu = new FoodMainMenu();
	public static CommonElements common = new CommonElements();
	public static orderHistoryPage orderHistory = new orderHistoryPage();

	public ShakeShackIOSE2E() {

	}

	@Given("^user launch the ShackShack app and tap on Allow InPopup$")
	public void user_launch_the_ShackShack_app_and_tap_on_Allow_InPopup() throws Exception {
	
		loginPage.ClickOnAllowInPopup();

	}

	@Then("^tap on next button and tap On Pickup$")
	public void tap_on_next_button_and_tap_On_Pickup() throws Exception {
		loginPage.ClickOnNextButtonInAdvertizement();
		loginPage.clickOnPickupButtonInHomeScreen();

	}

	@Then("^tap on next button inAdvertizment$")
	public void tap_on_next_button_inAdvertizment() throws Exception {
		loginPage.ClickOnNextButtonInAdvertizement();

	}

	@Then("^tap on next$")
	public void tap_on_next() throws Exception {
		loginPage.ClickOnNextButton();

	}

	// home page is displayed
	@Then("^Home page is displayed$")
	public void Home_page_is_displayed() throws Exception {
		loginPage.verifyHomePageElements();
	}

	/*
	 * @Then("^i am on home page$") public void i_am_on_home_page() {
	 * loginPage.HomePageAssertions();
	 * 
	 * }
	 */
	@Then("^tap on delivery$")
	public void tap_on_delivery() throws Exception {
		loginPage.clickOnDeliveryBtn();// deliveryPage.clickOnDeliveryBtn();
	}

	@Then("^tap on SignIn in home page$")
	public void tap_on_SignIn_in_home_page() throws Exception {
		loginPage.tapOnSignInHomePage();
	}

	@Then("^tap on next button and allow$")
	public void tap_on_next_button_and_allow() throws Exception {
		loginPage.ClickOnNextButton();
	}

	@Then("^tap on pickup$")
	public void tap_on_pickup() throws Exception {
		loginPage.clickOnPickup();
	}

	@Then("^tap on find shack$")
	public void tap_on_find_shack() throws Exception {
		loginPage.clickOnFindShack();
		loginPage.popupPermissionAllowWhileUsingApp();
	}

	@And("^enter the nearest shack or postalcode Address SearchField and Do StartOrder$")
	public void enter_the_nearest_shack_or_postalcode_Address_SearchField_and_Do_StartOrder() throws Exception {
		loginPage.enterTheNearestShackOrPostalCodeInTextField();
		loginPage.clickOnStartOrderButtonAndTapOnYepThatsCorrect();
	}

	@Then("^Tap On Indoor Pickup$")
	public void Tap_On_Indoor_Pickup() throws Exception {
		loginPage.selectIndoorPickup();
	}

	@Then("^Tap On Burger category Select item$")
	public void Tap_On_Burger_category_Select_Item() throws Exception {
		BurgerAndItems.clickOnBurgerMenu();
		BurgerAndItems.clickOnItemUnderBurger();
	}

	@Then("^select calories$")
	public void select_calories() throws Exception {
		BurgerAndItems.selectSingleCalories();
	}
	//
	@Then("^increase the item to make it \\$<=(\\d+)\\.(\\d+)$")
	public void increase_the_to_make_it_$(int arg2, int arg3) throws Throwable {
		BurgerAndItems.increaseQuantity();
		System.out.println("item increased and verify the subtotal:" +arg2 +arg3);
	    
	    
	}
	// adding to bag
	@Then("^Add to Bag$")
	public void Add_to_Bag() throws Exception {
		common.addToBag();
	}

	// checkout
	@Then("^do Checkout$")
	public void checkout() throws Exception {
		common.checkout();
	}

	// login with valid credentials
	@And("^do Login with valid credentials$")
	public void loginWithValidCredentials() throws Exception {
		loginPage.loginWithValidCredentials();
	}

	@Then("^Pay with Credit Card$")
	public void Pay_with_Credit_Card() throws Exception {
		// paymentPage.selectCreditCard();
		// paymentPage.enterCreditCardDetails();
		// paymentPage.tapOnPay();
		paymentPage.againEnterCVVdetailsandConfirm();
	}

	@And("^verify the order summary page and receipt$")
	public void verify_the_order_summary_page_and_receipt() throws Exception {
		orderConfirm.notNowPopup();
		orderConfirm.OrderSummaryVerification();
		orderConfirm.receiptVerification();
	}

	@Then("^Tap On DriveUP Window Pickup$")
	public void Tap_On_DriveUP_Window_Pickup() throws Exception {
		pickup.tapOnDriveUpWindow();
		pickup.tapOnColor();
		pickup.tapOnAddColorButton();
		pickup.tapOnVehicleType();
		pickup.tapOnAddTypeButton();
		pickup.tapOnStartOrder();

	}

	// delivery button
	@Then("^tap on delivery button$")
	public void tap_on_delivery_button() throws Throwable {
		loginPage.clickOnDeliveryBtn();
	}

	// enter delivery add
	@Then("^enter the delivery address$")
	public void enter_the_delivery_address() throws Throwable {
		deliveryPage.enterTheAddress();
	}

	// tapping on next button
	@Then("^tap on next button$")
	public void tap_on_next_button() throws Throwable {
		deliveryPage.clickOnNextBtnOnAddressField();
	}

	// tap start button
	@Then("^tap start button$")
	public void tap_start_button() throws Throwable {
		deliveryPage.clickOnStartOderBtn();
	}
	//verify choose your delivery time screen 
	@Then("^choose your delivery time screen is displayed$")
	public void choose_your_delivery_time_screen_is_displayed() throws Exception   {
		deliveryPage.verifyChooseDeliveryScreen();
	}

	// switch to pick up order

	@Then("^tap on ask app not to track$")
	public void tap_on_ask_app_not_to_track() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^tap on search icon$")
	public void tap_on_search_icon() throws Throwable {
	}

	@Then("^tap on switch to pick up button$")
	public void tap_on_switch_to_pick_up_button() throws Throwable {
		pickup.searchicon();

	}

	// delivery

	@Then("^tap on Hi there text$")
	public void tap_on_Hi_there_text() throws Throwable {
		loginPage.accountSignInCreation();
	}

	// tapping on menu icon
	@Then("^tap on menu icon$")
	public void tap_on_menu_icon() throws Exception {
		loginPage.clickOnMenuIcon();
	}

	// tapping on fries menu and items

	@Then("^tap on fries menu$")
	public void tap_on_fries_menu_and_select_item() throws Throwable {
		FriesAndItems.clickOnFriesMenu();

	}

	@Then("^select item$")
	public void select_item() throws Exception {
		FriesAndItems.clickOnCrinkleFries();
	}

	// tapping on tips
	@Then("^tap on desired tip$")
	public void tap_on_desired_tip() throws Exception {
		paymentPage.choosetip();

	}

	/*
	 * //enter the optional delivery address
	 * 
	 * @Then ("^enter optional address field$") public void
	 * enter_optional_address_field() throws Exception{
	 * deliveryPage.enterOptionalAddress();
	 * 
	 * }
	 */

	// menu screen
	@Then("^hamburger menu screen is displayed$")
	public void hamburger_menu_screen_is_displayed() throws Exception {
		loginPage.verifyHamburgerMenuScreenElements();
	}

	// email login page
	@Then("^Login with email page is displayed$")
	public void Login_with_email_page_is_displayed() throws Exception {
		loginPage.verifyLoginWithMailPageElements();
	}

	// continue button is enable
	@Then("^continue button is enabled after entering the emailID$")
	public void continue_button_is_enabled_after_entering_the_emailID() {
		loginPage.verifyContinueBtnIsEnable();
	}

	// delivery address screen
	@And("^delivery address page is displayed$")
	public void delivery_address_page_is_displayed() throws Exception {
		deliveryPage.verifyDeliveryAddScreenElements();
	}

	// food main menu screen
	@And("^food main menu screen is displayed$")
	public void food_main_menu_screen_is_displayed() throws Exception {
		foodMenu.verifyFoodMainMenu();

	}

	// fries menu items
	@And("^fries menu items are displayed$")
	public void fries_menu_items_are_displayed() throws Exception {
		FriesAndItems.verifyFriesMenuElements();
	}

	// selected item screen is displayed
	@And("^selected item screen is displayed$")
	public void selected_item_screen_is_displayed() throws Exception {
		FriesAndItems.verifyAfterItemSelectionScreenCommonElements();
	}

	// tapping on pay btn
	@Then("^tap on Pay button$")
	public void tap_on_Pay_button() throws Exception {
		paymentPage.tapPayBtn();
	}

	// tapping on other tip and entering amount and tapping on add button
	@Then("^tap on Other tip and enter the desired amount$")
	public void tap_on_Other_tip_and_enter_the_desired_amount() throws Exception {
		paymentPage.otherTip();
	}

	@Then("^tap on Add button$")
	public void tap_on_Add_button() throws Exception {
		paymentPage.tapAddBtn();
	}

	@And("^tap on go back button and select yup discard$")
	public void tap_on_go_back_button_and_select_yup_discard() throws Exception {
		paymentPage.tapGoBackBtn();

	}

	@Then("^select Yup discard$")
	public void select_Yup_discard() {

	}

	@And("^tap on order message$")
	public void tap_on_order_message() throws Exception {
		orderConfirm.tapOrderMsg();

	}

	// payment screen
	@And("^payment screen is displayed$")
	public void payment_screen_is_displayed() throws Exception {
		paymentPage.verifyPaymentScreenElements();
	}
	
	//
	@And ("^verify delivery fee$")
	public void verify_delivery_fee() throws Exception{
		paymentPage.verifyDeliveryFee();
	}

	// tapping on delivery time section
	@Then("^tap on deivery time section$")
	public void tap_on_deivery_time_section() throws Exception {
		paymentPage.tapDeliveryTime();
	}

	// pop-up displayed
	@And("^pop up modal is displayed$")
	public void pop_up_modal_is_displayed() throws Exception {
		common.verifydeliveryTimePopupScreenElements();

	}

	// tap on delivery details section
	@Then("^tap on delivery details section$")
	public void tap_on_delivery_details_section() throws Exception {
		paymentPage.tapDeliveryDetails();

	}

	// schl later
	@Then("^tap on any time under schedule later$")
	public void tap_on_any_time_under_schedule_later() throws Exception {
		common.tapSheduleLaterTime();
	}

	// new delivery time is display
	@And("^delivery time in payment screen is displayed with new time$")
	public void delivery_time_in_payment_screen_is_displayed_with_new_time() {

	}

	// select I'll come outside
	@And("^select come outside option$")
	public void select_come_outside_option() throws Exception {
		paymentPage.comeOutsideOption();
	}

	// add inst
	@And("^tap on add and enter instructions$")
	public void tap_on_add_and_enter_instructions() throws Exception {
		common.tapAddInst();
	}

	@And("^verify \"([^\"]*)\" is \\$(\\d+)\\.(\\d+)$")
	public void verify_is_$(String arg1, int arg2, int arg3) throws Throwable {

	}

	// tap back button
	@And("^tap back button$")
	public void tap_back_button() throws Exception {
		common.tapBackButton();
	}

	// order history
	@Then("^tap on Order History in home page$")
	public void tap_on_Order_History_in_home_page() throws Throwable {
		orderHistory.clickonHistory();
	}

	@Then("^order history page is displayed with order details$")
	public void order_history_page_is_displayed_with_order_details() throws Throwable {

		orderHistory.verifyHistoryPage();
	}

	@And("^tap on down arrow to close order history screen$")
	public void tap_on_down_arrow_to_close_order_history_screen() throws Throwable {
		orderHistory.downArrow();
	}

	// enter incomplete delivery address
	@Then("^enter incomplete delivery address$")
	public void enter_incomplete_delivery_address() throws Exception {
		deliveryPage.enterIncompleteAddress();

	}

	
	@And("^enter delivery optional address$")
	public void enter_delivery_optional_address() throws Exception {
		deliveryPage.enterAppsuit();
	}

	// close icon post placing order
	@And("^tap on close icon$")
	public void tap_on_close_icon() throws Exception {
		orderConfirm.tapCloseIcon();

	}
	// order tracking screen
		@Then ("^order tracking screen is displayed$")
			 public void  order_tracking_screen_is_displayed() throws Exception{
			orderConfirm.verifyOrderScreenElements();		

		}
		//tap need help
		@Then ("^tap on need help$")
		public void tap_on_need_help() throws Exception{
			orderHistory.tapNeedHelp();
		}
		@And ("^need help screen is displayed$")
		public void need_help_screen_is_displayed(){
			orderHistory.verifyNeedHelpScreenElements();
		}
		//tap still need help
		@And ("^tap on still need help$")
		public void tap_on_still_need_help() throws Exception{
			orderHistory.tapStillNeedHelp();
		}
		@Then ("^still need help screen is displayed$")
		public void still_need_help_screen_is_displayed(){
			orderHistory.verifyStillNeedHelpScreenElements();
		}
		
		//tap timeliness
		@When ("^tap on timeliness option$")
		public void tap_on_timeliness_option() throws Exception{
			orderHistory.tapTimeliness();
		}
		//tap delovery issue
		@When ("^tap on delivery issue option$")
		public void tap_on_delivery_issue_option() throws Exception{
			orderHistory.tapdeliveryIssue();
		}
		
		@Then ("^verify options screen$")
		public void verify_options_screen() throws Exception{
			orderHistory.verifyOptionScreenElements();
		}
		//tap close icon in need help screen
		@Then ("^tap on close icon in need help screen$")
		public void tap_on_close_icon_in_need_help_screen() throws Exception{
			orderHistory.tapCloseIconNeedHelpScreen();
		}
		//pending order in home screen
		@And ("^pending order is displayed in home screen$")
		public void pending_order_is_displayed_in_home_screen(){
			loginPage.verifyPendingOrder();
		}
		//
		@When ("^entered concerned issue$")
		public void entered_concerned_issue() throws Exception{
			orderHistory.enterIssue();
		}
		//
		@And ("^tap submit button$")
		public void tap_submit_button() throws Exception{
			orderHistory.tapSubmitBtn();
		}
		
		 @Then ("^verify the refund confirmation screen$")
		 public void  verify_the_refund_confirmation_screen(){
			 orderHistory.verifyRefundConfirmationScreen();
		 }
}
