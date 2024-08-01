import { Salad, Sandwich, Soup } from 'lucide-react'
import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'

const About = () => {
  return (
    <div className='grid gap-8 justify-center m-5'>

      <div className='grid gap-4'>
        <h1 className='text-3xl'>Pink Kiwi Cafe</h1>
        <p>Fresh Cakes, Vegan Hot Desserts, Italian Gelatos, Sundaes, Premium Milk Shakes, Premium Waffles, Pan Cakes, Fruit Bubble Tea.</p>
      </div>

      {/* Container for 3-sections and Ice Cream Image */}
      <div className='grid gap-16 lg:grid-cols-2 justify-center items-center lg:p-10'>

        {/* Section Container - Icon, Header, Text */}
        <div className='grid gap-8 md:gap-14 max-h-[25rem] max-w-xl'>

          <IconWithTextBlock
            icon={Soup}
            heading='Organic and Healthy Delights'
            text='Savor our guilt-free desserts crafted with organic ingredients for a delectable and healthy experience'
          />
          <IconWithTextBlock
            icon={Sandwich}
            heading='Uncompromising Quality'
            text='Immerse yourself in desserts that embody exceptional taste and uncompromising quality at every bite'
          />
          <IconWithTextBlock
            icon={Salad}
            heading='Exquisite Taste Sensations'
            text='Explore our dessert creations that tantalize the palate with innovative flavors and impeccable craftsmanship'
          />

        </div>

        {/* Ice cream Image */}
        <div className='max-w-[33rem]'>
          <img src="https://thedesserts.co.uk/images/about.png" alt="" />
        </div>

      </div>



    </div>
  )
}

export default About