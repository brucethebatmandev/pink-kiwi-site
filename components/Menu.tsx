import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import { CakeSlice, IceCreamBowl, IceCreamCone } from 'lucide-react'

const Menu = () => {
  return (
    <div id='menu' className='grid gap-8 justify-items-center mx-5 my-24'>

      {/* Menu Section */}
      <div className='grid gap-4'>
        <h1 className='text-3xl'>Our Delicious Menu</h1>
        <p>Experience the exquisite flavors and exceptional quality of our diverse dessert menu</p>
      </div>

      {/* Container for 3-sections and Ice Cream Image */}
      <div className='grid gap-16 lg:grid-cols-2 justify-items-center items-center lg:p-10'>

        {/* 3 Sections - IconTextBlocks */}
        <div className='grid gap-8 md:gap-14 max-h-[25rem] max-w-xl lg:order-2'>
          <IconWithTextBlock
            icon={CakeSlice}
            heading='Fresh Cakes'
            text='Indulge in our freshly baked cakes, crafted with the finest ingredients for pure mouthwatering delight'
          />
          <IconWithTextBlock
            icon={IceCreamBowl}
            heading='Vegan Hot Desserts'
            text='Experience the warmth of our delectable vegan desserts, with flavors that will comfort and satisfy'
          />
          <IconWithTextBlock
            icon={IceCreamCone}
            heading='Italian Gelatos'
            text='Transport yourself to Italy with our creamy gelatos, made with authentic recipes and exquisite ingredients'
          />
        </div>

        {/* Ice cream Image */}
        <div className='max-w-[25rem] lg:order-1'>
          <img 
            src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg" 
            alt="" 
            className='rounded-xl shadow-md aspect-square' 
          />
        </div>

      </div>

    </div>
  )
}

export default Menu