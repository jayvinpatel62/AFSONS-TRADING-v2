import { Container } from "@mui/material";
import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { PiCameraBold } from "react-icons/pi";
import { RiGogglesLine } from "react-icons/ri";

const AboutHome = () => {
  return (
    <div className="pb-[100px]">
      <Container>
        <section>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
             

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              

                <a
                  className="block border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaMobileAlt size={25} />
                  </span>

                  <h2 className="mt-2 font-bold">Mobile Phones</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Get access to bulk quantities of the latest smartphones from leading brands such as Apple, Samsung, and more.

                  </p>
                </a>

                <a
                  className="block border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <PiCameraBold size={25}/>
                  </span>

                  <h2 className="mt-2 font-bold">GoPro Cameras</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Perfect for resellers, our GoPro camera auctions offer bulk lots at competitive prices, ensuring you have access to the best action cameras in the market.
                  </p>
                </a>

                <a
                  className="block border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <FaLaptop size={25}/>
                  </span>

                  <h2 className="mt-2 font-bold">Laptops</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  From ultrabooks to gaming laptops, we offer bulk deals on top laptop brands, ensuring a wide selection for every business need.

                  </p>
                </a>

                <a
                  className="block border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <RiGogglesLine size={25}/>
                  </span>

                  <h2 className="mt-2 font-bold">Apple Goggles</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Stay ahead of the tech curve with auctions for Apple’s cutting-edge AR/VR products, perfect for businesses seeking the newest innovations.
Why Choose Our Auctions?

                  </p>
                </a>
              </div>
              <div className="mx-auto max-w-lg text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl">
                Auctions
                </h2>

                <p className="mt-4 text-gray-600">
                At AFSons FZCO, we offer exclusive auction opportunities for bulk quantities of high-demand electronics, including mobile phones, GoPro cameras, laptops, and the latest Apple products like Apple Goggles. Our auctions are designed to provide businesses with unbeatable prices on top-quality electronics, allowing you to maximize value while keeping your inventory stocked with the latest technology.

                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-yellow-500 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center">
                  <h2 className="text-2xl font-bold text-white md:text-3xl uppercase">
                    About AFSONS FZCO
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Welcome to AFSons FZCO, your trusted partner in mobile and electronics trading. With years of expertise, we specialize in sourcing and supplying a wide range of mobile phones and other electronic devices. Whether you're looking to buy in bulk or searching for the latest models, we offer competitive pricing and high-quality products tailored to your business needs.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <a
                      href="#"
                      className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-yellow-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1516970898726-16f077cf78d7?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-[600px] lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1532603162520-4dd33af198f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
                <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                </h2>

                <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                    esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                    href="#"
                    className="mt-8 inline-block rounded border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-500 focus:outline-none focus:ring active:text-indigo-500"
                >
                    Get in Touch
                </a>
                </div>
            </div>
            </div>
        </div>
        </section> */}
      </Container>
    </div>
  );
};

export default AboutHome;
