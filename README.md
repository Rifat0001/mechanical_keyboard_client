# # Mechanical Keyboard Shop Frontend

[Live URL](https://mechanical-keyboard-client.vercel.app/)

This is client site of the Mechanical Keyboard Shop. It is built using React, React Router DOM, Redux, RTK Query, Tailwind CSS, and DaisyUI.

## Installation

### Prerequisites

- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Rifat0001/mechanical_keyboard_client.git
   cd your-repo-name
   ```
2. Install dependencies::
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   or
   yarn run dev
   The app should now be running on http://localhost:5173.
   ```

### Usage

1. Product can be search by name and brand , filter function also added from backend
2. State is managaed Redux, and data fetching is handled by RTK Query.
3. Tailwind CSS and DaisyUI is used to create responsive and modern UI components.

### Features

- Product Listings: Displays all products with search and filter functions.
- Sorting: Can sort from price high to low and the newest product will be display first.
- Cart Management: Add, remove, and update product quantities in the cart page.
- Checkout: Collect user information and process orders.
- Responsive Design: Built with Tailwind CSS and DaisyUI.

### APIs

This frontend interacts with the backend APIs to fetch product data, manage cart operations. Refer to the backend repository for detailed API documentation.
[Backend Repository](https://github.com/Rifat0001/mechanical_keyboard_backend)

### Technologies

- React: JavaScript library for building user interfaces.
- Redux: State management library.
- RTK Query: Data fetching and caching tool.
- React Router DOM: Declarative routing for React.
- Tailwind CSS: Utility-first CSS framework.
- DaisyUI: Tailwind CSS components.
- sweetalert2: showing alert
