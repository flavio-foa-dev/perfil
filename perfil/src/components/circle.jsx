import React from 'react'

export default function Circle() {
  return (
    <section className="py-20 2xl:py-40 bg-gray-800">
  <div className="container px-4 mx-auto">
    <div>
      <div className="flex flex-wrap -mx-6 lg:-mx-14">
        <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
          <div className="relative flex items-center justify-center mb-10 w-20 h-20">
            <img className="absolute inset-0 w-full h-full" src="zospace-assets/lines/circle-chart.svg" alt=""/>
            <p className="text-2xl font-bold text-white">
              <span>8</span>
              <span className="text-base">%</span>
            </p>
          </div>
          <div className="py-px mb-12 bg-gray-500"></div>
          <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">New tools</h3>
          <p className="text-lg text-gray-200">The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
          <div className="relative flex items-center justify-center mb-10 w-20 h-20">
            <img className="absolute inset-0 w-full h-full" src="zospace-assets/lines/circle-chart-purple.svg" alt=""/>
            <p className="text-2xl font-bold text-white">
              <span>45</span>
              <span className="text-base">%</span>
            </p>
          </div>
          <div className="py-px mb-12 bg-gray-500"></div>
          <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">Workshops</h3>
          <p className="text-lg text-gray-200">It&rsquo;s over, maecenas tincidunt malesuada dolor sit amet malesuada.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 md:mb-0">
          <div className="relative flex items-center justify-center mb-10 w-20 h-20">
            <img className="absolute inset-0 w-full h-full" src="zospace-assets/lines/circle-chart-green.svg" alt=""/>
            <p className="text-2xl font-bold text-white">
              <span>5</span>
              <span className="text-base">/6</span>
            </p>
          </div>
          <div className="py-px mb-12 bg-gray-500"></div>
          <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">Meetings</h3>
          <p className="text-lg text-gray-200">The time, this accumsan augue, posuere posuere elit lorem.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14">
          <div className="relative flex items-center justify-center mb-10 w-20 h-20">
            <img className="absolute inset-0 w-full h-full" src="zospace-assets/lines/circle-chart-pink.svg" alt=""/>
            <p className="text-2xl font-bold text-white">
              <span>79</span>
              <span className="text-base">%</span>
            </p>
          </div>
          <div className="py-px mb-12 bg-gray-500"></div>
          <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">Webinars</h3>
          <p className="text-lg text-gray-200">Again and again vehicula libero at nibh volutpat lacinia non sed you see.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
