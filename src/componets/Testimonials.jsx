import { Container } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import { Star } from "@mui/icons-material";
import { IoIosStar } from "react-icons/io";

import avatar1 from '../image/avatar/avatar (1).jpg'
import avatar2 from '../image/avatar/avatar (2).jpg'
import avatar3 from '../image/avatar/avatar (3).jpg'
import avatar4 from '../image/avatar/avatar (4).jpg'
import avatar5 from '../image/avatar/avatar (5).jpg'
import avatar6 from '../image/avatar/avatar (6).jpg'

const Testimonials = () => {
  return (
    <div className="bg-slate-200 py-[100px]">
      <Container>
        <h1 className="text-4xl font-bold text-center pb-10">What is everyone saying?</h1>
        <div className="testimonial-slider">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Scrollbar]}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar1} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar2} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar3} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar4} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar5} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-item bg-white p-10 rounded-lg">
                <div className="flex gap-2">
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                  <IoIosStar className="text-orange-400" size={20} />
                </div>
                <div className="text-left px-[10px] py-10">
                  <p className="text-[18px] text-[#73787F]">
                    Dolores porro laboriosam molestias est quo. Et et eos. Ab
                    error modi labore sed eaque est. Quaerat aut est fugiat.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] rounded-full overflow-clip">
                        <img src={avatar6} alt="" />
                    </div>
                    <div className="author">
                        <h5 className="text-[14px] font-bold">
                        Alice Johnson
                        </h5>
                        <p className="text-[12px] text-[#73787F]">
                        Manager
                        </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
