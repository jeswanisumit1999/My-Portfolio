import React from "react";
import contact from '../assets/contact.svg'
import {IoIosArrowForward} from 'react-icons/io'

function Contact() {
  return (
    <div
      name="Contact"
      className="pt-20 px-10 md:px-40 bg-gradient-to-b from-black to-gray-800 pb-28"
    >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Let's Discuss
      </h1>
      <div className="text-white flex flex-col lg:flex-row gap-10 mt-20 justify-center items-center">
        <div>
          <img src={contact} alt="contact" />
        </div>

        <div className="w-3/4 xl:w-full flex-col">
          <form
            method="POST"
            action="https://formsubmit.co/jeswanisumit1999@gmail.com"
            className="lg:px-20"
          >
            <label for="email" class="leading-7 text-xl text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full mb-5 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
            <label for="email" class="leading-7 text-xl text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full mb-5 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
            <label for="message" class="leading-7 text-xl text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full mb-5  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>

            <button
              type="submit"
              className="group w-fit px-6 py-3 mt-10 flex gap-3 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 cursor-pointer font-bold text-xl"
            >
              Send
              <div className="hover:scale-105 duration-300">
                <IoIosArrowForward size={25} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
