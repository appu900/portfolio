import React from "react";
import coverImage from "../assets/1619665813083.jpg";
import imageOne from "../assets/fc6443b4-5a1c-44ef-b84f-ebac6b674b96-removebg-preview (2).png";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="w-full text-white h-[7000px] z-10">
      {/* profile section */}
      <section className="">
        <Profile />
      </section>
      <section  className="my-10">
        <Projects/>
      </section>
    </div>
  );
}
