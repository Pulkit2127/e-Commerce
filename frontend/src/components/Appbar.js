import React, { useState } from "react";

const Appbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleSearchCollapse = () => {
    setIsSearchCollapsed(!isSearchCollapsed);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md shadow-[#ededed] sticky top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2">
          <div
            type="button"
            className={`md:hidden text-gray-500 hover:bg-gray-100 text-sm p-2.5 me-1 flex rounded-lg ${
              isSearchCollapsed
                ? "bg-white border-0"
                : "border border-gray-300 bg-gray-50  gap-2"
            }`}
          >
            <svg
              onClick={handleSearchCollapse}
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <div>
              <input
                type="text"
                id="search-navbar"
                className={`block text-gray-900 bg-transparent outline-none duration-500 ${
                  isSearchCollapsed ? "w-0" : "w-40"
                }`}
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="flex md:order-3 xl:gap-10 items-center md:text-black text-gray-500 xl:ml-10">
            <div className="flex gap-2 items-center cursor-pointer md:hover:text-blue-500 hover:bg-gray-100 py-2 md:px-4 px-2 rounded-md">
              <svg
                width="20px"
                viewBox="0 0 24 24"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="none"
                strokeWidth={2.5}
              >
                <circle class="cls-1" cx="12" cy="7.25" r="5.73" />
                <path
                  class="cls-1"
                  d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
                />
              </svg>
              <span className="text-sm font-semibold hidden md:block">
                Account
              </span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer md:hover:text-blue-500 hover:bg-gray-100 py-2 md:px-4 px-2 rounded-md">
              <svg
                width="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-semibold hidden md:block">
                Cart
              </span>
            </div>
          </div>
          <button
            onClick={handleNavCollapse}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={!isNavCollapsed}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between overflow-hidden md:overflow-visible ${
            isNavCollapsed ? "h-0 sm:h-fit" : "flex h-52 z-0"
          } w-full flex md:w-auto md:order-1 duration-500`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full text-center">
            <li className="relative">
              <a
                href="#categories-section"
                className=" py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex gap-2 w-full justify-center"
                aria-current="page"
              >
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a
                href="#deals-section"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Deals
              </a>
            </li>
            <li>
              <a
                href="#brands-section"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#footer-section"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
