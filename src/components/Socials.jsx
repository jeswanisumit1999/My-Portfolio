import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from "react-icons/bs";
import { RiFileDownloadFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

function Socials() {
    const links = [
      {
        id: 1,
        style: "rounded-tr-lg",
        href: "https://www.linkedin.com/in/sumit-jeswani-3300861b3/",
        icon: (
          <>
            LinkedIn
            <BsLinkedin size={25} />
          </>
        ),
      },
      {
        id: 2,
        style: "",
        href: "https://github.com/jeswanisumit1999",
        icon: (
          <>
            GitHub
            <BsGithub size={25} />
          </>
        ),
      },
      {
        id: 3,
        title: "",
        style: "",
        href: "mailto:jeswanisumit1999@gmail.com",
        icon: (
          <>
            Mail
            <HiOutlineMail size={25} />
          </>
        ),
      },
      {
        id: 4,
        title: "",
        style: "rounded-br-lg",
        href: "https://drive.google.com/file/d/1n7tmM8tjOqdyGzDsd3aGMUNZnCjCpAt3/view?usp=share_link",
        icon: (
          <>
            Resume
            <RiFileDownloadFill size={25} />
          </>
        ),
      },
    ];
  return (
    <div className="fixed top-[37%] left-0 hidden md:flex flex-col gap-2">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={"bg-slate-800 w-40 text-white text-lg font-semibold px-4 py-2 ml-[-100px] hover:ml-[-10px] cursor-pointer duration-300 " + link.style}>
            <a className='flex justify-between gap-4' href={link.href}>
                {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
// #24292F

export default Socials