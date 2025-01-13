import { Pointer } from "lucide-react";
import aboutImage from "../../assets/about.png";
import Skill from "../Skill";
import cImg from "../../../public/technicalTools/c.png";
import cPlus from "../../../public/technicalTools/c++.png";
import dog from "../../../public/technicalTools/dog.png";
import html from "../../../public/technicalTools/html.png";
import react from "../../../public/technicalTools/react.png";
import sql from "../../../public/technicalTools/sql.png";
import pixi from "../../../public/technicalTools/pixi.png";
import office from "../../../public/technicalTools/office.png";
import js from "../../../public/technicalTools/js.png";
import java from "../../../public/technicalTools/java.png";
import css from "../../../public/technicalTools/css.png";
import tailwind from "../../../public/technicalTools/tailwind.png";
import sass from "../../../public/technicalTools/sass.png";
import three from "../../../public/technicalTools/three.png";
import anaconda from "../../../public/tools/anaconda.png";
import arduino from "../../../public/tools/arduino.png";
import atom from "../../../public/tools/atom.png";
import jupyter from "../../../public/tools/jupyter.png";
import postman from "../../../public/tools/postman.png";
import visualStudioCode from "../../../public/tools/visual-studio-code.png";
import visualStudio from "../../../public/tools/visual-studio.png";
import nodejs from "../../../public/tools/nodejs.png";
import express from "../../../public/tools/express.png";
import mongo from "../../../public/tools/mongo.svg";

export default function About() {
  const imagesArr = [
    nodejs,
    express,
    mongo,
    cImg,
    cPlus,
    css,
    dog,
    html,
    java,
    js,
    office,
    pixi,
    sql,
    react,
    sass,
    tailwind,
    three,
  ];
  const toolsArr = [
    anaconda,
    arduino,
    atom,
    jupyter,
    postman,
    visualStudio,
    visualStudioCode,
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="about my-28 flex w-4/5 flex-row items-center justify-between max-xl:flex-col max-md:m-10 max-md:p-5">
        <div className="about-data m-0 flex flex-col p-0 max-sm:w-[400px]">
          <h1 className="mb-11 text-center text-4xl text-white">
            Know Who
            <span className="font-semibold text-[#c770f0]"> I&apos;M</span>
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-xl leading-8 text-white">
              Hi Everyone, I am
              <span className="font-semibold text-[#c770f0]">Moaz Kassim</span>
              from
              <span className="font-semibold text-[#c770f0]">
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
                <Pointer size={20} />
                Playing Games
              </li>
              <li className="flex flex-row items-center gap-1 text-lg text-white">
                <Pointer size={20} />
                Writing and Reading
              </li>
              <li className="flex flex-row items-center gap-1 text-lg text-white">
                <Pointer size={20} />
                Traveling
              </li>
            </ul>
          </div>
          <div className="about-quote">
            <p className="mt-5 text-center text-xl text-[#9B7EAC]">
              &quot;Strive to build things that make a difference!&quot;
            </p>
          </div>
        </div>
        <div className="about-img flex w-full min-w-[400px] items-center max-xl:mt-24 max-xl:w-[500px]">
          <img src={aboutImage} className="" />
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
