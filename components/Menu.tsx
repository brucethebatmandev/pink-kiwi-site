import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import { CakeSlice, IceCreamBowl, IceCreamCone } from 'lucide-react'

const Menu = () => {
  return (
    <div className='grid gap-8 justify-center m-5 border-2 border-red-300'>

      {/* Menu Section */}
      <div className='grid gap-4'>
        <h1 className='text-3xl'>Our Delicious Menu</h1> {/* What we offer */}
        <p>Experience the exquisite flavors and exceptional quality of our diverse dessert menu</p>
      </div>

      <div className='grid gap-8 md:gap-14 max-h-[25rem] max-w-xl'>
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


    </div>
  )
}

export default Menu