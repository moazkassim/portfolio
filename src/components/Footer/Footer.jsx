import React from "react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

export default function Footer() {
  //
  return (
    <footer className="flex w-full justify-center bg-black">
      <div className="container flex w-4/5 flex-col items-center justify-between py-4 max-lg:h-[150px] lg:flex-row">
        <div className="flex flex-1">
          <p className="text-white">Designed & Developed by Moaz Kassim</p>
        </div>
        <div className="flex flex-1 justify-center">
          <p className="text-white">Copyright © 2024 MK</p>
        </div>
        <ul className="flex flex-1 flex-row justify-end gap-6">
          <li className="cursor-pointer">
            <a
              href="https://github.com/moazkassim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="rounded-full" size={20} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.instagram.com/moazkassim10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="rounded-full" size={20} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="www.linkedin.com/in/moaz-kassim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="rounded-full" size={20} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.instagram.com/moazkassim10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="rounded-full" size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
