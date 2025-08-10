import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer select-none">
          <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
            Bookshop
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold tracking-wide">
          {['Home', 'Books', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group px-2 py-1 hover:text-red-600 transition-colors duration-300"
            >
              {item}
              <span
                className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-300"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
