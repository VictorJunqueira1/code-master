import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/types/categoriesCourse";

const CoursesCarousel = () => {

  return (
    <>
      <div className="space-y-10 relative">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold">{category.title}</h2>
            <Carousel className="w-full">
              <CarouselContent className="flex gap-2 p-5">
                {category.courses.map((course, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 xl:basis-1/4">
                    <Link href={course.link} className="cursor-pointer">
                      <Card className="h-full">
                        <CardContent className="p-4 flex flex-col hover:scale-105 duration-200 transition-all hover:border-gray-100 dark:hover:border-blue-700 items-center dark:bg-slate-800 h-full border dark:border-gray-700 rounded-md">
                          <Image
                            src={course.svg}
                            alt={course.name}
                            width={120}
                            height={10}
                            className="rounded-md"
                          />
                          <h3 className="mt-2 text-center text-sm md:text-lg font-semibold text-black dark:text-white">
                            {course.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 dark:bg-slate-700 rounded-full shadow-lg" />
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 dark:bg-slate-700 rounded-full shadow-lg" />
            </Carousel>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursesCarousel;
