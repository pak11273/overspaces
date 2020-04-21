import React, { useState } from "react"

import { FaBell } from "react-icons/fa"
import Link from "next/link"
import LogoWhite from "../public/assets/images/logo_white.png"
import { Settings } from "../components"

export function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="bg-indigo-500 sm:flex sm:justify-between ">
      <div>
        <div className="flex items-center justify-between h-16 ">
          <Link href="/">
            <div className="flex items-center">
              <img
                src={LogoWhite}
                alt="white logo"
                className="w-8 h-8 ml-8 cursor-pointer"
              />
              <h1 className="pl-2 text-2xl font-extrabold text-white cursor-pointer">
                OverSpaces
              </h1>
            </div>
          </Link>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-400 sm:hidden focus:text-white focus:outline-none hover:text-white"
          >
            <svg
              className="w-12 pr-4 bg-indigo-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                className={`${navOpen ? "hidden" : "block"}`}
                d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"
              />
              <path
                className={`${navOpen ? "block" : "hidden"}`}
                d="M16.043 11.667L22.609 5.1a2.484 2.484 0 000-3.502l-.875-.875a2.482 2.482 0 00-3.502 0L11.666 7.29 5.099.723a2.482 2.482 0 00-3.501 0l-.876.875a2.485 2.485 0 000 3.502l6.566 6.566-6.566 6.567a2.484 2.484 0 000 3.501l.876.875a2.482 2.482 0 003.501 0l6.567-6.565 6.566 6.565a2.484 2.484 0 003.502 0l.875-.875a2.482 2.482 0 000-3.501l-6.566-6.566z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <ul className={`sm:pr-8 ${navOpen ? "block" : "hidden"} sm:block`}>
          <div className="items-center py-4 font-semibold text-gray-100 sm:flex">
            <div className="p-2 py-1 hover:bg-green-500">
              <a href="/#" alt="navigation dropdown">
                Rentals
              </a>
            </div>
            <div className="p-2 py-1 mt-1 hover:bg-green-500 sm:mt-0 sm:ml-2">
              <a href="/#" alt="navigation dropdown">
                ForSale
              </a>
            </div>
            <FaBell className="hidden ml-3 cursor-pointer sm:block" />
            <Settings />
          </div>
          <div className="px-4 py-4 border-t border-gray-800 sm:hidden">
            <div className="flex items-center">
              <img
                className="object-cover w-8 h-8 border-2 border-gray-500 rounded-full"
                src="https://ya-webdesign.com/transparent450_/vector-avatars-employee-5.png"
                alt="account pic"
              />
              <span className="px-2 text-white">Jane Doe</span>
            </div>
            <div className="">
              <a
                href="/#"
                className="block mt-4 text-gray-400 hover:text-white"
              >
                Account Settings
              </a>
              <a
                href="/#"
                className="block mt-2 text-gray-400 hover:text-white"
              >
                Support
              </a>
              <a
                href="/#"
                className="block mt-2 text-gray-400 hover:text-white"
              >
                Sign Out
              </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}
