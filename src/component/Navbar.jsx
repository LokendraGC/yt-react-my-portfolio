import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"


function Navbar() {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
      <div
        className="flex justify-between items-center w-full
    h-20 px-8 text-white bg-black sticky top-0 "
      >
      
          <div>
            <h1 className="text-4xl font-signature hover:cursor-pointer">
              Lokendra
            </h1>
          </div>
       

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize font-medium cursor-pointer 
                text-gray-400 hover:scale-150 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="text-gray-400 cursor- 
             pointer z-10 md:hidden max-sm:duration-200"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className="flex flex-col justify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray
            "
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize
                        py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default Navbar
