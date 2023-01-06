import React from 'react'

export default function CardPrject() {
  return (
    <div className="py-16 md:py-20" id="services">

      <h2 className="text-center font-semibold uppercase sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>

      <h3 className="py-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the some of projects
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 bg-violet-50">

        <div className="border-2 w-64 h-64 hover:border-violet-900 hover:text-white flex flex-wrap items-center justify-center">
          <p className="text-lg font-bold text-white">Experience</p>
          <p className="group text-lg font-bold ">Systems Development</p>
        </div>

        <div className="border-2 w-64 h-64 hover:border-violet-900 hover:text-white flex flex-wrap items-center justify-center">
          <p className="text-lg font-bold text-white">Experience</p>
          <p className="group text-lg font-bold ">Systems Development</p>
        </div>

        <div className="border-2 w-64 h-64 hover:border-violet-900 hover:text-white flex flex-wrap items-center justify-center">
          <p className="text-lg font-bold text-white">Experience</p>
          <p className="group text-lg font-bold ">Systems Development</p>
        </div>

      </div>
    </div>
  )
}





