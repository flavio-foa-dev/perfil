import React from 'react'

export default function Header() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-fuchsia-500  px-4 py-3 flex justify-around">

      <div className="">
       <img src="https://avatars.githubusercontent.com/u/78602566?v=4" alt="avatar" className="rounded-full w-20 "/>
      </div>

      <div className="flex">
        <ul className="flex items-center">

          <li className="pl-6">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="/">Perfil</a></span>
          </li>

          <li className="pl-6">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="project">Project</a></span>
          </li>

          <li className="pl-6">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="contact">Contact</a></span>
          </li>

          <li className="pl-6">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="tools">Tools</a></span>
          </li>

          <li className="pl-6">
            <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="https://flavio-foa-dev.github.io/site/" target="_blank" rel="noreferrer">Site</a></span>
          </li>

        </ul>
      </div>
    </section>
  )
}
