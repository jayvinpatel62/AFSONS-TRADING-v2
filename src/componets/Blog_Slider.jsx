import { Container } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import Blog_Item from './Blog_Item';


import Blog_img1 from '../image/blogs/blog-electronics-1_1200x.jpg'
import Blog_img2 from '../image/blogs/blog-electronics-2_1200x.jpg'
import Blog_img3 from '../image/blogs/blog-electronics-3_1200x.jpg'

const Blog_Slider = () => {
  return (
    <div className="py-[100px]">
        <Container>
            <h1 className="text-4xl font-bold text-center">Latest Blog</h1>
            <br />
            <br />
            <div className="blog-slider">
                <Swiper
                autoplay={{
                    delay: 1500,
                }}
                slidesPerView={3}
                spaceBetween={30}
                scrollbar={{ draggable: true }}
                modules={[Autoplay, Scrollbar]}
                >
                <SwiperSlide>
                    <Blog_Item
                    img={Blog_img1}
                    category="Device"
                    date="June 24, 2021"
                    creator="Artureanec"
                    title="Unveiling Possibilities: A Deep Dive into the World of Tablets"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Item
                    img={Blog_img2}
                    category="Camera"
                    date="June 24, 2021"
                    creator="Artureanec"
                    title="Beyond the Screen: Navigating the World of Smartphones"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Item
                    img={Blog_img3}
                    category="Electronics"
                    date="Apr 24, 2021"
                    creator="Artureanec"
                    title="Unleashing Wireless Freedom: The Ultimate Guide to Bluetooth Earphones"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Blog_Item
                    img={Blog_img1}
                    category="Device"
                    date="June 24, 2021"
                    creator="Artureanec"
                    title="Unveiling Possibilities: A Deep Dive into the World of Tablets"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ..."
                    />
                </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    </div>
  );
};

export default Blog_Slider;
