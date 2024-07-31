'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Navbar } from "./Navbar"
import Fade from 'embla-carousel-fade'

export const CarouselDemo = () => {
    const imageUrls = [
        'https://thedesserts.co.uk/images/33.jpg',
        'https://thedesserts.co.uk/images/31.jpg',
        'https://thedesserts.co.uk/images/32.jpg',
        'https://thedesserts.co.uk/images/693.jpg',
    ];
    return (
                
<Carousel
  plugins={[ Fade(), Autoplay({ delay: 5000 })  ]}
  className="relative"
>
  <Navbar/>
  <CarouselContent>
    {imageUrls.map((url, index) => (
      <CarouselItem key={index}>
          <Card>
            <CardContent 
              className="p-0"
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full min-h-[25rem] object-cover sm:h-auto sm:w-auto _object-center object-right"
              />
            </CardContent>
          </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="z-10 absolute left-2" />
  <CarouselNext className="z-10 absolute right-2" />
</Carousel>

    )
}
