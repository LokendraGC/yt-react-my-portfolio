import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-t from-black 
         to-gray-900
         text-white'>
            <div className='max-w-screen-lg p-5 mx-auto flex flex-col 
             justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 
                     border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos at quam distinctio beatae laboriosam cum voluptates ab possimus, adipisci, atque sunt ipsum quisquam, dignissimos minima? Corporis quidem velit asperiores error?
                </p>
                <br />
                <p className='text-xl'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam nam modi nihil omnis consectetur facilis quis. Nobis voluptas facere ratione officiis minus accusamus ipsum voluptates sequi. Quaerat, voluptas nisi?
                </p>
            </div>
        </div>
    )
}

export default About