@Switchtopickup
Feature: To validate switch to pick up

Scenario: I can switch from Delivery to Indoor Pick-Up from Delivery Location screen

Given user launch the ShackShack app and tap on Allow InPopup
 Then tap on next
 Then tap on ask app not to track
 Then tap on delivery button
 Then tap on switch to pick up button
 Then tap on find shack
 Then tap on allow while using app
 Then tap on search icon
 And enter the nearest shack or postalcode Address SearchField and Do StartOrder
 Then Tap On Indoor Pickup
 Then Tap On Burger category Select item
 Then tap on single //verify
 Then Add to Bag
 Then do Checkout
 Then do Checkout //verify
 Then do Login with valid credentials
 Then Pay with Credit Card 
 And verify the order summary page and receipt
 Then tap on close button
 