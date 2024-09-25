import React,{useState} from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  const [navOpen, setnavOpen] = useState(false)
  return (
    <>
      <header
        className="bg-white sticky shadow-md w-full z-20 top-0"
      >
        <nav>
          <div
            className="top-nav py-2 px-4 mx-auto w-full flex items-center justify-between border-b border-gray-200"
          >
            <div className="phone flex items-center">
              <i className="fa-solid fa-phone text-lg md:text-xl"></i>
              <p className="ms-2 font-semibold">+92 3368212215</p>
            </div>
            <div className="icons flex items-center gap-4">
              <Link to="https://github.com/mtayyebdeveloper/" target='_blank'>
                <i
                  className="fa-brands fa-github text-xl text-gray-900 hover:text-blue-800"
                ></i>
              </Link>
              <Link to="https://www.linkedin.com/in/muhammad-tayyeb-0247692b2" target='_blank'>
                <i
                  className="fa-brands fa-linkedin text-xl text-blue-700 hover:text-blue-800"
                ></i>
              </Link>
            </div>
          </div>
          <div
            className="w-full flex flex-wrap items-center justify-between mx-auto p-2"
          >
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/tdlogo.png" className="w-10 md:w-14" alt="T D Logo" />
              <span
                className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap"
              >Tayyeb Dev</span>
            </Link>
            <div
              className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse"
            >
              <Link to="/contact" className="hidden md:block">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Contact Me
                </button>
              </Link>
              <button
              onClick={()=>setnavOpen(!navOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
            <div
              className={`items-center ${navOpen?"block":"hidden"} justify-between w-full md:flex md:w-auto md:order-1`}
            >
              <ul
                className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
              >
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >Portfolio</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >About</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header