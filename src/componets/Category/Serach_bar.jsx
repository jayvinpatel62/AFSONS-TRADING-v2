
import { Container } from '@mui/material';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoMenu, IoSearch } from 'react-icons/io5';
const list = require("./list.json")
const list1 = require("./list1.json")

const Serach_bar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isall, setIsAll] = useState(true)

    return (
        <>
            <div className=' py-[30px]'>
                <Container>
                    <div className='flex items-stretch justify-between'>
                        <div className='relative w-[250px] h-full items-stretch justify-between rounded'>
                            <button onClick={() => setIsOpen((prev) => !prev)} className='bg-yellow-400 px-5 py-4 w-full flex items-center justify-between font-bold text-lg rounded tracking-wider border-none text-white border-transparent duration-300 '><IoMenu className=' text-[25px] items-center' />All Categories
                                {!isOpen ? (
                                    <IoIosArrowUp className='h-8 ' />
                                ) : (
                                    <IoIosArrowDown className=' h-8' />
                                )
                                }
                            </button>
                            {!isOpen && <div className='bg-white items-start top-16 flex flex-col rounded-lg p-2 w-full cursor-pointer absolute z-10'>
                                {list.map((item, i) => (
                                    <div key={i} className='border-b p-3 font-semibold w-full border-[#EDEDED] duration-200 rounded-lg m-[2px] hover:text-black hover:bg-sky-300'>
                                        <h3>{item.product}</h3>
                                    </div>
                                ))}
                            </div>}
                        </div>

                        <div className='flex border rounded-lg'>
                             <input type="text" placeholder='Find your product' className='flex items-start px-5 py-3 text-lg  tracking-wider w-[300px] p-[16px] duration-300 border-r' />
                            <div className='relative  w-[190px] items-center justify-between rounded'>
                                <button onClick={() => setIsAll((prev) => !prev)} className='px-5 py-3 w-full flex items-center justify-between text-md rounded tracking-wider border-none text-[#7B7B7B] border-transparent duration-300 text-[15px] pt-4 font-semibold'>All Categories
                                    {!isall ? (
                                        <IoIosArrowUp className='h-8 ' />
                                    ) : (
                                        <IoIosArrowDown className=' h-8' />
                                    )
                                    }
                                </button>
                                {!isall && <div className='items-start top-16 flex flex-col rounded-lg p-2 w-full cursor-pointer absolute z-10  bg-[#3B69DD] text-white'>
                                    {list1.map((item, i) => (
                                        <div key={i} className=' font-semibold w-full duration-200 hover:bg-yellow-400 p-1 rounded hover:text-black'>
                                            <h3>{item.product}</h3>
                                        </div>
                                    ))}
                                </div>}
                            </div>
                            <div>
                                <div className='flex items-center h-full align-align-content-center px-5 py-5 bg-yellow-400 text-[20px]'>
                                <IoSearch className='text-white '/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className='p-5 h-full text-[#212121] bg-yellow-500 rounded w-[250px] py-1 font-bold transition-all duration-300 hover:text-white '>BLACK FRIDAY <br /> <span className='text-slate-800  hover:text-white text-[12px]'>Get 45% Off !</span></button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Serach_bar
