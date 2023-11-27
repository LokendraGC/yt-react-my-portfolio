import React from 'react'
import canteen from "../assets/portfolio/canteen.jpg"
import nike from "../assets/portfolio/nike.jpg"
import quiz from "../assets/portfolio/quiz.jpg"
import two from "../assets/portfolio/two_good_co.jpg"
import bubble from '../assets/portfolio/bubble_game.jpg'


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
        src: canteen,
        demo: "https://canteen-web-app.vercel.app/",
        href: "https://github.com/LokendraGC/canteen_web_app",
        name: "Canteen Project",
      },
      {
        id: 2,
        src: nike,
        demo: "https://clonenike.netlify.app",
        href: "https://github.com/LokendraGC/Nike_Cone",
        name: "Nike Clone",
      },

      {
        id: 3,
        src: two,
        demo: "https://clonetwogoodco.netlify.app",
        href: "https://github.com/LokendraGC/clone_two_good_co",
        name: "Two Good Co website",
      },
      {
        id: 4,
        src: bubble,
        demo: "https://lokendragc.github.io/Js_bubble_game/",
        href: "https://github.com/LokendraGC/Js_bubble_game",
        name: "Bubble Game",
      },
      {
        id: 5,
        src: quiz,
        demo: "",
        href: "https://github.com/LokendraGC/Quizz-web",
        name: "Quiz App",
      },
    ];


    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black
         to-gray-900  pt-48 sm:h-screen md:h-screen max-sm:h-[900px]"
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
              Projects
            </p>
            <p className="py-6">Check Out some of my work right here</p>
          </div>
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 
              gap-8 text-center py-8 px-8 sm:px-0  "
          >
            {portfolios.map(({ id, src, href, demo, name }) => (
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
                <h2 className='text-cyan-500'>{name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Portfolio
