import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CoursesCarousel = () => {
  const categories = [
    {
      title: "[Formações] Front-End",
      courses: [
        { name: "HTML", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Git/Github", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "TypeScript", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", link: "", svg: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
        { name: "React", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
    },
    {
      title: "[Formações] Back-End",
      courses: [
        { name: "Node.js", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", link: "", svg: "https://www.svgrepo.com/show/330398/express.svg" },
        { name: "Nest.js", link: "", svg: "https://nestjs.com/img/logo-small.svg" },
        { name: "Python", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Firebase", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "C# .NET", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      ],
    },
    {
      title: "[Formações] Banco de Dados",
      courses: [
        { name: "MySQL", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
    },
    {
      title: "[Formações] Projetos",
      courses: [
        { name: "Nome do Projeto", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Nome do Projeto", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Nome do Projeto", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Nome do Projeto", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
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
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 xl:basis-1/4">
                  <Link href={course.link} className="cursor-pointer">
                    <Card className="h-full">
                      <CardContent className="p-4 flex flex-col items-center hover:scale-110 duration-200 transition-all">
                        <Image
                          src={course.svg}
                          alt={course.name}
                          width={120}
                          height={10}
                          className="rounded-md"
                        />
                        <h3 className="mt-2 text-center text-lg font-semibold text-black dark:text-white">
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
  );
};

export default CoursesCarousel;
