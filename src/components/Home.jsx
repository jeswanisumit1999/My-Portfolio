import React from 'react'
import HeroImage from "../assets/programming.svg";
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from "react-scroll";
function Home() {
  return (
    <div
      name="home"
      className="pt-20 px-10 md:px-32 xl:px-44
       min-h-screen bg-gradient-to-b from-black to-gray-800 flex  justify-center items-center"
    >
      <div className="text-white flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div>
          <h2 className="text-3xl  sm:text-5xl font-bold mb-3 sm:mb-5">
            👋 Hey There,
          </h2>
          <h2 className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-5">
            I,m{" "}
            <span className="text-blue-400 text-5xl sm:text-7xl">
              Sumit Jeswani
            </span>
          </h2>
          <p className="text-md sm:text-2xl font-semibold text-gray-400">
            I have 1.5+ years of exprience as Software Engineer. Currently, I
            Love to work on web application using technoligies like React,
            Tailwind, MongoDB, Express, NodeJs.
          </p>
          <Link
            to="Contact"
            smooth
            duration={500}
            className="group w-fit px-6 py-3 mt-10 flex gap-3 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 cursor-pointer font-bold text-xl"
          >
            Contact
            <div className="group-hover:rotate-90 hover:scale-105 duration-300">
              <IoIosArrowForward size={25} />
            </div>
          </Link>
        </div>

        <div className="w-3/4 xl:w-full flex-col bg-gradient-to-b from-slate-300 to-slate-800 rounded-3xl">
          <img src={HeroImage} alt="My Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home