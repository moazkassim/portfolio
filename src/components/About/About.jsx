import React from "react";
import "./about.css";
import { Pointer } from "lucide-react";
import aboutImage from "../../assets/about.png";
import Skill from "../Skill";

export default function About() {
  const imagesArr = [
    "../../../data/c.png",
    "../../../data/c++.png",
    "../../../data/css.png",
    "../../../data/dog.png",
    "../../../data/html.png",
    "../../../data/java.png",
    "../../../data/js.png",
    "../../../data/office.png",
    "../../../data/pixi.png",
    "../../../data/sql.png",
    "../../../data/react.png",
    "../../../data/sass.png",
    "../../../data/tailwind.png",
    "../../../data/three.png",
  ];
  const toolsArr = [
    "../../../data/tools/anaconda.png",
    "../../../data/tools/arduino.png",
    "../../../data/tools/atom.png",
    "../../../data/tools/insomnia.png",
    "../../../data/tools/jupyter.png",
    "../../../data/tools/postman.png",
    "../../../data/tools/visual-studio.png",
    "../../../data/tools/visual-studio-code.png",
  ];

  return (
    <section className="flex justify-center flex-col items-center">
      <div className="about flex flex-row justify-between items-center w-4/5 max-md:m-10 max-md:p-5    my-28 max-xl:flex-col ">
        <div className="about-data  flex flex-col p-0 m-0 max-sm:w-[400px] ">
          <h1 className=" text-center text-4xl text-white mb-11">
            Know Who <span className="text-[#c770f0] font-semibold">I'M</span>
          </h1>
          <div className=" flex flex-col gap-5">
            <p className="text-white text-xl leading-8">
              Hi Everyone, I am{" "}
              <span className="text-[#c770f0] font-semibold">Moaz Kassim</span>{" "}
              from{" "}
              <span className="text-[#c770f0] font-semibold">
                {" "}
                Tanta, Egypt.
              </span>
              I am currently a fresh graduate Computer Engineering and Automatic
              Control ( HIET-KFS ), and a software developer
            </p>
            <p className="text-white text-xl mt-7">
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className=" ml-10">
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
            <p className="text-[#9B7EAC] text-xl text-center mt-5">
              &quot;Strive to build things that make a difference!&quot; Moaz
            </p>
          </div>
        </div>
        <div className="about-img w-full max-xl:w-[500px] max-xl:mt-24 flex items-center ">
          <img src={aboutImage} />
        </div>
      </div>
      <div className=" flex flex-col gap-5 items-center my-24  ">
        <h1 className="text-4xl mb-10">
          <span className="text-white ">Professional</span> Skillset
        </h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 gap-8 justify-center ">
          {imagesArr.map((img, index) => {
            return <Skill key={index} src={img} />;
          })}
        </div>
      </div>
      <div className=" flex flex-col flex-wrap gap-1 items-center my-24  w-4/5">
        <h1 className="text-4xl mb-10 font-semibold">
          Tools
          <span className="text-white "> I use</span>
        </h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 gap-8 justify-center">
          {toolsArr.map((img, index) => {
            return <Skill key={index} src={img} />;
          })}
        </div>
      </div>
    </section>
  );
}
