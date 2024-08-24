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
  const screenWidth = window.innerWidth;
  const handleWidth = (screenWidth) => {
    if (screenWidth > 1000) {
      // toggle the className
    }
  };

  useEffect(() => {
    handleWidth();
  }, [screenWidth]);

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change 50 to the scroll position you prefer
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-semi-transparent background-blur sticky left-0 top-0 z-10 flex w-full justify-center overflow-hidden bg-opacity-70 p-0 text-white shadow-lg backdrop-blur-md ${
        scrolling ? " " : ""
      }`}
    >
      <div className="container flex w-4/5 flex-row items-center justify-between py-2">
        <h1 className="z-10 cursor-pointer text-2xl text-gray-50">
          <Link to={"/"}>
            {" "}
            <img src={Moaz} className="z-100 h-11 w-12" />
          </Link>
        </h1>
        <ul className="relative flex flex-row gap-12">
          <li className="different cursor-pointer text-xl">
            <Link to={"/"} className="flex flex-row items-center gap-1">
              <House size={19} />
              Home
            </Link>
          </li>
          <li className="different cursor-pointer text-xl">
            <Link to={"/about"} className="flex flex-row items-center gap-1">
              <User size={19} /> About
            </Link>
          </li>
          <li className="different cursor-pointer text-xl">
            <Link to={"/projects"} className="flex flex-row items-center gap-1">
              <FolderKanban size={19} /> Projects
            </Link>
          </li>
          <li className="different cursor-pointer text-xl">
            <Link to={"/resume"} className="flex flex-row items-center gap-1">
              <FileText size={19} /> Resume
            </Link>
          </li>
          <li className="different cursor-pointer text-xl">
            <Link
              to={"/contactUs"}
              className="flex flex-row items-center gap-1"
            >
              <Send size={19} /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={() => console.log("yes")} className="">
        <Menu color="#623686" size={30} className="" />
      </button>
    </nav>
  );
}
// className={` ${screenWidth > 1500 ? "hidden" : " "}`}
