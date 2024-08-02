'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"


const Reviews = () => {
  return (
    <div className="grid gap-6 mx-20 mb-20 ">

      <h1 className="text-2xl">What our Customers say</h1>


      <Carousel
        plugins={[ Autoplay({ delay: 5000 })  ]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs sm:max-w-none"
      >
        <CarouselContent className="max-w-md lg:max-w-6xl">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 min-w-80">
              <div className="p-1">
                <Card className="bg-slate-100 shadow-md max-w-xs">
                  <CardContent className="flex flex-col gap-3 _aspect-square items-center justify-items-center justify-center p-6">

                    <div className="flex items-center gap-2">
                      <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        className="max-w-[5rem] rounded-full"
                      />

                      <div className="grid gap-2 items-center justify-items-center">
                        <p>John Doe</p>
                        <div className="flex">
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                          <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis eius cum reiciendis architecto consequatur natus fuga delectus temporibus unde nihil                     
                    </p>

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default Reviews