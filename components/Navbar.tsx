"use client"


import * as React from "react"
import Link from "next/link"
import { House, Image, Images, Mail, NotebookPen, ShoppingCart } from "lucide-react"

// create navlinks to include icons
const NavLink = () => {
    return (
        <div className="flex gap-2">
            <House />
            <Link href="/">
                <p>Menu</p>
            </Link>
        </div>
    )
}

export const Navbar = () => {

    return (
        <div className="flex justify-between px-5 py-5 text-lg font-semibold bg-pink-600 text-white">

            <img 
                className="rounded-full max-w-16"
                src="/img/pink-kiwi-logo.jpg" 
            />

            <div className="flex gap-8 justify-center items-center">
                <div className="flex gap-2">
                    <Link href="/">
                        <p>Menu</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <p>Gallery</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <p>About</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <p>Contact</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <p>Order</p>
                    </Link>
                </div>
                {/* <Link href="/">
                    <p>Menu</p>
                </Link> */}
                {/* <Link href="/">
                    <p>Gallery</p>
                </Link>
                <Link href="/">
                    <p>About</p>
                </Link>
                <Link href="/">
                    <p>Contact</p>
                </Link>
                <Link href="/">
                    <p>Order</p>
                </Link> */}
            </div>

        </div>
    )
}