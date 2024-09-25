import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section>
        <div className="flex items-center justify-center flex-col w-full h-[150px] text-white bg-blue-400">
          <h2 className='text-5xl font-bold'>About Me</h2>
          <nav className="flex mt-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-black hover:text-blue-600">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-white md:ms-2">About</span>
                </div>
              </li>
            </ol>
          </nav>

        </div>
      </section>
      <section className="text-gray-600 body-font py-10 px-5">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed">Hello, I'm Muhammad Tayyeb, a web developer specializing in the MERN stack and a creative Figma designer. I build responsive, dynamic web applications with a focus on clean code and user-friendly design. My expertise spans HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, and MongoDB, ensuring full-stack solutions that are both functional and visually appealing.
              <br />
              My journey started with a passion for technology, which led me to transition from studying medical sciences to computer science. I completed my Matric in Medical in 2022 and FSc in Computer Science in 2024 from Government Higher Secondary School. This shift allowed me to follow my true passion for coding and design.
              <br />
              I love solving real-world problems through web development, constantly learning new technologies to stay updated with the latest industry trends. Whether it's building portfolios, web applications, or enhancing user experiences through design, I’m always striving to exceed expectations.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/mtayyebdev-bg.png" />
          </div>
        </div>
      </section>

      <section>
        <div className='px-5 py-24 '>
          <h1 className="title-font text-3xl mb-4 font-semibold text-gray-900 text-center">
            Education and Qualifications
          </h1>
          <hr className='w-[200px] mb-3 -mt-2 border border-blue-600 mx-auto' />
          <div className="flex mt-10 flex-col">
            <div className="flex relative pt-10 pb-20 w-full sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Matric in Medical - 2022</h2>
                  <p className="leading-relaxed">Government Higher Secondary School in 2022 Completed.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 w-full sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Start DIT - 2022</h2>
                  <p className="leading-relaxed">I started DIT Diploma after Matric Results and Start Wordpress Development in DIT after 2 months.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 w-full sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Start Web Development - 2023</h2>
                  <p className="leading-relaxed">I started Web Development in MERN Stack and Leave Wordpress Development.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 w-full sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">FSc in Computer Science - 2024</h2>
                  <p className="leading-relaxed">Government Higher Secondary School in 2024 Completed.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pb-20 w-full sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">5</div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Web Development</h2>
                  <p className="leading-relaxed">Continue...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='px-5 py-24'>
          <h1 className="title-font text-3xl mb-4 font-semibold text-gray-900 text-center">
            My Skills
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
    </>
  )
}

export default About