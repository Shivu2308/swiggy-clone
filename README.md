# 🍔 Swiggy Clone - Professional Food Delivery App

A high-performance, fully responsive food ordering web application built with **React.js**, **Tailwind CSS**, **Redux Toolkit**, and **Firebase**. This project replicates the core Swiggy experience, focusing on complex data mapping, state management, and a modern UI.

## 🌐 Live Demo
Check out the live project here: **https://swiggy-clone-seven-mu.vercel.app/**

## 🚀 Key Features

- **Smart Search & Discovery:** Implemented custom search logic using the `.find()` method. Users can search for a dish and instantly find all restaurants serving that specific item.
- **Global State Management:** Powered by **Redux Toolkit**. I created multiple slices (`cartSlice`, `authSlice`, `filterSlice`, etc.) to manage global app state efficiently.
- **Firebase Authentication:** Secure email-based login and signup flow integrated with Firebase.
- **Shimmer UI:** Custom-built shimmer effects for loading states to provide a premium and smooth User Experience (UX).
- **Fully Responsive Design:** Crafted with a mobile-first approach using Tailwind CSS, ensuring the app looks great on **Mobiles, Tablets, and Desktops**.
- **Custom Hooks Architecture:** 100% separation of logic and UI. Used custom hooks like `useSearch`, `useRestaurantData`, and `useScroller` for better code readability.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS 
- **State Management:** Redux Toolkit
- **Backend/Auth:** Firebase
- **Data Handling:** Structured Mock Data (JSON)

## 📂 Project Structure


The project follows a modular and scalable architecture:

- **`src/hooks/`**: Contains all business logic (e.g., `useOnYourMind`, `useSearch`, `useRestaurantManuData`).
- **`src/Utils/`**: Contains the **Redux Store** and all slices for state management.
- **`src/components/`**: Feature-based UI components (Home, Menu, Search).
- **`src/pages/`**: Main application views (Home, Cart, Search, SignIn).
- **`src/allMockData/`**: Local database files managing restaurant and dish information.

### 📂 Folder Structure

```text
swiggy-clone/
├── src/
│   ├── assets/              # Icons, SVG, and Image assets
│   ├── components/          # Reusable UI components
│   │   ├── HomeComponents/  # Hero section, Carousels
│   │   ├── RastaurantManu/  # Menu details, categories
│   │   └── SearchPage/      # Search results components
│   ├── config/              # Firebase authentication config
│   ├── context/             # React Context API
│   ├── hooks/               # Custom Logic (Logic-UI separation)
│   │   ├── HomePageHooks/   
│   │   └── SearchPageHooks/ 
│   ├── pages/               # Main Page Components (Routes)
│   ├── Utils/               # Redux State & Mock Data
│   │   ├── store.js         # Central Redux Store
│   │   └── slices/          # Redux Slices (Cart, Auth, etc.)
│   ├── App.jsx              # Main Router
│   └── main.jsx             # Entry point
└── public/                  # Static assets
    └──  allMockData/     # JSON files for testing

```

## 🔍 Searchable Items (Mock Data)
The search engine is optimized for:
`Cake`, `Roll`, `Ice Cream`, `Samosa`, `Gulab Jamun`, `Cold Coffee`, `Shake`, `Aloo Tikka`, `Masala Dosa`, `Idli`, `Vada`, `Uttapam`, `Thali`, `Butter Chicken`, `Dal Makhani`, `Paneer Tikka`, `Burger`, `Pizza`, `Momos`, `Chowmine`, `Manchurian`.

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```
   bash

   git clone [https://github.com/your-username/swiggy-clone.git](https://github.com/your-username/swiggy-clone.git)

   ```


   ## 🚀 Getting Started

To run this project locally, use the following command:

```
bash
npm run dev
```
---


---
**Developed with ❤️ by Shivam Rajpoot**