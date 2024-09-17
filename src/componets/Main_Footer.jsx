import { Container } from "@mui/material";
import React from "react";

const Main_Footer = () => {
  return (
    <>
      <div className=" py-[80px]">
        <Container>
          {/* <img src={require("../image/asset 0.png")} width={150} alt="" /> */}
          <h1 className=" font-bold text-[30px]">
            AFSONS <span className="text-yellow-500">FZCO</span>
          </h1>
          <div className="grid grid-cols-7 justify-between pt-[60px] gap-10">
            <div className="col-span-3">
              <p className=" text-[#999999] text-[22px] font-normal mb-4">
                Got Question? Call us 24/7
              </p>

              <p className="text-sm">
              Located in the heart of Dubai’s vibrant tech trading hub, we pride ourselves on building long-lasting partnerships with businesses around the globe. Whether you are a wholesaler, retailer, or a startup, AFSons FZCO is here to support your growth with the best electronics solutions.
              </p>
              {/* <h5 className=" font-normal text-[25px] pb-[20px]">
                +971 50 650 5072
              </h5> */}
              {/* <span className="text-[#777777]">
                Office Address: E-17, Dubai Airport Freezone DAFZA, <br /> Dubai
                U.A.E
              </span> */}
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

                    <span className="flex-1 text-gray-700">admin@afsonsfzco.com	</span>
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
            <div className="col-span-3">
              <p className=" text-[22px] text-[#999999] font-light">We Using</p>
              <b className="text-[22px] font-normal">Safe Payments</b>
              <div className=" flex pt-[20px] gap-7">
                <img src={require("../image/footer-1.png")} alt="" />
                <img src={require("../image/footer-2.png")} alt="" />
                <img src={require("../image/footer-3.png")} alt="" />
              </div>
              <p className=" py-[50px]">Secured by:</p>
              <div className=" flex gap-4">
                <img src={require("../image/footer-4.png")} alt="" />
                <img src={require("../image/footer-5.png")} alt="" />
              </div>
            </div>
            {/* <div>
              <h4 className=" font-semibold pb-[20px] text-[20px]">
                Our Stores
              </h4>
              <div className=" leading-9 text-[#777777] font-semibold">
                <p>New York</p>
                <p>London SF</p>
                <p>Cockfosters BP</p>
                <p>Los Angeles</p>
                <p>Chicago</p>
                <p>Las Vegas</p>
                <p>Albarto</p>
              </div>
            </div> */}
            <div>
              <h4 className=" font-semibold pb-[20px] text-[20px]">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3 leading-9 text-[#777777] font-semibold text-md">
                <a href="" className="text-sm text-dark hover:text-yellow-500">Support Center</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">Term & Conditions</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">Shipping</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">Privacy Policy</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">Help</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">Products Return</a>
                <a href="" className="text-sm text-dark hover:text-yellow-500">FAQS</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main_Footer;
