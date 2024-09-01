import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { Menu } from "lucide-react";
import { FileText } from "lucide-react";
import { Send } from "lucide-react";
import Moaz from "../../assets/moaz.png";

export default function Navbar() {
  return (
    <nav className="bg-semi-transparent background-blur sticky left-0 top-0 z-10 w-full bg-opacity-70 text-white shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Moaz} className="h-8" alt="moaz Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Moaz Kassim
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col gap-8 rounded-lg font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li className="different text-md cursor-pointer">
              <Link to={"/"} className="flex flex-row items-center gap-1">
                <House size={18} />
                Home
              </Link>
            </li>
            <li className="different text-md cursor-pointer">
              <Link to={"/about"} className="flex flex-row items-center gap-1">
                <User size={18} /> About
              </Link>
            </li>
            <li className="different text-md cursor-pointer">
              <Link
                to={"/projects"}
                className="flex flex-row items-center gap-1"
              >
                <FolderKanban size={18} /> Projects
              </Link>
            </li>
            <li className="different text-md cursor-pointer">
              <Link to={"/resume"} className="flex flex-row items-center gap-1">
                <FileText size={18} /> Resume
              </Link>
            </li>
            <li className="different text-md cursor-pointer">
              <Link
                to={"/contactUs"}
                className="flex flex-row items-center gap-1"
              >
                <Send size={18} /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// classNameName={` ${screenWidth > 1500 ? "hidden" : " "}`}
