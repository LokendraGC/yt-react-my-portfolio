import React from 'react'
import api from "../assets/portfolio/APIs.png"
import todo_list from "../assets/portfolio/todo_list.png"
import dbms from "../assets/portfolio/dbms.png"
import quiz from "../assets/portfolio/quiz.jpg"
import netflix from "../assets/portfolio/netflix.png"



function Portfolio() {

    
     const handleLinkClick = (url)=>{
               window.open(url, "_blank");
     }

     const handleDemo = (demo)=>{
      window.open(demo,"_blank")
     }
    const portfolios = [
      {
        id: 1,
        src: todo_list,
        demo: "https://notesforfuturework.netlify.app/",
        href: "https://github.com/LokendraGC/Todo_list",
      },
      {
        id: 2,
        src: quiz,
        href: "https://github.com/LokendraGC/Quizz-web",
      },
      {
        id: 3,
        src: dbms,
        href: "https://github.com/LokendraGC/DBMS_Project",
      },
      {
        id: 4,
        src: netflix,
      },
      {
        id: 5,
        src: api,
      },
    ];


    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black
         to-gray-900 w-full pt-24 sm:h-screen md:h-screen max-sm:h-[900px]"
      >
        <div
          className="max-w-screen-lg mx-auto p-4 flex flex-col 
               justify-center w-full h-full text-white"
        >
          <div>
            <p
              className="text-4xl font-bold inline border-b-4 
                     border-gray-500
                 p-2 "
            >
              Portfolio
            </p>
            <p className="py-6">Check Out some of my work right here</p>
          </div>
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0  "
          >
            {portfolios.map(({ id, src, href, demo }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-500 
                 rounded-lg
                py-2 max-sm:hover:duration-0"
              >
                <img src={src} alt="" className=" mx-auto rounded-lg h-40 
                max-sm:h-20" />
                <div className="flex items-center justify-center">
                  <button
                    className="text-white w-1/2  
                                 m-4 duration-200 
                                 hover:scale-150 max-sm:hover:scale-100
                                max-sm:m-3"
                  >
                    <div
                      onClick={() => handleDemo(demo)}
                      demo={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </div>
                  </button>
                  <button
                    className="text-white w-1/2   m-4 
                             duration-200 hover:scale-150 max-sm:hover:scale-100 max-sm:m-3"
                  >
                    <div
                      onClick={() => handleLinkClick(href)}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Portfolio
