import React from 'react'

type IconWithTextBlockProps = {
    icon: React.ComponentType<any>;
    heading: string;
    text: string;
}

const IconWithTextBlock: React.FC<IconWithTextBlockProps> = ({ icon: Icon, heading, text }) => {
  return (
    <div className='flex gap-8 sm:gap-4'>

    <div className='flex justify-center items-center'>
      <div className='p-3 bg-pink-400/50 rounded-full shadow-md'>
        <Icon className='w-10 h-10' />
      </div>
    </div>

    <div className='flex flex-col gap-2'>
      <h2 className='font-bold text-xl'>{heading}</h2>
      <p className='text-md'>{text}</p>
    </div>

  </div>
  )
}

export default IconWithTextBlock