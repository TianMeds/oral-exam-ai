'use client'
import React, { useState } from 'react';
import OralAI from '../../public/OralAI.svg'
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white relative bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/382221df1393df28a7db9463555b03b19e15d44a/OralAI.svg" width={120} height={120}/>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-100 transition hover:text-gray-500/75" href="/dashboard"> Dashboard</a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-500/75" href="/question"> Question</a>
              </li>

              <li>
                <a className="text-gray-100 transition hover:text-gray-500/75" href="/upgrade"> Upgrade </a>
              </li>

            </ul>
          </nav>

          <div className="flex items-center gap-4">

            <UserButton/>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white">
          <button
            className="absolute top-4 right-4 p-2.5"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="space-y-6 text-center">
            <a className="block text-2xl" href="/dashboard">Dashboard</a>
            <a className="block text-2xl" href="/question">Question</a>
            <a className="block text-2xl" href="/upgrade">Upgrade</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
