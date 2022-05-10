 Feature: Feature to test Delivery  page functionality
 
 
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
    And tap add icon to increase the '<price>'
    |Price|
    |34.99|
    Then Add to Bag
    Then do Checkout
    Then do Login with valid credentials
    And payment screen is displayed
    Then tap on Pay button
    Then Pay with Credit Card
    And tap on close icon
    And tap on order message
    Then tap on close icon
