import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import nextjs from '../assets/nex.png'


function Exprience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
    },
    {
      id: 4,
      src: javascript,
      title: "Javascript",
    },
    {
      id: 5,
      src: react,
      title: "React JS",
    },
    {
      id: 6,
      src: github,
      title: "Github",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next.Js",
    },

  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to-black w-full h-[900px]
     max-sm:pt-[50px]  " 
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col 
               justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500
                 p-2"
          >
            Skills
          </p>
          <p className="py-6">
            These are the techonologies I have worked with.
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0 "
        >
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 hover:scale-110 duration-500 rounded-lg
                py-2 "
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="text-white mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exprience;
