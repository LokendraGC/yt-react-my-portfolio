import React from "react";
import { Document, Page } from "react-pdf";
// import cv from 'Lokendra_G_C_CV.pdf'


const About = () => {
  return (
    <div
      name="about"
      className="pt-12 w-full h-[450px]  bg-gradient-to-t from-black 
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
          Hi,I am Lokendra, from surkhet. I am currently doing a bachelor's
          degree in Electronics, Communication, and Information Engineering at
          Sagarmatha engineering college. I am interested in the web development
          field. I want to be a full-stack web Developer. I like reading books,
          watching movies, and coding, hunger to learn new things like
          technologies, programming, etc.
        </p>
        <div>
          <h3>CV Preview</h3>

          <Document file="Lokendra_G_C_CV.pdf">
            <Page pageNumber={1} />
          </Document>

          <a href="Lokendra_G_C_CV.pdf" download>
            <b> <u>  Download CV</u></b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
