import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className='text-lg text-blue-500 font-semibold'>Hi, I'm</p>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">Muhammad
              <br className="hidden lg:inline-block" />{" "}Tayyeb
            </h1>
            <p className="mb-8 text-lg leading-relaxed">I'm a passionate web developer specializing in the MERN stack and an expert in Figma design. With a strong foundation in both frontend and backend technologies, I build fast, responsive, and user-friendly web applications. Let's turn your ideas into reality with clean code and creative design!</p>
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded-full text-lg">Contact Me</button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full relative md:w-1/2 w-5/6 flex items-center justify-center" data-aos="fade-left">
            <img className="object-cover object-center rounded z-10" alt="hero" src="/mtayyebdev-bg.png" />
            <i className='fa-solid fa-code absolute left-0 text-green-600 lg:left-5 z-[8] text-4xl animate-pulse' data-aos="fade-right"></i>
            <i className='fa-solid fa-image absolute text-[#ed23ff] -top-5 lg:top-0 z-[8] text-4xl animate-pulse' data-aos="fade-down"></i>
            <i className='fa-solid fa-globe absolute right-0 lg:right-5 z-[8] text-4xl animate-pulse text-blue-700' data-aos="fade-left"></i>
            <div className="spinner1 absolute rounded-full border-0 border-[aqua] md:w-[270px] md:h-[270px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] border-b-4 w-[200px] sm:w-[420px] h-[200px] sm:h-[420px]"></div>
            <div className="spinner2 absolute rounded-full border-0 border-[aqua] border-b-4 md:w-[200px] md:h-[200px] w-[100px] sm:w-[300px] h-[100px] sm:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"></div>
            <div className="spinner3 absolute rounded-full border-0 border-[aqua] border-b-4 md:w-[100px] md:h-[100px] w-[50px] sm:w-[200px] h-[50px] sm:h-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]"></div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-5 py-24 text-center'>
          <h1 className="title-font text-3xl mb-4 font-semibold text-gray-900">
            About Me
          </h1>
          <hr className='w-16 mb-3 -mt-2 border border-blue-600 mx-auto' />
          <p className="mb-8 text-lg leading-relaxed">My name is Muhammad Tayyeb, a web developer and Figma designer with a strong passion for building web solutions. I specialize in the MERN stack, ensuring that my projects are both efficient and visually compelling. Through continuous learning and hands-on experience, I stay updated with the latest trends in web development to deliver innovative solutions.</p>
          <Link to="/about">
            <button className='inline-flex text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded-full text-lg'>View Full Details</button>
          </Link>
        </div>
      </section>
      <section>
        <div className='px-5 py-24'>
          <h1 className="title-font text-3xl mb-4 font-semibold text-gray-900 text-center">
            Check Out My Skills
          </h1>
          <hr className='w-[150px] mb-3 -mt-2 border border-blue-600 mx-auto' />
          <div className="flex md:flex-row flex-col items-center" data-aos="fade-up">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img src="/mySkills.png" className="rounded w-full" alt="skills" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="mb-8 leading-relaxed justify-center md:justify-start flex items-center flex-row flex-wrap">
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">HTML</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">CSS</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">JavaScript</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Tailwind CSS</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Bootstrap</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">React Js</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Next Js</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Node Js</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Express Js</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">MongoDB</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">MERN Stack</button>
                <button className="py-1 px-3 hover:bg-blue-500 font-semibold m-2 border border-blue-500 bg-transparent rounded-md">Figma</button>
              </div>
              <div className="flex justify-center">
                <Link to="/about">
                  <button className='inline-flex text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded-full text-lg'>About Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up">
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img src="/portfolio.gif" className="rounded" alt="portfolio" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Take a Tour of My Work
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore my diverse portfolio showcasing various projects built using modern technologies like ReactJS, NextJS, and NodeJS. Each project highlights my ability to create dynamic, efficient, and scalable applications tailored to real-world needs.
            </p>
            <div className="flex justify-center">
              <Link to="/portfolio">
                <button className='inline-flex text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded-full text-lg'>See All Portfolio</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home