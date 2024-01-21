"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { caricature, contest, two } from "../../../src/lib/data";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Caricature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(caricature);

  const handleSetActive = (index) => {
    setActiveIndex(0); // Reset activeIndex when changing the category
    setActive(index);
  };

  useEffect(() => {
    // Define the categories array
    const categories = [caricature, contest, two];

    // Update currentCategory based on the value of active
    setCurrentCategory(categories[active]);
  }, [active]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === currentCategory?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? currentCategory?.length + 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full lg:max-w-xl mx-auto">
      <div className="mx-auto w-fit my-5">
        <Button onClick={() => handleSetActive(0)} variant="ghost" className="px-5">
          Caricature
        </Button>
        <Button onClick={() => handleSetActive(1)} variant="ghost" className="px-5">
          Contest
        </Button>
        <Button onClick={() => handleSetActive(2)} variant="ghost" className="px-5">
          Ta'ang
        </Button>
      </div>
      <Carousel className="relative">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {currentCategory?.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="aspect-banner h-96 p-2">
                    <img
                      src={image?.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4">
        {currentCategory?.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-5 h-1 mx-1 cursor-pointer rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
      <div className="w-full flex items-center justify-between mx-auto mt-3">
        <Button
          disabled={activeIndex === 0}
          onClick={prevSlide}
          variant={"outline"}
        >
          <ChevronLeft size={"sm"} className="mr-3" /> Prev
        </Button>
        <Button
          disabled={activeIndex === currentCategory?.length - 1}
          onClick={nextSlide}
          variant={"outline"}
        >
          Next <ChevronRight size={"sm"} className="ml-3" />
        </Button>
      </div>
    </div>
  );
}
