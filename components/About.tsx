import { Cake, CakeSlice, Dessert, Smile } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className='grid gap-8 justify-center items-center border-red-300 border-2 p-5'>

      <h1 className='text-3xl'>Pink Kiwi Cafe</h1>

      <p>Fresh Cakes, Vegan Hot Desserts, Italian Gelatos, Sundaes, Premium Milk Shakes, Premium Waffles, Pan Cakes, Fruit Bubble Tea.</p>

      <div className='flex gap-4'>        
        <div className='flex justify-center items-center p-7 bg-pink-400/80 rounded-full'>
          <Dessert className='w-12 h-12 '/>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-bold text-xl'>Organic and Healthy Delights</h2>
          <p>Savor our guilt-free desserts crafted with organic ingredients for a delectable and healthy experience.</p>
        </div>
      </div>

      <div className='flex gap-4'>        
        <div className='flex justify-center items-center p-7 bg-pink-400/80 rounded-full'>
          <CakeSlice className='w-12 h-12 '/>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-bold text-xl'>Organic and Healthy Delights</h2>
          <p>Savor our guilt-free desserts crafted with organic ingredients for a delectable and healthy experience.</p>
        </div>
      </div>

      <div className='flex gap-4'>        
        <div className='flex justify-center items-center p-7 bg-pink-400/80 rounded-full'>
          <Cake className='w-12 h-12 '/>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-bold text-xl'>Organic and Healthy Delights</h2>
          <p>Savor our guilt-free desserts crafted with organic ingredients for a delectable and healthy experience.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About