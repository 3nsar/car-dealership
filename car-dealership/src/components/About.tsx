import React from 'react'
import car4 from '../assets/car4.jpg'
import car3 from '../assets/car3.jpg'

const About = () => {
  return (
    <div className='min-h-screen w-full'>
       <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src={car3} alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={car4}
                        alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-gray-100 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Empowering Each Other</h2>
                            <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                Every project we've undertaken has been a collaborative effort, where every person
                                involved has left their mark. Together, we've not only constructed buildings but also
                                built enduring connections that define our success story.</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-gray-100 text-4xl font-bold font-manrope leading-normal">6+</h3>
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">Years of Experience</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-100 text-4xl font-bold font-manrope leading-normal">125+</h4>
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">Successful Projects</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-100 text-4xl font-bold font-manrope leading-normal">40+</h4>
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">Happy Clients</h6>
                            </div>
                        </div>
                    </div>
                    <button className='mt-5 mr-2 p-2 pr-5 pl-5 rounded text-gray-200 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>Zu den Autos</button>
                </div>
            </div>
        </div>
    </section>
                                            
                                            
    </div>
  )
}

export default About