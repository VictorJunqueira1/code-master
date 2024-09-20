import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Movie {
  id: number;
  courseTitle: string;
  title: string;
  image: string;
}

const movies: Movie[] = [
  { id: 1, courseTitle: "Back-End", title: 'Curso de C#', image: '/images/csharp.png' },
  { id: 2, courseTitle: "Back-End", title: 'Curso de Java', image: '/images/java.png' },
  { id: 3, courseTitle: "Back-End", title: 'Curso de Python', image: '/images/python.png' },
  { id: 4, courseTitle: "Back-End", title: 'Curso de JavaScript', image: '/images/javascript.png' },
  { id: 5, courseTitle: "Back-End", title: 'Curso de Go', image: '/images/go.png' },
];

const MovieCard: React.FC<Movie> = ({ title, courseTitle, image }) => (
  <div className="relative m-4 transition-transform transform hover:scale-110">
    <span className="block text-lg font-semibold text-white">{courseTitle}</span>
    <img src={image} alt={title} className="w-48 h-72 rounded-lg shadow-lg" />
    <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-70 p-2 rounded">
      {title}
    </div>
  </div>
);

const MovieCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-lg mx-auto"
    >
      <CarouselContent>
        {movies.map(movie => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <MovieCard title={movie.title} courseTitle={movie.courseTitle} image={movie.image} id={0} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MovieCarousel;