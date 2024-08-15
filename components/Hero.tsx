"use client"

import Navbar from "./Navbar"

const Hero = () => {
    return (
        <div className="_relative grid lg:grid-cols-2">

            <div className="_relative col-span-1 bg-cyan-600 text-white space-y-10 pb-24">

                {/* <Navbar /> */}

                <div className="relative flex flex-col gap-4 lg:gap-0 place-items-center h-full mx-auto px-8 sm:px-0 space-y-16 lg:space-y-10">

                    <Navbar />

                    <div className="max-w-md flex flex-col items-center lg:items-start justify-center  flex-[0_0_95%] gap-10 w-full mb-10">
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

            <div className="col-span-1 h-full">
                <img 
                    // src="/img/disposable-cup.jpg" 
                    src="https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    className="h-full _min-h-[25rem] object-cover bg-right-bottom sm:bg-center" />
            </div>

        </div>
    )
}

export default Hero