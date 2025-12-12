# WhatBytes Product Listing App

A modern e-commerce product listing application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**Live URL:** [Deploy to Vercel and add URL here]

## 📋 Features

### ✅ Implemented Features

- **Home Page (/)** - Product Listing
  - Responsive product grid (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Product cards with image placeholders, title, price, ratings, and "Add to Cart" button
  - Sidebar filters for category and price range
  - Header with logo, search bar, and cart icon with badge
  - Footer with copyright and social media icons

- **Product Detail Page (/product/[id])**
  - Dynamic routing for individual products
  - Product image, title, price, description, and category
  - Quantity selector with increment/decrement controls
  - "Add to Cart" functionality
  - Reviews section (placeholder)

- **Cart Page (/cart)**
  - List of all added products
  - Quantity update controls (increase/decrease/remove)
  - Remove item functionality
  - Price summary with subtotal, shipping, tax, and total
  - Empty cart state with call-to-action
  - Persistent cart using localStorage

### 🔍 Filtering & Search

- **Category Filter**: Filter products by All, Electronics, Clothing, or Home
- **Price Range Filter**: Slider to filter products by price range (0-1000)
- **Search**: Search products by title, description, or category
- **URL-based Filters**: All filters are reflected in URL query parameters
  - Example: `/?category=electronics&minPrice=100&maxPrice=500&search=phone`

### 🛒 Cart Management

- **React Context API** for state management
- **localStorage** for cart persistence across sessions
- Real-time cart count badge in header
- Add, remove, and update quantities
- Automatic total price calculation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **State Management**: React Context API
- **Persistence**: localStorage

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/rachit0203/whatbytes-product-listing-app.git

# Navigate to project directory
cd whatbytes-product-listing-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🏗️ Project Structure

```
whatbytes-product-listing-app/
├── app/
│   ├── cart/
│   │   └── page.tsx           # Cart page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx       # Product detail page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── FilterSidebar.tsx      # Category & price filters
│   ├── Footer.tsx             # Footer component
│   ├── Header.tsx             # Header with search & cart
│   └── ProductCard.tsx        # Product card component
├── context/
│   └── CartContext.tsx        # Cart state management
├── lib/
│   └── data.ts                # Mock product data
└── public/
    └── images/                # Product images
```

## 🎯 Features Breakdown

### Filtering Logic
- Client-side filtering for instant results
- Combines category, price, and search filters
- Conditional rendering for "no results" state
- Reset filters functionality

### URL-based Filtering
- Query parameters for shareable URLs
- Syncs URL with filter state
- Maintains search state across navigation

### Cart Functionality
- Add items with quantity selection
- Update quantities from cart page
- Remove individual items or clear cart
- Persistent across browser sessions

## 📱 Responsive Design

- **Desktop** (lg): 3-column grid, full sidebar
- **Tablet** (md): 2-column grid, collapsible sidebar
- **Mobile** (sm): 1-column grid, stacked layout

## 🚢 Deployment

This project is ready to be deployed on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel Dashboard:
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

## 📝 Git Commit History

This project follows best practices with incremental, feature-based commits:

1. Initial Next.js setup with TypeScript and Tailwind CSS
2. Add product data, Header, and Footer components
3. Implement product listing page with responsive grid and product cards
4. Add sidebar filters with category and price range filtering
5. Add search functionality and URL-based filtering
6. Add cart context with localStorage persistence
7. Add product detail page with quantity selector
8. Add cart page with quantity controls and price summary
9. Update README and final polish

## 🎨 Design Attention to Detail

- Matched the provided design mockup
- Blue color scheme (#0A3D7A for header, #1976D2 for buttons)
- Proper spacing and typography
- Hover states and transitions
- Rating stars with half-star support
- Cart badge with item count

## 📄 License

MIT License - feel free to use this project for learning or portfolio purposes.

## 👤 Author

**Rachit**
- GitHub: [@rachit0203](https://github.com/rachit0203)

---

**Note**: After deploying to Vercel, update the "Live Demo" section with your deployment URL.

