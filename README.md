# Stationery Website

A modern, responsive stationery product catalog website built with React and TypeScript. Features include product browsing with search/filter functionality and an admin dashboard for product management.

## Features

- 🛍️ **Product Catalog**: Browse stationery products with images, descriptions, and prices
- 🔍 **Search & Filter**: Find products by name or filter by category
- 📊 **Admin Dashboard**: Manage products (add, edit, delete)
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and intuitive user interface

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ProductCard.tsx   # Individual product card
│   ├── SearchBar.tsx     # Search and filter bar
│   └── Navigation.tsx    # Top navigation bar
├── pages/               # Page components
│   ├── Catalog.tsx      # Product catalog page
│   └── AdminDashboard.tsx # Admin management page
├── types/              # TypeScript type definitions
│   └── Product.ts      # Product interface
├── App.tsx             # Main app component
├── index.tsx           # React entry point
└── App.css             # Global styles

public/
└── index.html          # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

### Catalog Page
- Browse all products in the catalog
- Use the search bar to find products by name
- Filter products by category using the dropdown
- View product details, prices, and availability status

### Admin Dashboard
- Access the admin panel via the "Admin Dashboard" link
- Add new products using the "Add New Product" button
- Edit product information by clicking the "Edit" button
- Delete products using the "Delete" button
- View all products in a table format

## Sample Products

The catalog comes preloaded with sample products including:
- Pens (Blue Ballpoint Pen)
- Notebooks (Lined Notebook)
- Accessories (Sticky Notes Set)
- Markers (Desk Highlighter)
- Pencils (Pencil Set)
- Storage (Desk Organizer)

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **React Router v6**: Navigation
- **CSS3**: Styling with responsive design

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Styling

The application uses a custom CSS system with CSS variables for easy theme customization:

- Primary Color: #2c3e50
- Secondary Color: #3498db
- Accent Color: #e74c3c
- Success Color: #27ae60

## Future Enhancements

- Product ratings and reviews
- Shopping cart functionality
- User authentication
- Product image upload
- Backend integration with API
- Payment gateway integration

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on the GitHub repository.
