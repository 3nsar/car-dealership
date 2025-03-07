import React, { useState } from 'react'
import {Menu, X} from 'lucide-react';

const Navbar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className=' sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
        <div className=' text-gray-200 container px-4 mx-auto relative text-sm'>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center space-x-5 mx-3">
                    <span className='text-xl tracking-tight text-yellow-400 font-dothan'>San Car</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                  <li> <a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
                <div className=" hidden lg:flex justify-center items-center space-x-5 mx-3">
                <a href="#" className='py-2 px-3 text-center rounded-md bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>
                    Kontaktiere uns
                  </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                  <ul>
                    <li className='py-4'><a href="#">Home</a></li>
                    <li className='py-4'><a href="#">Autos</a></li>
                    <li className='py-4'><a href="#">Kontakt</a></li>
                  </ul>
                  <div className="flex flex-col justify-center ">
                  <a href="#" className='py-1 px-2 text-center rounded-md bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>
                    Kontaktiere uns
                  </a>

                  </div>
              </div>
            )}

        </div>
    </nav>
  )
}

export default Navbar