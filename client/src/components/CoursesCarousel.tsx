import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "./Navigation/MainLayout";

const CoursesCarousel = () => {
  const categories = [
    {
      title: "[Formações] Front-End",
      courses: [
        { name: "HTML", link: "", svg: "https://simpleicons.org/icons/html5.svg" },
        { name: "CSS", link: "", svg: "https://simpleicons.org/icons/css3.svg" },
        { name: "JavaScript", link: "", svg: "https://simpleicons.org/icons/javascript.svg" },
        { name: "Git/Github", link: "", svg: "https://simpleicons.org/icons/git.svg" },
        { name: "TypeScript", link: "", svg: "https://simpleicons.org/icons/typescript.svg" },
        { name: "Tailwind", link: "", svg: "https://simpleicons.org/icons/tailwindcss.svg" },
        { name: "React/Next.js", link: "", svg: "https://simpleicons.org/icons/react.svg" },
      ],
    },
    {
      title: "[Formações] Back-End",
      courses: [
        { name: "Node.js", link: "", svg: "https://simpleicons.org/icons/nodejs.svg" },
        { name: "Express.js", link: "", svg: "https://simpleicons.org/icons/express.svg" },
        { name: "Nest.js", link: "", svg: "https://simpleicons.org/icons/nestjs.svg" },
        { name: "Python", link: "", svg: "https://simpleicons.org/icons/python.svg" },
        { name: "Firebase", link: "", svg: "https://simpleicons.org/icons/firebase.svg" },
        { name: "C# .NET", link: "", svg: "https://simpleicons.org/icons/csharp.svg" },
      ],
    },
    {
      title: "[Formações] Banco de Dados",
      courses: [
        { name: "MySQL", link: "", svg: "https://simpleicons.org/icons/mysql.svg" },
        { name: "PostgreSQL", link: "", svg: "https://simpleicons.org/icons/postgresql.svg" },
        { name: "MongoDB", link: "", svg: "https://simpleicons.org/icons/mongodb.svg" },
        { name: "Redis", link: "", svg: "https://simpleicons.org/icons/redis.svg" },
      ],
    },
  ];

  return (
    <div className="space-y-10 relative">
      {categories.map((category) => (
        <div key={category.title} className="space-y-5">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <Carousel className="w-full">
            <CarouselContent className="flex gap-2">
              {category.courses.map((course, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={""} className="cursor-pointer">
                    <Card className="h-full">
                      <CardContent className="p-4 flex flex-col items-center">
                        <Image
                          src={course.svg}
                          alt={course.name}
                          width={120}
                          height={60}
                          className="rounded-md light:invert-0 dark:invert"
                        />
                        <h3 className="mt-2 text-center text-lg font-semibold text-black dark:text-white">{course.name}</h3>
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
  );
};

export default CoursesCarousel;
