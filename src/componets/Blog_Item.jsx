import React from 'react'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
// import classNames from 'classnames';

const Blog_Item = ({  img, category, date, creator, title, desc }) => {
  return (

    <div className='blog-item'>
        <div className='imgBox relative w-full h-[250px] max-h-[250px] overflow-clip'>
            <img className='bg-cover w-full h-full hover:scale-110' src={img} />
        </div>
        <div className="content bg-[#fff] py-[20px] text-left">
            {/* <div className='category p-2 px-10 bg-primary text-slate-500 '>
                <a href=''>{category}</a>
            </div> */}
            <div className='flex gap-2 items-center'>
              <SlCalender/>
            <span className=' text-[15px] text-slate-600 '>{date} / by {creator}</span>

            </div>
            <br />
            <a href='' className=' pt-[10px] font-bold text-[17px]'>{title}</a>
            <p className=' pt-[15px] text-[#6A6E76] leading-6'>{desc}</p>
        </div>
    </div>

   
  );
};

Blog_Item.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string,
  creatorL:PropTypes.string,
};


export default Blog_Item;
