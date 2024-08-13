"use client"
import { Link } from "react-scroll"

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2">

            <div className="col-span-1 bg-cyan-600 text-white">
                <div className="flex flex-col gap-4 lg:gap-0 place-items-center h-full outline-2 outline-pink-400 py-6">

                    <ul className="flex gap-6 2xl:gap-10 text-md font-semibold xl:text-lg max-w-md w-full flex-[0_0_5%] justify-center lg:justify-start">
                        <li className="hover:cursor-pointer">
                            <Link to="menu" smooth={true} duration={500}>Menu</Link>
                        </li>
                        <li className="hover:cursor-pointer">
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="hover:cursor-pointer">
                            <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
                        </li>
                        <li className="hover:cursor-pointer">
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                        <li className="hover:cursor-pointer">Order</li>
                    </ul>

                    <div className="flex flex-col items-center lg:items-start justify-center  flex-[0_0_95%] gap-10 max-w-md w-full mb-10">
                        <div className="text-5xl xl:text-6xl font-semibold w-full text-center lg:text-left">
                            <h1>Pink Kiwi</h1>
                        </div>

                        <p className="text-lg text-center lg:text-left">
                            We offer fresh food and dessert based on high quality ingredients with a perfect place.
                        </p>

                        <button className="bg-pink-400/90 text-white shadow-lg font-bold px-5 py-3 rounded-xl w-32">
                            View Menu
                        </button>
                    </div>

                </div>
            </div>

            <div className="col-span-1 _max-w-screen-lg h-full bg-yellow-100">
                <img src="https://www.riseandgrind.co/wordpress/wp-content/uploads/2021/03/disposable-cup-rise-and-grind-4.jpg" className="h-full min-h-[25rem] object-cover" />
            </div>

        </div>
    )
}

export default Hero