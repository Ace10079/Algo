"use client";
import React, { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";

function Buttons() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = () => {
      setIsOpen(false);
    };
  return (
    <div>
       <div className="flex justify-between p-4">
        <div className="flex gap-2">
          <div className="ml-2">
            <p>Name</p>
            <div className="relative inline-block text-left mt-1" >
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={toggleDropdown}
              >
                Please Select Broker
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleOptionClick}
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleOptionClick}
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleOptionClick}
                    >
                      License
                    </a>
                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={handleOptionClick}
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>



          <div>
            <p>Broker</p>
            <button className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400 p-2 rounded-lg text-white">Add Broker</button>
            <LuRefreshCw className="absolute top-24 left-80 h-5 w-5 text-[#71BF51] "/>
          </div>
        </div>
        <div>
          <button className="bg-[#922016] p-2 text-white rounded-lg mt-4">Open one Cliq Trade Window</button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
