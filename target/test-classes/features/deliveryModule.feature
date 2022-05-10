 Feature: Delivery functionality validation
 #1
 @TipAmount
  Scenario: I can set a tip % amount to my courier on the Check Out confirmation modal
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
    Then choose your delivery time screen is displayed
    Then tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on desired tip
    
    #2
  @ViewAppSuitField
  Scenario: I should be able to see Apt/Suite/Unit/Etc. field
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
	#3
  @AddOptionalAddress
  Scenario: I should be able to add Apt/Suite/Unit/Etc. information for delivery order
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
    And enter delivery optional address
    And tap on next button
    Then choose your delivery time screen is displayed
	#4
  @ConfirmDetailsInCheckoutScreen
  Scenario: As a User, I can confirm order details on the Check Out screen
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
    Then choose your delivery time screen is displayed
    #tap on scheduled time
    Then tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
	#5
  @SetCustomTipAmount
  Scenario: I can set a custom tip amount to my courier on the Check Out confirmation modal
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
   # Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
    Then choose your delivery time screen is displayed
    Then tap start button     
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Other tip and enter the desired amount
    Then tap on Add button
	#6
  @PlaceOrderWithoutSuggestedItems
  Scenario: As a user, I can place a Delivery Order without suggested items
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
    Then choose your delivery time screen is displayed
    Then tap start button  
    And food main menu screen is displayed
   Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
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
  @PlaceOrderWithSuggestedItems
  Scenario: As a user, I can place a Delivery Order with suggested items
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
   Then choose your delivery time screen is displayed
    Then tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    #dismiss the screen
    Then tap on fries menu
    And fries menu items are displayed
    Then select item
    And selected item screen is displayed
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
  @ViewDelivery&ServiceFeeDetails
  Scenario: As a user, when I reach the Checkout confirmation screen I can see Delivery and Service Fees detailed
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
     Then choose your delivery time screen is displayed
    Then tap start button
    And food main menu screen is displayed
   Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    
    #9 delivery fee is $0.99 with subtotal <=$12
  @DeliveryFee=$3.49WithSubtotal<=$12
  Scenario: I should see $3.49 Delivery fee when my subtotal is =<$12
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
   Then choose your delivery time screen is displayed
    Then tap start button
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    And verify delivery fee
    Then Pay with Credit Card
    Then tap on Pay button
    Then Pay with Credit Card
   And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
    
   #10 
  @DeliveryFee=$0.99WithSubtotal>$12and<=$34.99
  Scenario:I should see $0.99 Delivery fee when my subtotal is > $12 and =< $34.99
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    Then enter the delivery address
    And tap on next button
   Then choose your delivery time screen is displayed
    Then tap start button
    Then Tap On Burger category Select item
		And increase the item to make it $<=34.99   
		Then select calories
		Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    And verify delivery fee
    Then Pay with Credit Card
    Then tap on Pay button
    Then Pay with Credit Card
   And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
    And tap on close icon
    
    #10
  @ViewNeedHelpButton
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
   
	#11
  @DismissOrderHistoryPage
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
	#11
  @ChangeDeliveryTime
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
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on deivery time section
    And pop up modal is displayed
    Then tap on any time under schedule later
    And delivery time in payment screen is displayed with new time
    
    #12
    @DropDeliveryInstructions
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
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on delivery details section
    And select come outside option
    And tap on add and enter instructions
    And tap back button
   #Then drop off instructions success message is displayed
   
   #13
    @DisplayDeliveryScreen
    Scenario:  As a user, upon selecting Delivery as an order type, I will be taken to the delivery address input screen. 
    Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on delivery button
    And delivery address page is displayed
    
    #14
    @DismissSystemKeyboard
    Scenario:  As a User, I can dismiss the system keyboard after adding a custom tip
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
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Other tip and enter the desired amount
    Then tap on Add button
    #Then system keyboard is dismissed from the screen
    
    #15
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
    Then order tracking screen is displayed
    And tap on close icon
    #tapping on order message will display that Cancel button is not displayed
    
    #16
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
    Then Tap On Burger category Select item
    Then select calories
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on deivery time section
    And pop up modal is displayed
    Then tap on any time under schedule later
    And delivery time in payment screen is displayed with new time
    
    #17
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
    
    #18
    @PlaceDeliveryOrderWithScheduleLaterOption
    Scenario:  As a User, I can checkout a Scheduled Delivery Order successfully
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
    Then tap on any time under schedule later
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
    
    #19
    @PlaceASAPOrder
    Scenario: As a User, I can checkout an ASAP Delivery Order successfully
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
    Then tap on Pay button
    Then Pay with Credit Card
    #And order placed screen is displayed with order details
    
    #20
    @HelpForDeliveredOrder
    Scenario: As a user, I can access the Customer Help screen from the order History for an already delivered order
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
    #Then Home page is displayed
    Then tap on Order History in home page
    Then order history page is displayed with order details
    #scroll to recent order
    Then tap on need help
    And need help screen is displayed 
    And tap on still need help
    Then still need help screen is displayed
    When tap on timeliness option
    When tap on delivery issue option
    Then verify options screen
    
    #21
    @ViewNeedHelp
     Scenario:  As a user, I can access the Customer Help screen from the Order tracking webview
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
   # Then Home page is displayed
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
    Then tap on Pay button
    And tap on close icon
    Then tap on Order History in home page
    Then order history page is displayed with order details
    Then tap on need help
    And need help screen is displayed
    
    #22
    @RefundNotOffered-DisabledAdminApp
    Scenario:  As a user, I will not be offered a refund if Refund policy is disabled globally on Admin app
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
    Then tap on Pay button
    #post placing order, help option is not displayed in order tracking view
    And tap on close icon
    Then tap on Order History in home page
    Then order history page is displayed with order details
    Then tap on need help
    And need help screen is displayed
    Then tap on close icon in need help screen
    And pending order is displayed in home screen
    
    #23
    @RefundNotEntitled
    Scenario: As a user, I am not entitled to a full automatic refund if my order exceeds order amount threshold
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
   # Then Home page is displayed
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
    Then tap on Pay button
    #post placing order, help option is not displayed in order tracking view
    And tap on close icon
    Then tap on Order History in home page
    Then order history page is displayed with order details
    Then tap on need help
    And need help screen is displayed
    Then tap on close icon in need help screen
    And pending order is displayed in home screen
    
    #24
    @FullRefund-OrderNotDelivered
    Scenario: As a user, I will receive a full automatic refund if my order total amount is under a certain threshold (Not delivered yet)
     Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
   # Then Home page is displayed
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
    Then tap on Pay button
    And tap on close icon
    Then tap on Order History in home page
    Then order history page is displayed with order details
    Then tap on need help
    And need help screen is displayed
    When tap on timeliness option
    Then verify options screen
    When entered concerned issue 
    And tap submit button    
    Then tap on close icon in need help screen
    And pending order is displayed in home screen
    
    #25
    @FullRefund-OrderDelivered
    Scenario: As a user, I will receive a full automatic refund if my order total amount is under a certain threshold (Order was delivered)
       Given user launch the ShackShack app and tap on Allow InPopup
    Then tap on next
    Then Home page is displayed
    Then tap on menu icon
    Then hamburger menu screen is displayed
    Then tap on Hi there text
    Then Login with email page is displayed
    Then do Login with valid credentials
   # Then Home page is displayed
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
    Then tap on Pay button
    And tap on close icon
    Then tap on Order History in home page
    Then order history page is displayed with order details
    Then tap on need help
    And need help screen is displayed
    When tap on timeliness option
    Then verify options screen
    When entered concerned issue 
    And tap submit button    
    Then verify the refund confirmation screen
    
    #26
    @TrackDeliveryOrder
    Scenario: As a User, I can follow my Delivery Order progress by tapping pending order status on the Home screen
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
    #Then tap on fries menu
    #And fries menu items are displayed
    #Then select item
    #And selected item screen is displayed
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
    And tap on close icon
    And tap on order message
    Then order tracking screen is displayed
   
   #27 cancel nt
   @CancelScheduledDeliveryOrder
   Scenario:I can cancel a scheduled delivery order
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
    Then tap on any time under schedule later
    Then choose your delivery time and tap start button
    And food main menu screen is displayed
    Then Tap On Burger category Select item
    Then select calories
    Then Add to Bag
    Then do Checkout
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
    And tap on close icon
   
   #28   
   Scenario:
    
    
    