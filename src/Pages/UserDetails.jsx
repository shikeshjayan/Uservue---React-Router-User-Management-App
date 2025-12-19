import React, { useState, useEffect } from "react";
// Import Link for navigation and useParams to get dynamic route parameters
import { Link, useParams } from "react-router-dom";
// Import static users data
import usersData from "../data/users";

const UserDetails = () => {
  // Get the userId from the URL parameters
  const { userId } = useParams();

  // State to store the user details
  const [user, setUser] = useState(null);

  // Find the user in the static data when the component mounts or when userId changes
  useEffect(() => {
    const item = usersData.find((userItem) => userItem.id === parseInt(userId));
    setUser(item);
  }, [userId]); // Re-run if userId changes

  // Handle case where user is not found
  if (!user) {
    return <div className="p-6 text-center">User not found</div>;
  }

  return (
    <div className="detail-page w-screen h-screen flex justify-center items-center">
      {/* Card container for user details */}
      <div className="max-w-md mx-auto p-6 border rounded-md shadow-lg flex flex-col justify-center items-center gap-8 w-full h-fit bg-indigo-950 text-neutral-100">
        
        {/* User profile image */}
        <img src="/public/User.png" alt="User Avatar" />

        {/* User name */}
        <h1 className="text-2xl font-semibold mb-4">{user.name}</h1>

        {/* User details */}
        <p className="text-neutral-100 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-neutral-100 mb-2">
          <strong>Contact:</strong> {user.contact}
        </p>
        <p className="text-neutral-100 mb-2">
          <strong>Address:</strong> {user.address}
        </p>
        <p className="text-neutral-100 mb-2">
          <strong>DoB:</strong> {user.dateOfBirth}
        </p>
        <p className="text-neutral-100 mb-2">
          <strong>Gender:</strong> {user.gender}
        </p>

        {/* Back button to navigate to Users page */}
        <Link to="/users">
          <button className="w-40 h-10 border rounded-md bg-indigo-950 text-neutral-100 cursor-pointer hover:bg-neutral-100 hover:text-indigo-950">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
