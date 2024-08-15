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
        className='max-w-[13rem] md:max-w-[15rem] lg:max-w-[17rem] aspect-square object-cover rounded-xl shadow-md transform hover:scale-105 duration-300 hover:opacity-80'
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

        <Img
          url="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
        />
        <Img
          url="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Img
          url="https://images.pexels.com/photos/1833335/pexels-photo-1833335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        {/* {Array.from({ length: 12 }).map((_, index) => (
          <Img
            key={index}
            url="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
          />
        ))} */}


      </div>

    </div>
  )
}

export default Gallery