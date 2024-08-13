import React from 'react'

interface ImgProps {
  url: string;
}
const Img: React.FC<ImgProps> = ({ url }) => {
  return (
    <div className=''>
      <img
        src={url}
        alt=""
        className='max-w-[13rem] md:max-w-[15rem] lg:max-w-[17rem] aspect-square rounded-xl shadow-md transform hover:scale-105 duration-300'
      />
    </div>
  );
}


const Gallery = () => {
  return (
    <div id='gallery' className='grid gap-6 justify-center m-5 my-24'>

      <h1 className='text-3xl'>Explore Our Gallery</h1>

      {/* image card grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center'>

        {/* <Img
          url="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fHww"
        /> */}

        {Array.from({ length: 12 }).map((_, index) => (
          <Img
            key={index}
            url="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
          />
        ))}


      </div>

    </div>
  )
}

export default Gallery