import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import logo from "../../assets/pngwing.com (1).png";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { LiaReadme } from "react-icons/lia";
import { RiRoadMapLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";

export default function Sidebar() {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });

  const Sidebar_animation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab]);

  return (
    <div>
      <div
        onClick={(e) => setIsOpen(!isOpen)}
        className={` md:hidden fixed max-h-screen z-[998]
       inset-0 bg-black/50 ${isOpen ? "block" : "hidden"}`}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-[#1C1B23] text-gray-400 shadow-xl
     z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div className="flex items-center gap-3 font-medium py-5 border-b border-slate-500 mx-3">
          <img
            src={logo}
            alt=""
            width={45}
            className="border-2 border-green-500 rounded-full"
          />
          <span className="text-xl  whitespace-nowrap ">appu900</span>
        </div>

        {/* menus */}
        <div className="flex flex-col h-full">
          {/* first */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-4 font-medium overflow-x-hidden">
            <li>
              <NavLink to="/" className="link">
                <IoHomeOutline
                  size={23}
                  className="min-w-max text-violet-500"
                />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link">
                <LiaReadme size={23} className="min-w-max text-yellow-600" />
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className="link">
                <IoPersonOutline
                  size={23}
                  className="min-w-max text-orange-700"
                />
                About
              </NavLink>
            </li>
          </ul>
          {/* second  */}
          <div className="">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-4 font-medium overflow-x-hidden">
              <li>
                <NavLink to="/" className="link">
                  <FiGithub size={23} className="min-w-max text-green-700" />
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  <CiLinkedin size={23} className="min-w-max text-blue-600" />
                  Linkedin
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  <SiLeetcode size={23} className="min-w-max text-orange-700" />
                  Leetcode
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  <FaInstagram size={23} className="min-w-max text-pink-500" />
                  Instagram
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  <FaThreads size={23} className="min-w-max text-blue-500" />
                  Thread
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* open close controll button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -100,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0.5,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} className="cursor-pointer" />
        </motion.div>
      </motion.div>

      <div
        className="md:hidden m-3  z-[987] "
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <IoMenu size={25} className="text-white " />
        
      </div>
    </div>
  );
}
