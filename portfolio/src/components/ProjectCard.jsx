import React from "react";
import hotstar from "../assets/hotstar.jpg";

export default function ProjectCard({id,imgUrl,title,stack,color}) {
  return (
    <div className="w-[310px] h-[320px] duration-300 rounded-lg overflow-hidden shadow-red-300 cursor-pointer hover:-translate-y-1">
      <img className="w-full h-[160px] object-cover" src={imgUrl} />
      <div className="w-full bg-[#1C1B23] h-[100px] rounded-b-lg py-4 px-6">
        <p className={`text-xl text-${color}-400 font-semibold`}>{title}</p>
        <div className="flex gap-2 flex-wrap">
            {
                stack.map((item,index)=>(
                    <p key={index} className={`text-sm  text-white-400`}>{item}</p>
                ))
            }
          {/* <p className="text-sm  text-white  ">React ,</p>
          <p className="text-sm font-semibold text-white  ">React ,</p>
          <p className="text-sm font-semibold text-white  ">React ,</p>
          <p className="text-sm font-semibold text-white ">React</p> */}
        </div>
      </div>
    </div>
  );
}
