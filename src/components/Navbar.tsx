import React from 'react';
// import { FiSettings, FiUser, FiCalendar, FiUsers, FiHeart } from 'react-icons/fi'; // Removed as we will use Lucide icons

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/vite.svg" alt="University Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold text-gray-800">University</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Alumni</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Students</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Events</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Mentorship</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Donations</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
      </div>
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2">Login</button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">Register</button>
      </div>
      {/* Mobile menu button will go here later */}
    </nav>
  );
};

export default Navbar;
