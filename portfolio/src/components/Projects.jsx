import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { allProjectsData } from "../data/ProjectsData";
import { frontendData } from "../data/ProjectsData";
import { fullstackData } from "../data/ProjectsData";
import { motion } from "framer-motion";

export default function Projects() {
  const [projectType, setProjectType] = useState("all");
  useEffect(() => {
    setProjectType("all");
  }, []);

  return (
    <div className="">
      <div className="flex items-center ml-9 md:ml-0">
        <button
          onClick={() => setProjectType("all")}
          className={`text-[18px] text-gray-500  ml-6 ${
            projectType === "all" && "text-violet-500"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setProjectType("frontend")}
          className={`text-[18px]  ml-6 text-gray-500 ${
            projectType === "frontend" && "text-violet-500"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setProjectType("fullstack")}
          className={`text-[18px]  ml-6 text-gray-500 ${
            projectType === "fullstack" && "text-violet-500"
          }`}
        >
          fullstack
        </button>
      </div>
      <motion.div
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
        className="flex flex-wrap md:gap-6  my-8 px-10 md:px-0 duration-300"
      >
        {projectType === "all" &&
          allProjectsData.map((item, index) => (
            <ProjectCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              color={item.color}
            />
          ))}

        {projectType === "frontend" &&
          frontendData.map((item, index) => (
            <ProjectCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              color={item.color}
            />
          ))}

        {projectType === "fullstack" &&
          fullstackData.map((item, index) => (
            <ProjectCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              color={item.color}
            />
          ))}
      </motion.div>
    </div>
  );
}

// className="mt-7 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
//   {[1, 1, 1, 1].map((item, index) => (
//     <ProjectCard key={index} />
//     ))}
