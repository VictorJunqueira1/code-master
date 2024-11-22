"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { categories } from "@/types/categoriesCourse"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const CourseCard = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <Tabs defaultValue={categories[0].title} className="space-y-8">
                <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-8">
                    {categories.map((category, index) => (
                        <TabsTrigger 
                            key={index} 
                            value={category.title}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:bg-background/80 hover:text-foreground/80"
                        >
                            {category.title.replace("[Formações] ", "")}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category, categoryIndex) => (
                    <TabsContent key={categoryIndex} value={category.title} className="space-y-6 transition-all duration-300 ease-in-out">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.courses.map((course, courseIndex) => (
                                <Card key={courseIndex} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <Image src={course.svg} alt={course.name} width={48} height={48} className="w-12 h-12" />
                                        <div>
                                            <CardTitle className="text-lg font-semibold">{course.name}</CardTitle>
                                            {'stage' in course && <Badge variant="secondary" className="mt-1">Estágio {course.stage}</Badge>}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{course.description}</p>
                                    </CardContent>
                                    <CardContent className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        {course.link ? (
                                            <Link href={course.link}>
                                                <Button variant="default" className="w-full">
                                                    Iniciar Curso
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button variant="outline" className="w-full" disabled>
                                                Em Breve
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default CourseCard