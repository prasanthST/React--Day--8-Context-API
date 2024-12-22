# Shopping Cart Application using useContext

This is a simple shopping cart application built with React and Context API. The application allows users to view products, add them to a cart, and manage the quantities of items in the cart. 

## Features

- View a list of products with details such as title, price, category, rating, and stock.
- Add products to the cart.
- Remove products from the cart.
- Increase or decrease the quantity of items in the cart.
- Automatically update the total quantity and total amount based on the items in the cart.

## Technologies Used

- React
- Context API
- Bootstrap (for styling)

## Context API

The application uses the Context API to manage the state of products and the shopping cart. The ProductContext provides the necessary functions to add, remove, and update items in the cart.

## Context Provider

The DataProvider component wraps the application and provides the context to all child components. It manages the state of products and the cart.

## Components
- Home: Displays the list of products and allows users to add/remove items from the cart.

- ViewCart: Displays the items in the cart, allows quantity adjustments, and shows the total amount.

- NavigationBar: Provides navigation links to the Home and View Cart pages.
Contributing

## Usage

1. Home Page: Browse through the list of products. Each product displays its title, price, category, rating, stock, and a brief description.

2. Add to Cart: Click the "Add to Cart" button to add a product to your cart.

3. View Cart: Navigate to the "View Cart" page to see the items you have added. 

- Increase or decrease the quantity of each item.
- Remove items from the cart.
- View the total quantity and total amount of your cart.


## Getting Started

 use `npm run dev` to start the application 
