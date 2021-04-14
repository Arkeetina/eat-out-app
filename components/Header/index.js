import React, { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="bg-lime-300 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0  text-lg font-semibold uppercase text-white flex items-center">
              <span className="text-shadow-md">Eat Out App</span>
            </div>
          </div>
          {/* <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex-shrink-0 text-lg  uppercase text-white flex items-center">
              <span className="text-shadow-md font-semibold">Login</span>
            </div>
          </div> */}
        </div>
      </div>

      {isExpanded && (
        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-grey-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
