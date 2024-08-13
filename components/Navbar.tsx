'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='absolute z-10 w-full py-4 px-4 bg-pink-500/65 text-gray-300'>

            <div className='flex justify-between items-center'>
                {/* Logo */}
                <Link href="/">
                    <img
                        className="rounded-full max-w-16"
                        src="/img/pink-kiwi-logo.jpg"
                    />
                </Link>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars className='hover:cursor-pointer' size={22} /> : <FaTimes className='hover:cursor-pointer' size={22} />}
                </div>

                {/* menu */}
                <ul className='hidden md:flex gap-8 '>
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
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <ScrollLink onClick={handleClick} to='menu' smooth={true} duration={500}>
                        Menu
                    </ScrollLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <ScrollLink onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <ScrollLink onClick={handleClick} to='gallery' smooth={true} duration={500}>
                        Gallery
                    </ScrollLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <ScrollLink onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </ScrollLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <ScrollLink onClick={handleClick} to='order' smooth={true} duration={500}>
                        Order
                    </ScrollLink>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;
