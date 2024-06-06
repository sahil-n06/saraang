import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  { name: "Sahil Nawaz", testimonial: "Motivater", title: "Socialist" , imgUrl: "https://avatars.githubusercontent.com/u/143598850?v=4"},
];
export default function Testinomial() {
  return (
    <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 items-center mx-auto">
      
      <h2 className="text-center text-8xl max-lg:text-4xl text-black font-extralight font-serif">Testimonials</h2>
    <Carousel className="mt-20 mb-11 h-72 w-full justify-center items-center">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    className="rounded-full w-40 h-40"
                    src={testimonial.imgUrl}
                    alt={testimonial.name}
                  />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.title}</p>
                  <p className="text-gray-600">{testimonial.testimonial}</p>
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
