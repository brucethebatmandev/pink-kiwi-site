const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2">

            <div className="col-span-1 bg-cyan-600 text-white">

                <div className="flex flex-col gap-4 lg:gap-0 place-items-center h-full outline-2 outline-pink-400 py-6">

                    {/* Navbar - 20% of the column */}
                    <ul className="flex gap-6 text-md max-w-md w-full flex-[0_0_5%] _bg-yellow-500 justify-center lg:justify-start _justify-start ">
                        <li className="hover:cursor-pointer">Menu</li>
                        <li className="hover:cursor-pointer">About</li>
                        <li className="hover:cursor-pointer">Gallery</li>
                        <li className="hover:cursor-pointer">Contact</li>
                        <li className="hover:cursor-pointer">Order</li>
                    </ul>

                    {/* Content - 80% of the column */}
                    <div className="flex flex-col justify-center items-center flex-[0_0_95%] gap-10 lg:gap-14 max-w-md w-full mb-10">
                        <div className="text-5xl xl:text-6xl font-semibold w-full text-center lg:text-left">
                            <h1 className="mb-3">We offer a fresh</h1>
                            <h1>Place and Food.</h1>
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

                {/* Hero Image */}
                <img src="https://www.riseandgrind.co/wordpress/wp-content/uploads/2021/03/disposable-cup-rise-and-grind-4.jpg"  className="h-full min-h-[25rem] object-cover"/>
            </div>

        </div>
    )
}

export default Hero