
# ⚡ MODERN STYLE — Premium E-Commerce Frontend

A high-end, responsive, and editorial-inspired clothing e-commerce web application built entirely on the frontend using **React**, **Tailwind CSS**, and **daisyUI**. 

This project features a bold, street-style aesthetic utilizing dark accents, italicized heavyweight typography, and soft industrial micro-interactions to deliver a premium user experience.

---

## 🚀 Key Features

* **Responsive Editorial Layouts:** Fluid design that transitions seamlessly from extra-large desktop monitors down to mobile viewports.
* **Animated Product Grids:** Features modern `aspect-[4/5]` product cards with interactive hover actions (Quick Add, View Details, Favourites).
* **Interactive Sidebar Filters:** Advanced shopping interface with categories and sorting built dynamically. Responsive pill-tabs on mobile.
* **Client-Side Routing:** Fast, smooth navigation across pages using `react-router-dom` with persistent global components (Navbar & Footer).
* **Dynamic UX Components:** Includes functional frontend templates for a Cart page (with live subtotal and shipping calculations), Wishlist page, functional Contact form, Split-screen Login layout, and an intensive About Us page.

---

## 🛠️ Tech Stack & Frameworks

* **Core Library:** React 18+
* **Build Tool:** Vite (Ultra-fast Hot Module Replacement)
* **Styling Engine:** Tailwind CSS v3+
* **UI Component Library:** daisyUI (Utility-first Tailwind components)
* **Routing Architecture:** React Router DOM v6

---

## 📂 Project Architecture

```text
src/
├── assets/             # Global media assets & brand images
├── Components/         # Global layout assets
│   ├── BestSeller.jsx  # High-end home section
│   ├── Footer.jsx      # Multi-column informational footer
│   ├── MainPage.jsx    # Multi-column home page
│   ├── Navbar.jsx      # High-end header navigation
│   └── Offer.jsx       #  High-end home section
├── Pages/              # Complete page components
│   ├── Home.jsx        # Landing page with Promos & Best Sellers
│   ├── Products.jsx    # Shop interface with filtering & sorting
│   ├── AboutUs.jsx     # Brand story, core principles & aesthetics
│   ├── Contact.jsx     # Split-screen inquiry form & social grid
│   ├── LoginPage.jsx   # Split-screen authentication screen
│   ├── CartPage.jsx    # Live calculated checkout basket
│   └── Favourites.jsx  # Curated user wishlist
├── App.jsx             # Route hub and core wrapper
├── index.css           # Custom font layer & core Tailwind directives
└── main.jsx            # React root mount configuration
📦 Local Installation & Setup
Follow these steps to spin up the project in your local development environment:
```

1. Clone the repository
Bash
git clone [https://github.com/yourusername/modern-style-ecommerce.git](https://github.com/yourusername/modern-style-ecommerce.git)
cd modern-style-ecommerce
2. Install dependencies
Bash
npm install
3. Install required styling plugins (if not bundled)
Ensure you have the proper Tailwind configurations for daisyUI inside your tailwind.config.js:

JavaScript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Enforces your custom color palette structure
  },
}
4. Run Development Server
Bash
npm run dev
Open your browser and navigate to http://localhost:5173 to see your storefront running live.

🎨 UI & UX Specifications
Primary Accent: #FF3D00 (or your defined brand color configuration within your tailwind layout)

Borders & Radii: Large, soft organic borders (rounded-[2.5rem], rounded-[3rem]) to offset hard layouts.

Typography: Editorial font scaling ranging from text-xs up to massive headline treatments like text-7xl font-black uppercase italic tracking-tighter.

🔮 Roadmap / Next Steps
To upgrade this frontend layout into a production-ready enterprise app, consider integrating the following:

Global State Management: Implement React Context API or Redux Toolkit to sync the Best Seller grid with the CartPage and Favourites instantly.

State Persistence: Integrate localStorage to save cart and wishlist state across browser sessions.

Authentication Backend: Connect the LoginPage to Firebase Auth or an alternative JWT engine.

Checkout Integration: Wire the final payment actions up to a live Stripe Checkout API instance.

📄 License
This project is open-source and available under the MIT License. Developed with precision by Anuj Hooda.
