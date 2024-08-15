'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='absolute z-10 w-full pt-6 transparent text-white text-md font-semibold xl:text-lg sm:max-w-md'>

            <div className='flex justify-end sm:justify-center lg:justify-start items-center pr-6 sm:pr-0'>

                {/* Hamburger */}
                <div onClick={handleClick} className='sm:hidden z-10'>
                    {!nav ? <FaBars className='hover:cursor-pointer' size={30} /> : <FaTimes className='hover:cursor-pointer' size={30} />}
                </div>

                {/* menu */}
                <ul className='hidden sm:flex gap-8'>
                    <li>
                        <ScrollLink className='hover:cursor-pointer' to='menu' smooth={true} duration={500}>
                            Menu
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='hover:cursor-pointer' to='about' smooth={true} duration={500}>
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='hover:cursor-pointer' to='gallery' smooth={true} duration={500}>
                            Gallery
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='hover:cursor-pointer' to='contact' smooth={true} duration={500}>
                            Contact
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='hover:cursor-pointer' to='order' smooth={true} duration={500}>
                            Order
                        </ScrollLink>
                    </li>
                </ul>
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-cyan-700 flex flex-col justify-center items-center text-4xl space-y-12'
                }
            >
                <li className='hover:cursor-pointer'>
                    <ScrollLink onClick={handleClick} to='menu' smooth={true} duration={500}>
                        Menu
                    </ScrollLink>
                </li>
                <li className='hover:cursor-pointer'>
                    <ScrollLink onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li className='hover:cursor-pointer'>
                    <ScrollLink onClick={handleClick} to='gallery' smooth={true} duration={500}>
                        Gallery
                    </ScrollLink>
                </li>
                <li className='hover:cursor-pointer'>
                    <ScrollLink onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </ScrollLink>
                </li>
                <li className='hover:cursor-pointer'>
                    <ScrollLink onClick={handleClick} to='order' smooth={true} duration={500}>
                        Order
                    </ScrollLink>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;
