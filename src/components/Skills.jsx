import React from 'react'
import { IoLogoJavascript } from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


function Skills() {
    const skills = [
      {
        id: 1,
        logo: (
          <>
            <IoLogoJavascript size={50} />
            JavaScript
          </>
        ),
        color: "text-[#EAD41C]",
        shadow: "shadow-[#EAD41C]",
      },
      {
        id: 2,
        logo: (
          <>
            <FaReact size={50} />
            React
          </>
        ),
        color: "text-[#4F46E5]",
        shadow: "shadow-[#4F46E5]",
      },
      {
        id: 9,
        logo: (
          <>
            <SiTailwindcss size={50} />
            TailwindCSS
          </>
        ),
        color: "text-[#38BDF8]",
        shadow: "shadow-[#38BDF8]",
      },
      {
        id: 3,
        logo: (
          <>
            <FaNodeJs size={50}  />
            NodeJs
          </>
        ),
        color: "text-[#73BC60]",
        shadow: "shadow-[#73BC60]",
      },
      {
        id: 4,
        logo: (
          <>
            <SiFlutter size={50} />
            Flutter
          </>
        ),
        color: "text-[#27ADE9]",
        shadow: "shadow-[#27ADE9]",
      },
      {
        id: 5,
        logo: (
          <>
            <SiMongodb size={50} />
            MongoDB
          </>
        ),
        color: "text-[#006346]",
        shadow: "shadow-[#006346]",
      },
      {
        id: 6,
        logo: (
          <>
            <SiFirebase size={50} />
            Firebase
          </>
        ),
        color: "text-[#F2A016]",
        shadow: "shadow-[#F2A016]",
      },
      {
        id: 7,
        logo: (
          <>
            <FaGithub size={50} />
            GitHub
          </>
        ),
        color: "text-[#FFF]",
        shadow: "shadow-[#FFF]",
      },
      {
        id: 8,
        logo: (
          <>
            <SiNetlify size={50} />
            Netlify
          </>
        ),
        color: "text-[#F2F2F2]",
        shadow: "shadow-[#F2F2F2]",
      },
    ];
  return (
    <div name="Skills" className="pt-20 px-10 md:px-40 bg-gradient-to-b from-gray-800 to-black pb-28">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Skills
      </h1>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <li
          key={skill.id}
            className={
              `shadow-md hover:scale-105  py-20 px-16 rounded-xl duration-300 flex flex-col items-center` +
              " " +
              skill.color +
              " " +
              skill.shadow
            }
          >
            {skill.logo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills