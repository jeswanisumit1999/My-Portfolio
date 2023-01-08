import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-scroll'
function Navbar() {

    const [nav, setNav] = useState(false)
    const links = [
      {
        id: 1,
        title: 'home',
      },
    //   {
    //     id: 2,
    //     title: 'about',
    //   },
    //   {
    //     id: 3,
    //     title: 'portfolio',
    //   },
      {
        id: 4,
        title: 'Skills',
      },
      {
        id: 5,
        title: 'Contact',
      },
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black px-10 ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sumit</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, title }) => {
          return (
            <li
              key={id}
              className="text-gray-500 px-4 cursor-pointer capitalize font-semibold hover:scale-105 hover:text-white duration-300 text-xl"
            >
              <Link to={title} smooth duration={500}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer px-4 text-gray-500 hover:text-white z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav ? (
        <ul className="flex flex-col w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-500 justify-center items-center">
          {links.map(({ id, title }) => {
            return (
              <li
                key={id}
                className="text-gray-400 px-4 cursor-pointer capitalize font-medium text-4xl py-6 hover:scale-105 hover:text-white duration-300"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={title}
                  smooth
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            );
          })}
          <div className="flex gap-5 mt-20">
            <a href="https://www.linkedin.com/in/sumit-jeswani-3300861b3/">
              <BsLinkedin size={25} />
            </a>
            <a href="https://github.com/jeswanisumit1999">
              <BsGithub size={25} />
            </a>
            <a href="mailto:jeswanisumit1999@gmail.com">
              <HiOutlineMail size={30} />
            </a>
          </div>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar