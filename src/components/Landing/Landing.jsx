import homeLogo from "../../assets/home-main.svg";
import Type from "../Type/Type";
import { Hand } from "lucide-react";

export default function Landing() {
  return (
    <section className="my-28 flex justify-center">
      <div className="landing flex w-4/5 justify-between max-lg:flex-col max-lg:gap-20">
        <div className="landing-info flex flex-col items-start justify-center gap-7">
          <div className="info-head">
            <h2 className="flex flex-row items-center gap-6 text-4xl text-white">
              Hi There! <Hand color="#c770f0" size={34} />
            </h2>
          </div>
          <h1 className="text-5xl">
            <span className="text-white">I'M</span> MOAZ KASSIM
          </h1>
          <h1 className="mt-10 text-4xl">
            <Type />
          </h1>
        </div>

        <div className="landing-media flex justify-items-end">
          <img src={homeLogo} alt="home page" className="w-[450px]" />
        </div>
      </div>
    </section>
  );
}
