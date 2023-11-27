import React from 'react'
import {FaGithub} from "react-icons/fa";
import {BsLinkedin} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";

function Contacts() {

  const handleGit = (git)=>{
   window.open(git,'_blank')
  }

  const handleLink= (linkedin)=>{
    window.open(linkedin,'_blank')
  }
  const handleInsta =(insta)=>{
    window.open(insta,'_blank')
  }
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 max-sm:h-[720px]"
    >
      <div
        className="flex flex-col p-4 justify-center 
          max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold border-b-4 inline border-gray-500 
                 "
          >
            Contact
          </p>
          <div className="pt-10 flex justify-center space-x-20">
            <FaGithub
              className="h-12 w-12 hover:cursor-pointer fill-gray-400"
              onClick={() => handleGit("https://github.com/LokendraGC")}
            />
            <BsLinkedin
              className="h-12 w-12 hover:cursor-pointer fill-blue-700"
              onClick={() =>
                handleLink(
                  "https://www.linkedin.com/in/lokendra-g-c-83b72025b/"
                )
              }
            />
            <FaInstagram
              className="h-12 w-12 hover:cursor-pointer  fill-pink-900 "
              onClick={() =>
                handleInsta("https://www.instagram.com/lokendra.gharti.77")
              }
            />
          </div>
          <div className="flex justify-center">
            <p className="pt-16 ">
              Submit the form below if you have any feedback and suggestions.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/dbab2701-4b92-4332-83d9-f428121fd8d8"
            method="POST"
            className="flex flex-col md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6"
            />
            <textarea
              name="message"
              placeholder="Enter suggestions and feedback"
              rows=""
              cols="24"
              className="p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b 
                 from-cyan-500 to-blue-500 flex items-center mx-auto my-8 px-12 
                 py-4  hover:scale-110 duration-300 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts
