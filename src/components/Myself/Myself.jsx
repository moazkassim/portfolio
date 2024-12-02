import React from "react";
import avatar from "../../assets/avatar.svg";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

export default function Myself() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-self flex w-4/5 flex-col items-center justify-between lg:flex-row">
        <div className="myself-info mb-16 flex flex-col justify-start gap-8">
          <h1 className="mb-4 text-center text-4xl text-white">
            LET ME
            <span className="text-[#c770f0;]"> INTRODUCE</span> MYSELF
          </h1>
          <p className="text-xl text-white">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p className="text-xl text-white">
            I am fluent in classics like
            <span className="mx-1 font-bold italic text-[#c770f0;]">
              C++, Javascript and c#.
            </span>
          </p>
          <p className="text-xl text-white">
            My field of Interest's are building new
            <span className="mx-1 font-bold italic text-[#c770f0;]">
              Web Technologies and Products
            </span>{" "}
            and also in areas
            <br /> related to{" "}
            <span className="mx-1 font-bold italic text-[#c770f0;]">
              Artificial Intelligence.
            </span>
          </p>
          <p className="text-xl text-white">
            Whenever possible, I also apply my passion for developing products
            with{" "}
            <span className="mx-1 font-bold italic text-[#c770f0;]">
              {" "}
              Modern <br /> Javascript Library and Frameworks{" "}
              <span className="font-normal text-white">like</span> React.js and
              Angular
            </span>
          </p>
        </div>
        <div className="myself-img">
          <img src={avatar} className=""></img>
        </div>
      </div>

      <div className="find-me my-16 flex w-4/5 flex-col items-center gap-4">
        <h2 className="text-4xl text-white">FIND ME ON</h2>
        <p className="text-white">
          Feel free to <span className="text-[#c770f0;]">connect</span> with me
        </p>
        <ul className="mt-5 flex flex-row gap-6">
          <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white hover:border-2 hover:border-sky-500">
            <a
              href="https://github.com/moazkassim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white hover:border-2 hover:border-sky-500">
            {" "}
            <a
              href="https://github.com/moazkassim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </li>
          <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white hover:border-2 hover:border-sky-500">
            <a
              href="www.linkedin.com/in/moaz-kassim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white hover:border-2 hover:border-sky-500">
            <a
              href="https://www.instagram.com/moazkassim10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
