import React from "react";
import { Github } from "lucide-react";
import { Radio } from "lucide-react";

export default function Item(props) {
  return (
    <div className="p-5 border-2 border-[#c770f0] h-[620px]  w-[380px] flex flex-col items-center justify-center gap-4 flex-1 rounded-lg relative  cursor-pointer hover:scale-95 duration-700">
      <div className=" absolute top-10 ">
        <img className="w-[270px] h-[240px] rounded " src={props.src} />
      </div>
      <div className="flex flex-col  items-center my-5 gap-6 py-3">
        <div className=" absolute text-center px-4">
          <h2 className="text-[#43def2] text-2xl mb-4">{props.title}</h2>
          <p className=" text-[#cfcfcf] text-[16px] text-justify">
            {props.description}
          </p>
        </div>
        <div className=" flex flex-row items-center justify-between gap-6 absolute bottom-8">
          <button className=" flex flex-row items-center justify-center text-white bg-[#b94fea] p-2 rounded gap-2">
            <Github size={20} />
            GitHub
          </button>
          <button className=" flex flex-row items-center justify-center text-white bg-[#b94fea] p-2 rounded gap-2">
            {" "}
            <Radio size={20} />
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}
