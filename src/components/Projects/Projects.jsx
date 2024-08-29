import React from "react";
import Item from "../Item";
import alu from "../../../public/projects/alu.jpg";
export default function Projects() {
  const projectsArray = [
    {
      title: "Floor Plan Design",
      description:
        "Our project centers around the development of an innovative solution for automated floor plan generation using AI. Traditional floor plan design processes can be time-consuming and resource-intensivedasd",
      src: alu,
    },
    {
      title: "ATM System",
      description:
        "An Automated Teller Machine (ATM) system that provides banking services to customers through a machine, allowing them to withdraw cash, check account balances, transfer funds, and more. Below are some core components and processes typically involved in an ATM system",

      src: alu,
    },
    {
      title: "C Mosfet ALU",
      description:
        " Design and implement a basic ALU using CMOS transistors to perform arithmetic and logical operations. Interface the ALU with an ESP32 for control, and use a webcam to stream a live demo of the circuit operation.",

      src: alu,
    },
    {
      title: "To-Do List",
      description:
        "A To-Do List project using HTML, CSS, and JavaScript is a simple web application that allows users to add, manage, and delete tasks. It can include basic functionality",

      src: alu,
    },
    {
      title: "E-Commerce",
      description:
        "An e-commerce website project involves creating an online platform where products or services are bought and sold over the internet. providing a user-friendly interface for browsing products, adding them to a shopping cart .",

      src: alu,
    },
    {
      title: "React Note",
      description:
        "A React project for online notes using React Markdown (react-markdown) is a web application that allows users to create, edit, and manage their notes online, with the capability to format these notes using Markdown syntax.",

      src: alu,
    },
  ];
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <div className="flex w-4/5 flex-col items-center justify-center">
        <h1 className="text-4xl">
          <span className="text-white">My Recent</span> Works
        </h1>
        <p className="mt-2 text-base text-white">
          Here are a few projects i've worked on recently
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
            />
          );
        })}
      </div>
    </section>
  );
}
