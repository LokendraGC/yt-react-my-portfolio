import React from 'react'
import api from "../assets/portfolio/APIs.png"
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import quiz from "../assets/portfolio/quiz.jpg"
import netflix from "../assets/portfolio/netflix.png"
import usestate from '../assets/portfolio/usestate.jpg'

function Portfolio() {

    const portfolios = [

        {
            id: 1,
            src: api,
        },
        {
            id: 2,
            src: arrayDestruct
        },
        {
            id: 3,
            src: installNode
        },
        {
            id: 4,
            src: quiz
        },
        {
            id: 5,
            src: netflix
        },
        {
            id: 6,
            src: usestate
        },
    ]


    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black
         to-gray-900 w-full pt-24 sm:h-screen md:h-screen max-sm:h-[800px]"
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
            {portfolios.map(({ id, src }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-500 
                 rounded-lg
                py-2 max-sm:hover:duration-0"
              >
                <img src={src} alt="" className=" mx-auto rounded-lg" />

                <div className="flex items-center justify-center">
                  <button
                    className="text-white w-1/2  
                                 m-4 duration-200 
                                 hover:scale-150 max-sm:hover:scale-100
                                max-sm:m-3"
                  >
                    Demo
                  </button>
                  <button
                    className="text-white w-1/2   m-4 
                             duration-200 hover:scale-150 max-sm:hover:scale-100 max-sm:m-3"
                  >
                    Code
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
