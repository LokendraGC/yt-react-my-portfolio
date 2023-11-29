import React from "react";

// import docs from '../assets/CV_Lokendra_GC'

const About = () => {
  return (
    <div
      name="about"
      className="pt-20 w-full h-[450px]  bg-gradient-to-t from-black 
         to-gray-900
         text-white max-sm:h-[600px]"
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
            About Me
          </p>
        </div>

        <p className="text-xl mt-20 w-full ">
          Hello, I'm Lokendra, hailing from Surkhet. Currently pursuing a
          bachelor's degree in Electronics, Communication, and Information
          Engineering at Sagarmatha Engineering College, I am passionate about
          the field of web development. My goal is to become a proficient
          full-stack web developer. I enjoy exploring new technologies,
          programming, and constantly seeking opportunities to expand my
          knowledge. In my free time, you'll find me engrossed in books,
          enjoying movies, and indulging my passion for coding.
        </p>
        <div className="pt-4">
          <a
            href="Resume_LokendraGC.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <u> Preview CV</u>
            </b>
          </a>
        </div>
        <div className="pt-4">
          <a href="Resume_LokendraGC.pdf" download>
            <b>
              <u> Download CV</u>
            </b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
