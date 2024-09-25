import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {toast} from "react-toastify"

function Contact() {
  const [Name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Message, setMessage] = useState("")

  const sendHandler = async (e) => {
    e.preventDefault()

    const formData = {
      Name: Name,
      email: email,
      Message: Message,
    };

    emailjs.send('service_d0ris9i', 'template_qoqjf8y', formData, 'Pzl7j3GHMpcreSWOe')
      .then((data) => {
        toast.success("Message sent successfully!")
      }).catch((err) => {
        toast.error("Failed to send message. Please try again.");
      })

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <section className="mb-20">
        <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26420.780559343242!2d72.43500684498761!3d34.131050904061034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deef747aaa83bb%3A0x2b89195da1793f3b!2sSwabi%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727197763554!5m2!1sen!2s"
            width="100%" height="480" className='border-0' allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={sendHandler}>
                  <div className="relative mb-6">
                    <label
                      className="font-semibold"
                      htmlFor="exampleInput90">Name
                    </label>
                    <input type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput90" required />


                  </div>
                  <div className="relative mb-6">
                    <label
                      className="font-semibold"
                      htmlFor="exampleInput91">Email address
                    </label>
                    <input type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91" />

                  </div>
                  <div className="relative mb-6">
                    <label htmlFor="exampleFormControlTextarea1"
                      className="font-semibold">Message</label>
                    <textarea
                      required
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1" rows="3"></textarea>

                  </div>
                  <button type="submit"
                    className="mb-6 w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0">
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-blue-600 p-4 text-white">
                          <i className='fa-solid fa-envelope text-xl'></i>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">
                          Email Id
                        </p>
                        <p className="text-sm text-neutral-500">
                          tayyabkhank1234@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-blue-600 p-4 text-white">
                          <i className='fa-solid fa-phone text-xl'></i>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">
                          Phone
                        </p>
                        <p className="text-sm text-neutral-500">
                          (+92) 3368212215
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-blue-600 p-4 text-white">
                          <i className='fa-solid fa-map-location text-xl'></i>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Country</p>
                        <p className="text-neutral-500">
                          Pakistan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-blue-600 p-4 text-white">
                          <i className='fa-solid fa-map-location text-xl'></i>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-neutral-500">
                          KPK, Swabi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact