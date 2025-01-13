import Item from "../Item";
import alu from "../../../public/projects/alu.jpg";
import atm from "../../../public/projects/atm.jpg";
import ecomerce from "../../../public/projects/ecomerce.jpg";
import floorPlan from "../../../public/projects/floorPlan.jpg";
import note from "../../../public/projects/note.jpg";
import toDoList from "../../../public/projects/toDoList.jpg";
import skills from "../../../public/projects/skills.jpg";
import fourth from "../../../public/projects/fourth.jpg";
import third from "../../../public/projects/third.jpg";
import myself from "../../../public/projects/myself.jpg";
import game from "../../../public/projects/game.jpg";
import vidly from "../../../public/projects/vidly.jpg";

export default function Projects() {
  const projectsArray = [
    {
      title: "Floor Plan Design",
      description:
        "Our project centers around the development of an innovative solution for automated floor plan generation using AI. Traditional floor plan design processes can be time-consuming and resource-intensive  ",
      src: floorPlan,
      githubLink: "https://github.com/moazkassim/floorPlanDesign",
      demoLink: "https://floorplandesign.netlify.app/",
    },
    {
      title: "Vidly App",
      description:
        "Vidly system is a movie rental management system. It is implemented using Node.js and Express to create robust RESTful APIs, while MongoDB serves as the database for storing movies, genres and rental records. The app leverages (JWT) for authentication and data validation.",

      src: vidly,
      githubLink: "https://github.com/moazkassim/to-do-list",
      demoLink: "",
    },
    {
      title: "To-Do List",
      description:
        "A To-Do List project using HTML, CSS, and JavaScript is a simple web application that allows users to add, manage, and delete tasks. It can include basic functionality",

      src: toDoList,
      githubLink: "https://github.com/moazkassim/to-do-list",
      demoLink: "",
    },
    {
      title: "E-Commerce",
      description:
        "An e-commerce website project involves creating an online platform where products or services are bought and sold over the internet. providing a user-friendly interface for browsing products, adding them to a shopping cart .",

      src: ecomerce,
      githubLink: "https://github.com/moazkassim/hayaTraining",
      demoLink: "https://e-comerceapp.netlify.app/",
    },
    {
      title: "bit of me",
      description:
        "A website for my hobbies and details that I have been interested in throughout my life, along with a prototype of my portfolio",

      src: myself,
      githubLink: "https://github.com/moazkassim/hardProject",
      demoLink: "https://moazkassim.github.io/hardProject/#services",
    },
    {
      title: "Creative Agency",
      description:
        "A website with various options like games and other features, such as skills, news, testimonials and friends, to showcase the output of previous courses. this project was built with (html & css) in a professional way",

      src: fourth,
      githubLink: "https://github.com/moazkassim/fourthProject4",
      demoLink: "https://moazkassim.github.io/fourthProject4/",
    },
    {
      title: "Memory Game",
      description:
        "A website with various options like games and other features, such as skills, news, testimonials and friends, to showcase the output of previous courses. this project was built with (html & css) in a professional way",

      src: game,
      githubLink: "https://github.com/moazkassim/memoryGame",
      demoLink: "https://moazkassim.github.io/memoryGame/",
    },
    {
      title: "Training Project",
      description:
        "A website with various options like games and other features, such as skills, news, testimonials and friends, to showcase the output of previous courses. this project was built with (html & css) in a professional way",

      src: third,
      githubLink: "https://github.com/moazkassim/firstProject1",
      demoLink: "https://moazkassim.github.io/firstProject1/",
    },
    {
      title: "All You Need",
      description:
        "A website with various options like games and other features, such as skills, news, testimonials and friends, to showcase the output of previous courses. this project was built with (html & css) in a professional way",

      src: skills,
      githubLink: "https://github.com/moazkassim/thirdProject3",
      demoLink: "https://training33.netlify.app/",
    },
    {
      title: "React Note",
      description:
        "A React project for online notes using React Markdown (react-markdown) is a web application that allows users to create, edit, and manage their notes online, with the capability to format these notes using Markdown syntax.",

      src: note,
      githubLink: "",
      demoLink: "",
    },
    {
      title: "ATM System",
      description:
        "An Automated Teller Machine (ATM) system that provides banking services to customers through a machine, allowing them to withdraw cash, check account balances, transfer funds, and more. Below are some core components and processes typically involved in an ATM system",
      src: atm,
      githubLink: "https://github.com/moazkassim/atm",
      demoLink: "",
    },
    {
      title: "C Mosfet ALU",
      description:
        " Design and implement a basic ALU using CMOS transistors to perform arithmetic and logical operations. Interface the ALU with an ESP32 for control, and use a webcam to stream a live demo of the circuit operation.",

      src: alu,
      githubLink: "https://github.com/moazkassim/alu",
      demoLink: "",
    },
  ];
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <div className="flex w-4/5 flex-col items-center justify-center">
        <h1 className="text-4xl">
          <span className="text-white">My Recent</span> Works
        </h1>
        <p className="mt-2 text-base text-white">
          Here are a few projects i&apos;ve worked on recently
        </p>
      </div>
      <div className="my-28 grid w-4/5 grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 2xl:grid-cols-3">
        {projectsArray.map((project, index) => {
          return (
            <Item
              key={index}
              title={project.title}
              description={project.description}
              src={project.src}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </section>
  );
}
