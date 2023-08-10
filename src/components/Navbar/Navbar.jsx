'use client'
 
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div>
            <nav className='w-full bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50 top-0 left-0 right-0 z-10'>
                <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>

                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>

                        {/* logo */}
                        <Link href='/'>
                            <h2 className='text-2xl text-yellow-600 font-bold scale-100 hover:scale-110 hover:ease-in duration-500 ... hover:text-gray-500 ...'>Online Translator</h2>
                        </Link>

                        {/* Hamburger button for mobile */}
                        <div className='md:hidden'>
                            <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                onClick={() => setNavbar(!navbar)}
                            >
                                {
                                    navbar ? (
                                        <MdClose className='text-2xl'/>
                                    ) : (
                                        <GiHamburgerMenu className='text-2xl'/>
                                    )
                                }
                            </button>
                        </div>
                    </div>



                    {/* Menu Items */} 
                    <div className={`flex items-center justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                        <ul className='h-screen md:h-auto items-center justify-center md:flex gap-8'>
                            <li className='font-semibold scale-100  hover:scale-110 hover:ease-in duration-500 ... uppercase  hover:text-yellow-600 ...'>
                                <Link href='/' onClick={() => setNavbar(!navbar)}>
                                    Home
                                </Link>
                            </li>
                            <li className='font-semibold uppercase scale-100  hover:scale-110 hover:ease-in duration-500 ... hover:text-yellow-600 ...'>
                                <Link href='/translator' onClick={() => setNavbar(!navbar)}>
                                    Translator
                                </Link>
                            </li>
                            <li className='font-semibold scale-100  hover:scale-110 hover:ease-in duration-500 ... uppercase  hover:text-yellow-600 ...'>
                                <Link href='/languages' onClick={() => setNavbar(!navbar)}>
                                    Languages
                                </Link>
                            </li>
                            <li className='font-semibold scale-100  hover:scale-110 hover:ease-in duration-500 ... uppercase  hover:text-yellow-600 ...'>
                                <Link href='/features' onClick={() => setNavbar(!navbar)}>
                                    Features
                                </Link>
                            </li>
                            <li className='font-semibold scale-100  hover:scale-110 hover:ease-in duration-500 ... uppercase  hover:text-yellow-600 ...'>
                                <Link href='/about-us' onClick={() => setNavbar(!navbar)}>
                                    About Us
                                </Link>
                            </li>

                            <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:text-gray-100 md:bg-transparent'>
                                <div className='md:mt-3' >
                                    <button className='btn btn-outline btn-default '>log in</button>
                                </div>
                            </li>



                        </ul>
                    </div>



                </div>

            </nav> 
        </div>
    );
};

export default Navbar;