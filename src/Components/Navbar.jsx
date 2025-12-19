import { useState } from "react";
// NavLink allows active link styling for navigation
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State to manage mobile menu toggle
  const [open, setOpen] = useState(false);

  // Function to dynamically assign classes to NavLink based on active state
  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-blue-500 border-b-2 border-blue-500" // Active link styling
        : "text-heading hover:text-blue-500" // Inactive link styling
    }`;

  return (
    // Navbar container: fixed at top, full width, shadow, background color
    <nav className="fixed top-0 z-20 w-full border-b border-default bg-neutral-primary z-10 bg-white shadow-md text-1xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo linking to Home */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/public/Brand-Logo.svg" alt="Brand Logo" className="h-7" />
          <span className="text-xl font-semibold text-heading">Uservue</span>
        </NavLink>

        {/* Desktop Menu: hidden on mobile, flex layout on md+ screens */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/users" className={navLinkClass}>Users</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-heading hover:bg-neutral-secondary-soft md:hidden"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu: only visible if 'open' is true */}
      {open && (
        <div className="border-t border-default bg-neutral-primary md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {/* Each link closes the menu on click */}
            <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
            <NavLink to="/users" onClick={() => setOpen(false)} className={navLinkClass}>Users</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}
