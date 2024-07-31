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
        <div className="absolute z-10 w-full">
            <div className=" flex justify-between px-5 py-5 text-lg font-semibold bg-transparent __bg-pink-500/65 text-white">
                <Link href="/">
                    <img
                        className="rounded-full max-w-16"
                        src="/img/pink-kiwi-logo.jpg"
                    />
                </Link>


                <div className="flex gap-8 justify-center items-center">
                    <div className="flex gap-2">
                        <Link href="#">
                            <p>Menu</p>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="#">
                            <p>Gallery</p>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="#">
                            <p>About</p>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="#">
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Link href="#">
                            <p>Order</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}