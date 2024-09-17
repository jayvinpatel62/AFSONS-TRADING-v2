import { Container } from '@mui/material';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Main_Navbar = () => {
    return (
        <>
         <header className="bg-white">
                <Container>
                <div className="mx-auto max-w-screen-xl">
                    <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-slate-900" href="#">
                            <h2 className='font-bold text-2xl'>AFSONS <span className='text-yellow-500'>FZCO</span></h2>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-md font-semibold uppercase ">
                            <li>
                            <a className="text-slate-900 transition hover:text-yellow-500" href="#"> About </a>
                            </li>
                            <li>
                            <a className="text-slate-900 transition hover:text-yellow-500" href="#"> Services </a>
                            </li>

                            <li>
                            <a className="text-slate-900 transition hover:text-yellow-500" href="#"> Shop </a>
                            </li>

                            <li>
                            <a className="text-slate-900 transition hover:text-yellow-500" href="#"> Blog </a>
                            </li>

                            <li>
                            <a className="text-slate-900 transition hover:text-yellow-500" href="#"> Contact </a>
                            </li>
                        </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                        <FaRegHeart />

                        <div className="hidden sm:flex">
                        <HiOutlineShoppingBag />

                        </div>
                        </div>

                        <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
            </header>
{/* 
            <Container>
             <div className=' flex footer h-[100px] justify-between'>
                <div className=''>
                    <h1 className=' font-bold text-[30px]'>AFSONS</h1>
                </div>
                <div>
                    <ul className=' flex gap-14 font-semibold'>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className=' flex text-[35px] gap-5' >

                    <FaRegHeart />
                    <HiOutlineShoppingBag />
                </div>
            </div>
            </Container> */}
        </>
    )
}

export default Main_Navbar

