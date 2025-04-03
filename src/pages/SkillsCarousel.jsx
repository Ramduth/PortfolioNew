import React, { useRef, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function SkillsCarousel() {
  // Create the autoplay plugin
  const plugin = useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: true,
      stopOnMouseEnter: true, // Make sure it stops on mouse enter
      playOnInit: true // Start playing right away when initialized
    })
  )

  // Reference to store the API
  const [emblaApi, setEmblaApi] = React.useState(null)

  // Ensure the autoplay works properly when mouse leaves
  const handleMouseLeave = () => {
    if (plugin.current && plugin.current.reset && emblaApi) {
      plugin.current.reset()
      plugin.current.play()
    }
  }

  return (
    <div className='px-4 md:px-16 max-w-screen-2xl mx-auto'>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={handleMouseLeave}
        setApi={setEmblaApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
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

export default SkillsCarousel