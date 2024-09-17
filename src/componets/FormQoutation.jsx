import { Container } from '@mui/material'
import React from 'react'

const FormQoutation = () => {
  return (
    <div>
      <section className="bg-slate-200">
        <Container className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from
                manufacturer and other group control gives you confidence that we will only recommend what
                is right for you.
                </p>

                <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600"> +971 54 559 2064
                </a>

                <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">fatima@afsonsfzco.com </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">+971 50 650 5072</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  Office Address: E-17, Dubai Airport Freezone DAFZA, <br /> Dubai
                  U.A.E
                  </address>
                </li>
              </ul>
                </div>
            </div>

            <div className="bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full border-[1px] border-slate-300 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full border-[1px] border-slate-300 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full border-[1px] border-slate-300 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer border border-[1px] border-slate-300 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 1 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer border border-[1px] border-slate-300 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 2 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer border border-[1px] border-slate-300 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 3 </span>
                    </label>
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="w-full border-[1px] border-slate-300 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                    type="submit"
                    className="inline-block w-full bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                    Send Enquiry
                    </button>
                </div>
                </form>
            </div>
            </div>
        </Container>
        </section>
    </div>
  )
}

export default FormQoutation
