import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import { CakeSlice, IceCreamBowl, IceCreamCone } from 'lucide-react'

const Menu = () => {
  return (
    <div id='menu' className='my-24 grid lg:grid-cols-2 gap-24 lg:gap-0'>

      <div className='col-span-1 m-auto lg:order-last'>

        <div className='grid gap-10 max-w-md'>

          <div className='grid gap-4'>
            <h1 className='text-3xl'>Our Delicious Menu</h1>
            <p>Experience the exquisite flavors and exceptional quality of our diverse dessert menu</p>
          </div>

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

      <div className='col-span-1 m-auto lg:order-first'>
        <img
          // src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
          src='/img/breakfast-spread-1.jpg'
          alt=""
          className='rounded-xl shadow-md aspect-square max-w-[25rem] max-h-[25rem] object-cover'
        />
      </div>

    </div>
  )
}

export default Menu