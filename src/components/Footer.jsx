import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-sky-200">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sky-700 text-sm">
        <p>© {new Date().getFullYear()} Bookshop — All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-sky-900 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-sky-900 transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-sky-900 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
