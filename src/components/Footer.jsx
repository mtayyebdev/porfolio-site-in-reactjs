import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer className="bg-white w-full px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center">
              <img
                src="/tdlogo.png"
                alt="Tayyeb Dev logo"
                className="h-[45px] w-[45px] rounded-full"
              />
              <h3 className="text-xl font-semibold ms-4">Tayyeb Dev</h3>
              <span className="w-[1px] hidden sm:flex h-[50px] ms-4 border border-gray-400"></span>
            </div>
            <span className="text-sm ms-0 mt-3 sm:mt-0 sm:ms-5 text-gray-500 flex items-center sm:text-center">
              Copyright &copy; {new Date().getFullYear} TayyebDev
            </span>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse text-xl">
            
            <Link
              href="https://github.com/mtayyebdeveloper/"
              className="text-gray-900 hover:text-blue-700"
              target='_blank'
            >
              <i className='fa-brands fa-github'></i>
              <span className="sr-only">Github page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-tayyeb-0247692b2"
              className="text-blue-600 hover:text-blue-700"
              target='_blank'
            >
              <i className='fa-brands fa-linkedin'></i>
              <span className="sr-only">LinkedIn page</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer