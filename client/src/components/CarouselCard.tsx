import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CourseCarousel = () => {
  const categories = [
    {
      title: "[Formações] FullStack",
      courses: [
        { name: "JavaScript", image: "/images/javascript.png" },
        { name: "Python", image: "/images/python.png" },
        { name: "Java", image: "/images/java.png" },
      ],
    },
    {
      title: "[Formações] FullStack 2",
      courses: [
        { name: "JavaScript", image: "/images/javascript.png" },
        { name: "Python", image: "/images/python.png" },
        { name: "Java", image: "/images/java.png" },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.title} className="space-y-5">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1, 
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-4">
              {category.courses.map((course, index) => (
                <CarouselItem key={index} className="w-1/3">
                  <Card className="h-full">
                    <CardContent className="p-4 flex flex-col items-center">
                      <Image
                        src={course.image}
                        alt={course.name}
                        width={120}
                        height={60}
                        className="rounded-md"
                      />
                      <h3 className="mt-2 text-center text-lg font-semibold">{course.name}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 dark:bg-slate-700 rounded-full shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 dark:bg-slate-700 rounded-full shadow-lg" />
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default CourseCarousel;