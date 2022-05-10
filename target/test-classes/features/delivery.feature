Feature: Feature to test Delivery  page functionality

  @DELIVERY
  Scenario: Verify user is able to place an order by selecting delivery method
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then tap on delivery button
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    Then Pay with Credit Card
    And verify the order summary page and receipt

  #1 from 1- 21 steps added in this test cases
  @TipAmount1
  Scenario: Verify user can set a tip % amount on the Check Out confirmation modal
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then tap on fries menu
    And fries menu items are displayed
    Then select item
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on desired tip
	#2
  @ViewAppSuitField1
  Scenario: Verify App/Suite/Unit field is displayed
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
	#3
  @AddAppSuitField1
  Scenario: Verify user should be able to add App/Suite/Unit
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And enter delivery optional address
    And tap on next button
	#4
  @ConfirmDetailsInCheckoutScreen1
  Scenario: Verify user can confirm order details on the Check Out screen
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
   Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
	#5
  @SetCustomTipAmount1
  Scenario: Verify user can set custom tip amount in the Check out confirmation modal
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Other tip and enter the desired amount
    Then tap on Add button
	#6
  @PlaceOrderWithoutSuggestedItems1
  Scenario: Verify user can place delivery order without suggested items
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
   Then tap on fries menu
   And fries menu items are displayed
   Then select item
   And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
    And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
	#7
  @PlaceOrderWithSuggestedItems1
  Scenario: Verify user can place delivery order without suggested items
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    Then Pay with Credit Card
    And tap on go back button and select yup discard
    Then Pay with Credit Card
    Then tap on Pay button
   And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
	#8
  @ViewDelivery&ServiceFeeDetails1
  Scenario: Verify user can set a tip % amount on the view delivery and service fee details on Checkout screen
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
  Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    
	#9
  @DeliveryFee=$3.49WithSubtotal=<$12
  Scenario: I should see $3.49 Delivery fee when my subtotal is =<$12
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    Then Tap On Burger category Select item
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    And verify "delivery fee" is $3.49 in
    Then Pay with Credit Card
    Then tap on Pay button
    Then Pay with Credit Card
   And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
    
	#10incomplete
  @ViewDeliveryFee2
  Scenario: Verify $0.99 Delivery fee is displayed when subtotal is >$12 and =<$34.99
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    Then Tap On Burger category Select item
    And increase the "item" to make it $34.99
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
    And tap on close icon
    And tap on order message
    Then tap on close icon
	#11
  @ViewNeedHelpButton1
  Scenario: Verify user can view Need Help button for delivery orders in Order history
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then tap on Order History in home page
   Then order history page is displayed with order details
	#12
  @DismissOrderHistoryPage1
  Scenario: As a User, When I go to Order history I should be able to dismiss the order history page
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then tap on Order History in home page
    Then order history page is displayed with order details
    And tap on down arrow to close order history screen
    Then Home page is displayed
	#13
  @ChangeDeliveryTime1
  Scenario: As a user who has selected Delivery, I can change my delivery time from the Checkout confirmation page
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
     Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on deivery time section
    And pop up modal is displayed
    Then tap on any time under schedule later
    And delivery time in payment screen is displayed with new time
    #14
    @DropDeliveryInstructions1
    Scenario: As a user, I can add drop-off instructions to my delivery order
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on delivery details section
    And select come outside option
    And tap on add and enter instructions
    And tap back button
   #Then drop off instructions success message is displayed
   
   #15 skipped-unable to capture the red bar(error msg)
   @InputAddress
   Scenario: As a user,I can input my address into the address input field to get delivery addresses that match my delivery address of choice
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter incomplete delivery address
    #And suggested address is displayed
    #And tap away from the text box 
    And tap on next button
    Then a red notification bar appears asking user to select a valid address in order to continue
    
	#16 incomplete
	Scenario: I should see Free Delivery fee when my subtotal is =>$35
	 Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
   Then Tap On Burger category Select item
    Then select calories
    And increase the quantity by tapping '+' icon till $35
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
   And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
    
    #17
    @DisplayDeliveryScreen1
    Scenario:  As a user, upon selecting Delivery as an order type, I will be taken to the delivery address input screen. 
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    
    #18-14
    @DismissSystemKeyboard1
    Scenario:  As a User, I can dismiss the system keyboard after adding a custom tip
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
     Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Other tip and enter the desired amount
    Then tap on Add button
    #Then system keyboard is dismissed from the screen
    
    #19
    @RestrictCancelASAPDelivery
    Scenario: As a user, I cannot cancel an ASAP Delivery Order
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then Pay with Credit Card
    And tap on go back button and select yup discard
    Then Pay with Credit Card
    Then tap on Pay button
    And tap on close icon
    And tap on order message
    #tapping on order message will display that Cancel button is not displayed
    Then order tracking screen is displayed
    And tap on close icon
    
    
    #20
    @ChangeDeliveryTimeAndPlaceOrder1
    Scenario: : I should be able to change the delivery time for my order
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
   Then tap on fries menu
   And fries menu items are displayed
   Then select item
   And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on deivery time section
    And pop up modal is displayed
    Then tap on any time under schedule later
    And delivery time in payment screen is displayed with new time
    
    #21 
    @placeOrderWithNewDeliveryTime1
    Scenario:  As a User I should be able to place an order with the new delivery time changed
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on deivery time section
    And pop up modal is displayed
    Then tap on any time under schedule later
    And delivery time in payment screen is displayed with new time
    Then tap on Pay button
    Then Pay with Credit Card
    
    #22
    Scenario: schedule later
    