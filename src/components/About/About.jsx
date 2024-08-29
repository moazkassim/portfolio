import React from "react";
import "./about.css";
import { Pointer } from "lucide-react";
import aboutImage from "../../assets/about.png";
import Skill from "../Skill";

export default function About() {
  const imagesArr = [
    "public/technicalTools/c.png",
    "public/technicalTools/c++.png",
    "public/technicalTools/css.png",
    "public/technicalTools/dog.png",
    "public/technicalTools/html.png",
    "public/technicalTools/java.png",
    "public/technicalTools/js.png",
    "public/technicalTools/office.png",
    "public/technicalTools/pixi.png",
    "public/technicalTools/sql.png",
    "public/technicalTools/react.png",
    "public/technicalTools/sass.png",
    "public/technicalTools/tailwind.png",
    "public/technicalTools/three.png",
  ];
  const toolsArr = [
    "public/tools/anaconda.png",
    "public/tools/arduino.png",
    "public/tools/atom.png",
    "public/tools/insomnia.png",
    "public/tools/jupyter.png",
    "public/tools/postman.png",
    "public/tools/visual-studio.png",
    "public/tools/visual-studio-code.png",
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="about my-28 flex w-4/5 flex-row items-center justify-between max-xl:flex-col max-md:m-10 max-md:p-5">
        <div className="about-data m-0 flex flex-col p-0 max-sm:w-[400px]">
          <h1 className="mb-11 text-center text-4xl text-white">
            Know Who <span className="font-semibold text-[#c770f0]">I'M</span>
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-xl leading-8 text-white">
              Hi Everyone, I am{" "}
              <span className="font-semibold text-[#c770f0]">Moaz Kassim</span>{" "}
              from{" "}
              <span className="font-semibold text-[#c770f0]">
                {" "}
                Tanta, Egypt.
              </span>
              I am currently a fresh graduate Computer Engineering and Automatic
              Control ( HIET-KFS ), and a software developer
            </p>
            <p className="mt-7 text-xl text-white">
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="ml-10">
              <li className="flex flex-row items-center gap-1 text-lg text-white">
                {" "}
                <Pointer size={20} />
                Playing Games
              </li>
              <li className="flex flex-row items-center gap-1 text-lg text-white">
                {" "}
                <Pointer size={20} />
                Writing Tech Blogs
              </li>
              <li className="flex flex-row items-center gap-1 text-lg text-white">
                {" "}
                <Pointer size={20} />
                Travelling
              </li>
            </ul>
          </div>
          <div className="about-quote">
            <p className="mt-5 text-center text-xl text-[#9B7EAC]">
              &quot;Strive to build things that make a difference!&quot; Moaz
            </p>
          </div>
        </div>
        <div className="about-img flex w-full items-center max-xl:mt-24 max-xl:w-[500px]">
          <img src={aboutImage} />
        </div>
      </div>
      <div className="my-24 flex flex-col items-center gap-5">
        <h1 className="mb-10 text-4xl">
          <span className="text-white">Professional</span> Skillset
        </h1>
        <div className="grid grid-cols-4 justify-center gap-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {imagesArr.map((img, index) => {
            return <Skill key={index} src={img} />;
          })}
        </div>
      </div>
      <div className="my-24 flex w-4/5 flex-col flex-wrap items-center gap-1">
        <h1 className="mb-10 text-4xl font-semibold">
          Tools
          <span className="text-white"> I use</span>
        </h1>
        <div className="grid grid-cols-4 justify-center gap-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {toolsArr.map((img, index) => {
            return <Skill key={index} src={img} />;
          })}
        </div>
      </div>
    </section>
  );
}
