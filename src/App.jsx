// Import necessary components from React Router for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

// Import global CSS
import "../src/App.css";

// Import page components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import UserDetails from "./Pages/UserDetails";

// Main App component
export default function App() {
  return (
    // BrowserRouter enables routing for the app
    <BrowserRouter>
      {/* Navbar is displayed on every page */}
      <Navbar />
      
      {/* Main content area with padding on top */}
      <div className="pt-15">
        {/* Define routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Users page (list of users) */}
          <Route path="/users" element={<Users />} />

          {/* Dynamic route for a specific user (currently reusing Users component) */}
          <Route path="/users/:Id" element={<Users />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* UserDetails page */}
          <Route path="/userDetails" element={<UserDetails />} />

          {/* Dynamic route for specific user details */}
          <Route path="/userDetails/:userId" element={<UserDetails />} />
        </Routes>
      </div>

      {/* Footer is displayed on every page */}
      <Footer />
    </BrowserRouter>
  );
}
