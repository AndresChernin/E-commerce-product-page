Frontend Mentor - E-commerce Product Page

Overview

This project is my solution to the E-commerce Product Page challenge on Frontend Mentor.

I built a responsive product page for an e-commerce website featuring a product image gallery, quantity controls, and a shopping cart. The goal was to create an interactive user interface while improving my understanding of React components, state management, and CSS layouts.

Screenshot



Links

Live Site: 

Frontend Mentor Solution: View my solution

Built with

React

JavaScript

CSS

Flexbox

Responsive design

React components and props


My process
Step 1: Building the Model and Controller

I started by developing the model and controller because the shopping cart needed the underlying functionality to manage orders.

In addition to ProductsModel.js and ProductsController.js, I created separate Order and User classes. This allowed me to separate product data, user information, and order management instead of putting all the logic into the React components.

I chose this structure with future extensions in mind. Although the current project focuses on a single product, I wanted the codebase to be easier to extend if I decide to support multiple products or add more shopping cart features later.

Step 2: Creating the Initial View

After implementing the model and controller, I created View.html to establish the initial user interface.

At this stage, I simulated the behaviour of the cart and lightbox interactions using console.log() statements. This allowed me to test the interaction flow before implementing the actual React components.

Step 3: Implementing the Interactive Components

Next, I implemented CartComponent and OpenedLightBoxComponent to replace the temporary console.log() simulations with actual functionality.

The cart component handles displaying orders and removing them, while the lightbox component provides an interactive product image gallery with navigation controls.

After implementing these components, I removed the temporary console.log() statements that I had used during the initial development stage.

Step 4: Making the Layout Responsive

I used CSS media queries (@media) to adapt the layout to different screen sizes.

This allowed me to adjust the presentation of the product page for mobile and desktop screens and provide a more suitable layout for different devices.

Step 5: Improving the User Experience

I added close buttons to both CartComponent and OpenedLightBoxComponent, allowing users to close the cart and lightbox when they no longer needed them.

These small additions made the interface more convenient to use and gave users greater control over the displayed panels.

What I learned

While building this project, I improved my understanding of how to divide a user interface into reusable React components and pass data and event handlers between them.

I also gained practical experience with CSS positioning, Flexbox, responsive layouts, and image overlays. Implementing the lightbox helped me understand how to position navigation controls relative to an image while keeping the HTML structure valid.

Working on the shopping cart helped me practise handling product quantities, updating order data, and conditionally rendering different cart states.

Challenges I faced

One of the most challenging parts was positioning the lightbox controls correctly. I had to consider how absolute positioning relates to parent elements and how the dimensions of an image affect the placement of navigation buttons.

Another challenge was keeping interactive elements separate in the React component structure. For example, navigation buttons should not be nested inside another button, because nested interactive elements create invalid HTML and can cause unexpected behaviour.

What I would improve

If I continue developing this project, I would like to:

Extend the cart to support multiple different products.

Improve accessibility, including keyboard navigation and focus management in the lightbox.

Test the layout more thoroughly across screen sizes and browsers.

Refine the component structure and make repeated UI patterns easier to maintain.

Acknowledgments

Challenge by Frontend Mentor.