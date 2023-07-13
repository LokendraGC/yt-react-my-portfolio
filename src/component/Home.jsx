import React from 'react'
import MyImage from "../assets/loki.jpg"
import { RiArrowRightSLine } from "react-icons/ri"
import {Link} from "react-scroll"

const Home = () => {

    const links= [
        {
            id:1,
            link:"portfolio"
        },

    ]
    return (
      <div
        name="home"
        className="pt-[100px]  w-full bg-gradient-to-b from-black via-black
         to-gray-900"
      >
        <div
          className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-7xl font-bold text-white">
              I Want to be a Full Stack Developer
            </h2>
            <p className="max-w-md py-4 text-gray-500 ">
              I currently studying bachelor's degree in Electronics
              Communication and Information at Sagarmatha engineering college.
            </p>

            <div>
              {links.map(({ link }) => (
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-t
                     from-cyan-500 to-blue-500 cursor-pointer
                      max-sm:ml-24"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <RiArrowRightSLine size={25} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="max-sm:mt-6">
            <img
              src={MyImage}
              alt="My portfolio"
              className="rounded-full mx-auto w-96  shadow-md 
                    max-sm:w-60 
                        "
            />
          </div>
        </div>
      </div>
    );
}

export default Home
