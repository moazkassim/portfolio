import { Github } from "lucide-react";
import { Radio } from "lucide-react";

export default function Item(props) {
  return (
    <div className="relative flex h-[620px] w-full max-w-[370px] flex-1 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-[#c770f0] p-5 duration-700 hover:scale-95">
      <div className="absolute top-10">
        <img className="h-[240px] w-[270px] rounded" src={props.src} />
      </div>
      <div className="my-5 flex flex-col items-center gap-6 py-3">
        <div className="absolute px-4 text-center">
          <h2 className="mb-4 text-2xl text-[#43def2]">{props.title}</h2>
          <p className="text-justify text-[16px] text-[#cfcfcf]">
            {props.description}
          </p>
        </div>
        <div className="absolute bottom-8 flex flex-row items-center justify-between gap-6">
          <button className="w-24">
            <a
              href={props.githubLink}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 rounded bg-[#b94fea] p-2 text-white"
            >
              <Github size={18} />
              GitHub
            </a>
          </button>
          <button className="w-24">
            <a
              href={props.demoLink}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 rounded bg-[#b94fea] p-2 text-white"
            >
              <Radio size={20} />
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
