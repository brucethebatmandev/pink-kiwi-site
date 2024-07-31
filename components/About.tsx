import { Cake, CakeSlice, Dessert, Smile } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='grid gap-8 justify-center items-center m-5'>

      <h1 className='text-3xl'>Pink Kiwi Cafe</h1>

      <p>Fresh Cakes, Vegan Hot Desserts, Italian Gelatos, Sundaes, Premium Milk Shakes, Premium Waffles, Pan Cakes, Fruit Bubble Tea.</p>

      {/* Container for 3-sections and Ice Cream Image */}
      <div className='grid gap-16 lg:grid-cols-2 justify-center items-center _border-2 border-red-300 lg:p-10'>

        {/* Section Container - Icon, Header, Text */}
        <div className='grid gap-8 md:gap-14 max-h-[25rem] max-w-xl'>

          {/* Section 1 - Icon, Header, Text*/}
          <div className='flex gap-4'>
            <div className='flex justify-center items-center'>
              <div className='p-5 bg-pink-400/50 rounded-full'>
                <Cake className='w-12 h-12' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-xl'>Organic and Healthy Delights</h2>
              <p className='text-md'>Savor our guilt-free desserts crafted with organic ingredients for a delectable and healthy experience.</p>
            </div>
          </div>

          {/* Section 2 - Icon, Header, Text */}
          <div className='flex gap-4'>
            <div className='flex justify-center items-center'>
              <div className='p-5 bg-pink-400/50 rounded-full'>
                <CakeSlice className='w-12 h-12' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-xl'>Uncompromising Quality</h2>
              <p className='text-md'>Immerse yourself in desserts that embody exceptional taste and uncompromising quality at every bite.</p>
            </div>
          </div>

          {/* Section 3 - Icon, Header, Text */}
          <div className='flex gap-4'>
            <div className='flex justify-center items-center'>
              <div className='p-5 bg-pink-400/50 rounded-full'>
                <Dessert className='w-12 h-12' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-xl'>Exquisite Taste Sensations</h2>
              <p className='text-md'>Explore our dessert creations that tantalize the palate with innovative flavors and impeccable craftsmanship.</p>
            </div>
          </div>

        </div>

        {/* Ice cream Image */}
        <div className='max-w-[40rem]'>
          <img src="https://thedesserts.co.uk/images/about.png" alt="" />
        </div>

      </div>



    </div>
  )
}

export default About