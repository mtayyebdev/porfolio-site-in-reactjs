import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <ToastContainer autoClose={2000}/>
      <Header />
      <div className='container mx-auto'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App