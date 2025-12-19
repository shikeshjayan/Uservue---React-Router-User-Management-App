import React from "react";

const Contact = () => {
  return (
    // Full-screen flex container to center content vertically and horizontally
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      
      {/* Page title */}
      <h2 className="text-2xl md:text-7xl text-indigo-950">Contact Us</h2>
      
      {/* Contact information */}
      <p className="text-1xl md:text-3xl text-indigo-950 py-6 px-8">
        📧 Email: support@uservue.com
      </p>
      <p className="text-1xl md:text-3xl text-indigo-950 py-6 px-8">
        📱 Phone: +1 (555) 123-4567
      </p>
      <p className="text-1xl md:text-3xl text-indigo-950 py-6 px-8">
        🌐 Website: uservue.com
      </p>
      <p className="text-1xl md:text-3xl text-indigo-950 py-6 px-8">
        📍 Location: Tech City, CA
      </p>
      
      {/* Placeholder for additional elements like a contact form or map */}
      <div>
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default Contact;
