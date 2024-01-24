import React from "react";
import profile from "../assets/fc6443b4-5a1c-44ef-b84f-ebac6b674b96-removebg-preview (2).png";

const Profile = () => {
  return (
    <div className="w-full h-[330px] relative rounded  ">
      <div className="h-[170px] w-full bg-gradient-to-r  from-purple-800 via-violet-900 to-purple-800"></div>
      <div className="absolute bottom-1 left-6 ">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg"
          //  src={profile}
          alt=""
          className="h-36 w-36 rounded-full object-cover border-2 bg-gray-500"
        />
        <h1 className="text-4xl font-semibold mt-2">Pabitra Sundar Dakua</h1>
        <p className="text-xl mt-3">Fullstack developer || MERN </p>
        <div className="flex items-center gap-3 mt-1">
          <button className=" text-violet-400 px-4 py-1 rounded-full mt-2 bg-violet-700 bg-opacity-25">
            connect with me
          </button>
          <button className="bg-green-500 text-green-400 px-4 py-1 rounded-full mt-2 bg-opacity-25">
            my resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
