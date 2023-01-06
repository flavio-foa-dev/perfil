import React from 'react'

export default function CardPrject() {
  return (
    <div className="py-10" id="services">

      <h2 className="text-center font-semibold uppercase sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>

      <h3 className="py-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the some of projects
      </h3>

      <section className="py-10 bg-gray-100">
        <div className="flex justify-center gap-10 text-gray-700">

          <div className="border-2 w-64 h-64 hover:border-violet-900 hover:bg-violet-400 flex flex-wrap items-center justify-center">
            <p className="text-lg font-bold text-gray-700">Project</p>
            <p className="group text-lg font-bold text-white">Systems Development</p>
          </div>

          <div className="border-2 w-64 h-64 hover:border-violet-900 hover:bg-violet-400 flex flex-wrap items-center justify-center">
            <p className="text-lg font-bold text-gray-700">Project</p>
            <p className="group text-lg font-bold text-white">Systems Development</p>
          </div>

        </div>
      </section>
    </div>
  )
}





