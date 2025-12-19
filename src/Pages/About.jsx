import React from "react";
// Import Link for client-side navigation back to Home
import { Link } from "react-router-dom";

const About = () => {
  return (
    // Full-screen flex container with vertical stacking, centered content, and padding
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center px-12">
      
      {/* Page title */}
      <h2 className="text-2xl md:text-7xl text-indigo-950">
        About User Management App
      </h2>

      {/* Description paragraphs */}
      <p className="text-1xl md:text-3xl text-indigo-950 py-6">
        User Management App is a simple React project that showcases how to
        build a multi-page single-page application using React Router.
      </p>
      <p className="text-1xl md:text-2xl text-indigo-950 py-6">
        The app includes Home, About, Users, and User Detail pages, allowing you
        to navigate between routes, use URL parameters for user profiles, and
        experience a persistent navigation bar.
      </p>
      <p className="text-1xl md:text-2xl text-indigo-950 py-6">
        This project was created to practice client-side routing, basic UI
        layout, and working with mock user data in a clean, component-based
        React structure.
      </p>

      {/* Navigation button back to Home */}
      <Link to="/">
        <button className="px-6 w-50 h-10 border hover:bg-indigo-950 hover:text-neutral-100">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
};

export default About;
