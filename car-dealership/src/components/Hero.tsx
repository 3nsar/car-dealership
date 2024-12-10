import React from 'react' 
import car from "../assets/car.jpg"
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative bg-[url('./assets/car.jpg')] bg-cover bg-center">
      {/* Add the overlay div */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Make Navbar and content relative to appear above overlay */}
      <div className="relative">
        <Navbar/>
        <div className="w-full h-screen flex items-center text-gray-200">
          {/* Changed mx-auto to ml-[10%] and removed text-center */}
          <div className='ml-[10%] max-w-[600px]'>
              <h1 className='text-8xl font-bold font-dothan text-yellow-400'>San Car</h1>
              <p className='text-xl font-light mt-16'>
                  Schwierigkeiten, das passende Auto zu finden?<br></br>
                  Wir helfen Ihnen, Ihr Traumauto schnell und bezahlbar zu finden.
              </p>

              {/* Removed text-left since parent is already left-aligned */}
              <div className="flex">
                  <button className='mt-5 mr-2 p-2 pr-5 pl-5 rounded bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>Zu den Autos</button>
                  <button className='mt-5 ml-2 p-2 pr-5 pl-5 rounded bg-transparent border border-gray-100 hover:border-slate-900 hover:bg-teal-600'>Wer wir sind</button>
              </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Hero