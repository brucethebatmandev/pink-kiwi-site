const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2">

            <div className="col-span-1 bg-blue-900 text-white">

                <div className="flex flex-col justify-between items-center py-4 outline-2 outline-pink-400 outline h-full">

                    {/* Navbar */}
                    <ul className="flex gap-6 text-lg max-w-md w-full outline-2 outline-yellow-500 outline">
                        <li>Menu</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                        <li>Order</li>
                    </ul>

                    {/* Content */}
                    <div className="grid gap-10 _justify-items-center max-w-md w-full py-20 outline-2 outline-red-500 outline">
                        <div className="text-6xl font-semibold">
                            <h1>We offer a fresh</h1>
                            <h1>Place and Food.</h1>
                        </div>

                        <p className="text-lg">
                            Pink Kiwi. We offer fresh food and dessert based on high quality ingredients with a perfect place.
                        </p>

                        <button className="bg-stone-300 text-gray-800 shadow-lg font-semibold px-5 py-3 rounded-xl max-w-32">
                            View Menu
                        </button>
                    </div>

                </div>


            </div>

            <div className="col-span-1 max-w-screen-lg">

                {/* Hero Image */}
                <img src="https://www.riseandgrind.co/wordpress/wp-content/uploads/2021/03/disposable-cup-rise-and-grind-4.jpg" />
            </div>

        </div>
    )
}

export default Hero