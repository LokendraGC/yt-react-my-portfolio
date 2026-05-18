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

        <p className="text-xl mt-20 w-full">
  Hello, I'm Lokendra from Surkhet, Nepal. I completed my Bachelor's degree in Electronics, Communication, and Information Engineering from Sagarmatha Engineering College. I am passionate about web development and aspire to become a proficient full-stack developer. 

  Currently, I work as a Web Developer at <b><a href="https://webtechnepal.com/" target="_blank" rel="noopener noreferrer">Webtech Nepal</a></b>. I enjoy exploring new technologies, solving problems through programming, and continuously expanding my technical knowledge.

  In my free time, I like reading books, watching movies, and working on coding projects that help me grow as a developer.
</p>

        <div className="pt-4">
          <a
            href="CV_Lokendra_GC.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <u> Preview CV</u>
            </b>
          </a>
        </div>
        <div className="pt-4">
          <a href="CV_Lokendra_GC.pdf" download>
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
