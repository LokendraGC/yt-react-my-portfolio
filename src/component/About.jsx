import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-12 w-full h-[450px]  bg-gradient-to-t from-black 
         to-gray-900
         text-white"
    >
      <div
        className="max-w-screen-lg p-5 mx-auto flex flex-col 
             justify-center w-full h-full"
      >
        <div className="">
          <p
            className="text-4xl font-bold inline border-b-4 
                     border-gray-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi,I am Lokendra G C,from surkhet I passed my plus two from South
          Asian Scholars Academy College in Computer Science.I like reading
          books, do coding and hunger to learn new things like 
           techonologies,programming etc. <br />I want to become a good full
          stack Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
