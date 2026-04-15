import React from 'react';
import { Link } from "react-router";

const NotFoundPage = () => {
    return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl mt-2 text-gray-700">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-6">
        The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
    );
};

export default NotFoundPage;