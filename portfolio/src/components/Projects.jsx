import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projectType, setProjectType] = useState("all");
  return (
    <div className="">
      <div className="flex items-center">
        <button className="text-xl tracking-wider ml-6 text-gray-500">
          All Projects
        </button>
        <button className="text-xl tracking-wider ml-6 text-gray-500">
          Frontend
        </button>
        <button className="text-xl tracking-wider ml-6 text-gray-500">
          fullstack
        </button>
      </div>
      <section className="flex flex-wrap gap-6 ">
        {[1, 1, 1, 1].map((item, index) => (
          <ProjectCard key={index} />
        ))}
      </section>
    </div>
  );
}


// className="mt-7 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"