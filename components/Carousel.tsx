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

export const CarouselDemo = () => {
    const imageUrls = [
        'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/433438240_797860122363283_1877844459177698806_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iE2qY3Uk6QoQ7kNvgEnIpfr&_nc_ht=scontent-lhr8-1.xx&gid=AzMi4OLhgUvA2AWmlHssfAd&oh=00_AYDSH3E7uu3KAKPqBrhddjTS0K2wFmVPNyy83WVpmS4Z2g&oe=66AABF05',
        'https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/431963510_797860105696618_6990294751591597040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UReSID6tnUwQ7kNvgHnJM1o&_nc_ht=scontent-lhr6-2.xx&oh=00_AYDSVKL3BS1NhOTKYlOsNQeyp-xmPYWpcdpR_VbShj192Q&oe=66AAD1B2',
        'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/433476093_797860269029935_3290096243652938636_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wRWq30ns-OAQ7kNvgFxuNiI&_nc_ht=scontent-lhr6-1.xx&oh=00_AYCDYTOsXmr0rUYdpm1n8IwBVzZS4rtPDpKSgTw-Ddjsdg&oe=66AADFBF',
        'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/431562491_18020331608114904_7770255768283885851_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=un8hriO7jScQ7kNvgEa_csO&_nc_ht=scontent-lhr6-1.xx&oh=00_AYCQ32iI68uu9DhYuaHVkRD_FY4RbSHtOVlKi1qphCGv2A&oe=66AABDC7',
        'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/420175297_18020331668114904_1276944380804251899_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zt-AfLRx3DEQ7kNvgH4J4TJ&_nc_ht=scontent-lhr8-1.xx&gid=A89zQtBcKjHY_gcN1cIyxtu&oh=00_AYAWYwui0BVjsBGTCQdmOh_WlLWywjCthG0Vv-yskieqRA&oe=66AAD120'
    ];
    return (
                 // plugins={[
            //     Autoplay({
            //         delay: 5000,
            //     }),
            // ]}
<Carousel className="w-full relative h-screen">
  <CarouselContent className="h-full">
    {imageUrls.map((url, index) => (
      <CarouselItem key={index} className="h-full flex items-center justify-center">
        <div className="w-full h-full p-1">
          <Card className="w-full h-full">
            <CardContent className="flex p-0 w-full h-full items-center justify-center">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* <CarouselPrevious className="z-10 absolute left-5" />
  <CarouselNext className="z-10 absolute right-5" /> */}
</Carousel>

    )
}
