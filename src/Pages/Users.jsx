import React, { useEffect, useState } from "react";
// Importing static users data
import usersData from "../data/users";
// Import Link from React Router for navigation
import { Link } from "react-router-dom";

const Users = () => {
  // State to hold the list of users
  const [userData, setUserData] = useState([]);

  // Load users data when the component mounts
  useEffect(() => {
    setUserData(usersData);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page title */}
      <h1 className="text-7xl font-semibold mb-6 text-center text-indigo-950">
        Users
      </h1>

      {/* Grid container for user cards */}
      <ul
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {/* Map through user data and render each user */}
        {userData.map((user) => (
          <li
            key={user.id} // Unique key for each list item
            className="
              border
              p-4
              rounded-md
              shadow-sm
              bg-indigo-950
              text-neutral-100
              h-40
              w-full
              flex
              flex-col
              justify-center
              items-center
            "
          >
            {/* User name with link to user details page */}
            <p className="font-medium text-xl hover:underline">
              <Link to={`/userDetails/${user.id}`}>{user.name}</Link>
            </p>

            {/* User email */}
            <p className="text-gray-400 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
