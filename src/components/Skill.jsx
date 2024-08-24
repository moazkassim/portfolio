import React from "react";

export default function Skill(props) {
  return (
    <div className=" flex justify-center items-center border border-[#c770f0] w-[230px] h-[130px] rounded hover:bg-[#c770f0] hover:scale-110 ease-in duration-300 cursor-pointer">
      <img className=" w-30 h-20" src={props.src} key={props.key} />
    </div>
  );
}
