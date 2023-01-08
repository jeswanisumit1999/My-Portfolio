import React from 'react'
import { BsLinkedin} from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="text-black bg-white">
      <br />
      <div className="flex justify-between px-20">
        <h1 className="text-5xl font-signature ml-2">Sumit</h1>
        <div className="flex gap-5">
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
      </div>
    </div>
  );
}

export default Footer