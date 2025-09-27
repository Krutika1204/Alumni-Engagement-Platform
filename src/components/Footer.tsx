import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">University Alumni</h3>
          <p className="text-sm mb-4">
            Connecting alumni, students, and institutions for a brighter future.
          </p>
          <p className="text-sm">
            123 Alumni Street, City, State, 12345<br />
            Email: info@university.edu<br />
            Phone: (123) 456-7890
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-400">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-400">Events</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-400">Mentorship</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-400">Donations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400"><Facebook size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400"><Twitter size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400"><Instagram size={24} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Stay up-to-date with our latest news and events.</p>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white mb-2"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; {currentYear} University Alumni. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
