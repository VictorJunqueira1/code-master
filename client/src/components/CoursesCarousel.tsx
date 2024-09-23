import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CoursesCarousel = () => {
  const futureProjectIcon = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 17l5-5-5-5v3H4v4h6v3zm8-15v18H2V2h16zm-2 2H4v14h12V4z' fill='%23000000'/%3E%3C/svg%3E";

  const categories = [
    {
      title: "[Formações] Fundamentos",
      courses: [
        { name: "Lógica de Programação", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Git/Github", link: "", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    {
      title: "[Formações] Front-End",
      courses: [
        { name: "HTML", link: "/course/html", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", link: "/course/css", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", link: "/course/javascript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", link: "/course/typescript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", link: "/course/tailwind", svg: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
        { name: "Next.js", link: "/course/nextjs", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
    },
    {
      title: "[Formações] Back-End",
      courses: [
        { name: "Node.js", link: "/course/nodejs", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Nest.js", link: "/course/nestjs", svg: "https://nestjs.com/img/logo-small.svg" },
        { name: "PHP", link: "/course/php", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Laravel", link: "/course/laravel", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Python", link: "/course/python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Firebase", link: "/course/firebase", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "C#", link: "/course/csharp", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      ],
    },
    {
      title: "[Formações] Banco de Dados",
      courses: [
        { name: "SQL", link: "/course/sql", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg" },
        { name: "MySQL", link: "/course/mysql", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", link: "/course/postgresql", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", link: "/course/mongodb", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", link: "/course/redisdb", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
    },
    {
      title: "[Formações] Projetos",
      courses: [
        { name: "Calculadora em JS", link: "", svg: futureProjectIcon },
        { name: "Gerenciamento de Estoque", link: "", svg: futureProjectIcon },
        { name: "CRUD em .NET", link: "", svg: futureProjectIcon },
        { name: "Análise de Dados em Python", link: "", svg: futureProjectIcon },
        { name: "Portfólio com Next.js", link: "", svg: futureProjectIcon },
        { name: "Mário Game com Firebase", link: "", svg: futureProjectIcon },
      ],
    },
  ];

  return (
    <>
      <div className="space-y-10 relative">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold">{category.title}</h2>
            <Carousel className="w-full">
              <CarouselContent className="flex gap-2 p-5">
                {category.courses.map((course, index) => (
                  <CarouselItem key={index} className="basis-1/3 xl:basis-1/4">
                    <Link href={course.link} className="cursor-pointer">
                      <Card className="h-full">
                        <CardContent className="p-4 flex flex-col hover:scale-105 duration-200 transition-all hover:border-gray-100 dark:hover:border-blue-700 items-center dark:bg-slate-800 h-full border dark:border-gray-700 rounded-md">
                          <Image
                            src={course.svg || futureProjectIcon}
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
