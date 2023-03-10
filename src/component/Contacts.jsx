import React from 'react'

function Contacts() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4'>
          <div className='flex flex-col p-4 justify-center 
          max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 inline border-gray-500 
                 '>Contact</p>
                <p className='py-6'>Submit the form below if you have any feedback and suggestions. 
                 </p> 
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/dbab2701-4b92-4332-83d9-f428121fd8d8" method='POST' className='flex flex-col md:w-1/2'>
                <input
                 type="text"
                 name='name'
                 placeholder='Enter your name'
                 className='p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6'
                 />
                <input
                 type="text"
                 name='email'
                 placeholder='Enter your email'
                 className='p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6'
                 />
                 <textarea name="message"
                 placeholder='Enter suggestions and feedback'
                 rows="" cols="24"
                 className='p-2 bg-transparent border-2 rounded-md
                   text-white focus:outline-none my-6'
                 ></textarea>
                 <button className='text-white bg-gradient-to-b 
                 from-cyan-500 to-blue-500 flex items-center mx-auto my-8 px-12 
                 py-4  hover:scale-110 duration-300 rounded-md'>Submit</button>
                 </form>
            </div>
          </div>
    </div>
  )
}

export default Contacts
