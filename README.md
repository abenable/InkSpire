# MERN Stack Dropshipping Web App

Welcome to my MERN stack dropshipping web app! This app is designed to allow users to easily start their own dropshipping business and manage their inventory, orders, and shipping all in one place.

## Technologies Used

This project was built using the MERN stack, which includes:

- MongoDB: A NoSQL database used to store product and user information.
- Express: A web application framework used to create the server-side logic of the application.
- React: A JavaScript library used to create the user interface.
- Node.js: A JavaScript runtime used to run the server-side code.

Other technologies used in this project include:

- Redux: A state management library used to manage global state in the application.
- Stripe API: Used to handle payment processing for orders.
- Cloudinary: A cloud-based image and video management service used to store product images.
- Bootstrap: A front-end framework used to style the application.

## Features

Some of the key features of this app include:

- User authentication: Users can create an account and log in to access the app's features.
- Product management: Users can add, edit, and delete products from their inventory.
- Order management: Users can view and manage their orders, including processing payments through Stripe.
- Shipping management: Users can track shipping information for each order.
- Search functionality: Users can search for products based on keywords.
- Responsive design: The app is designed to be mobile-friendly, so users can access it from any device.

## Installation

To install and run this app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` to install all the necessary dependencies.
4. Create a `.env` file in the root directory and add the following variables:
   - `MONGO_URI`: Your MongoDB connection URI.
   - `JWT_SECRET`: A secret key used to sign JSON Web Tokens for authentication.
   - `STRIPE_SECRET_KEY`: Your Stripe API secret key.
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key.
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
5. Run `npm run dev` to start the development server.
6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Conclusion

Thank you for checking out my MERN stack dropshipping web app! I hope you find it useful and feel free to reach out to me if you have any questions or feedback.
