import React from "react";
// Import Link from React Router for client-side navigation
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Full-screen container with flexbox centering and background color
    <div className="flex flex-col justify-center items-center w-full h-screen bg-neutral-100">
      
      {/* Main title */}
      <h2 className="text-3xl md:text-7xl text-indigo-950">
        User Management App
      </h2>

      {/* Subtitle/description */}
      <h4 className="text-1xl md:text-4xl text-indigo-950 py-6">
        Explore users, view details, and master React Routing
      </h4>

      {/* Navigation buttons */}
      <div className="flex gap-8 mt-10">
        {/* Link to About page */}
        <Link to="/about">
          <button className="w-40 h-10 border bg-indigo-950 hover:bg-indigo-900 text-neutral-100 cursor-pointer">
            Learn more
          </button>
        </Link>

        {/* Link to Users page */}
        <Link to="./users">
          <button className="w-40 h-10 border bg-indigo-950 hover:bg-indigo-900 text-neutral-100 cursor-pointer">
            View Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
