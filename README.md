# React Shopping Cart Application

This project is a simple React application designed to demonstrate concepts such as component structuring, state management, and API integration. It includes a Home page, a Shop page with a shopping cart, a Product page, a WishList page, and a navigation bar for seamless page transitions.

## Features

1. Navigation Bar
   A persistent navigation bar is displayed across all pages.
   Includes a cart icon and wishlist icon.
   Provides links to the Home and Shop pages.
2. Home Page
   Displays a welcoming interface.
   Includes basic content like images and information.
3. Shop Page
   Fetches products from the FakeStore API.
   Displays product cards with the following features:
   Title: The product's name.
   Quantity Control:
   Input field for manual quantity entry.
   Increment and decrement buttons for fine-tuning the quantity.
   Add To Cart Button: Adds the specified quantity of the product to the cart.
   Add To WishList Button.
   Includes a cart summary button to review the order.
4. Shopping Cart
   Updates dynamically when products are added.
   Allows users to proceed to a checkout page (logic for checkout is not implemented).

## Technologies Used

**React**: For building the user interface.
**React Router**: For navigation between pages.
**FakeStore API**: For fetching product data.
**CSS Modules or Styled Components**: For styling the components.

## Future Enhancements

Add checkout functionality.
Enhance styling for a more polished UI.
Add user authentication and order history tracking.
Implement filters and sorting for the Shop page.
Display number icon on the cart & wishlist indicating the number of items added.
