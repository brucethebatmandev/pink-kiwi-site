import { Salad, Sandwich, Soup } from 'lucide-react'
import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'

const About = () => {
  return (
    <div id='about' className='my-24 grid lg:grid-cols-2 gap-24 lg:gap-0'>

        <div className='col-span-1 m-auto'>

          <div className='grid gap-10 max-w-md'>

            <div className='grid gap-4'>
              <h1 className='text-3xl'>What we have to offer</h1>
              <p>Fresh Cakes, Vegan Hot Desserts, Italian Gelatos, Sundaes, Premium Milk Shakes, Premium Waffles, Pan Cakes, Fruit Bubble Tea.</p>
            </div>

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

        </div>

        <div className='col-span-1 _mx-auto _my-auto m-auto _h-full'>
          <img
            src="https://img.taste.com.au/swuErs2G/taste/2021/02/lemon-dream-dessert-169681-2.jpg"
            // src="https://img.freepik.com/free-photo/gray-grunge-surface-wall-texture-background_1017-18216.jpg"
            alt=""
            className='rounded-xl shadow-md aspect-square max-w-[25rem] max-h-[25rem]'
          />
        </div>

    </div>
  )
}

export default About