"use client"

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Search, User, ChevronRight, CheckCircle2 } from 'lucide-react'
import { MainLayout } from '@/components/MainLayout'
import { categories } from "@/types/categoriesCourse"

type UserProgress = {
    [key: string]: number;
}

const userProgress: UserProgress = {
    "Lógica de Programação": 100,
    "Git": 60,
    "HTML": 30,
    "CSS": 10,
    "JavaScript": 0,
};

const teachers = [
    {
        name: "Victor Junqueira",
        courses: ["Front-End", "Git/Github", "Firebase", "C#", "ASP.NET Core", "Redis"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Felipe de Castro",
        courses: ["Node.js", "Express", "Nest.js", "PHP", "Laravel", "SQL", "MySQL", "PostgreSQL"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Tiago Braga",
        courses: ["Lógica de Programação (Python)", "Lógica de Programação (C)", "Python", "MongoDB"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
];

const ProgressIndicator = ({ progress }: { progress: number }) => {
    const color = progress === 100 ? "text-green-500" : "text-blue-500";
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${color}`}>
                        {progress === 100 ? "Concluído" : "Em progresso"}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600 dark:text-gray-400">
                        {progress}%
                    </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                <div style={{ width: `${progress}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}></div>
            </div>
        </div>
    );
};

export default function CoursesDashboard() {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].title)
    const [searchQuery, setSearchQuery] = useState<string>('')

    const filteredCourses = useMemo(() => {
        const selectedCourses = categories.find(cat => cat.title === selectedCategory)?.courses || []
        return selectedCourses.filter(course =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [selectedCategory, searchQuery])

    return (
        <MainLayout>
            <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto space-y-12"
                >
                    <header className="text-center space-y-4">
                        <BookOpen className="h-16 w-16 text-primary mx-auto" />
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            Cursos Code Master
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Explore nossos cursos e continue sua jornada de aprendizado
                        </p>
                    </header>

                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Pesquisar cursos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full"
                            />
                        </div>
                    </div>

                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-8">
                        <TabsList className="flex justify-center flex-wrap gap-2">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category.title}
                                    value={category.title}
                                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150"
                                >
                                    {category.title.replace("[Formações] ", "")}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {categories.map((category) => (
                            <TabsContent key={category.title} value={category.title}>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredCourses.map((course) => (
                                        <Card key={course.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                                            <CardHeader className="p-6 pb-0">
                                                <div className="flex items-center justify-between mb-4">
                                                    <img src={course.svg} alt={course.name} className="w-12 h-12" />
                                                    {'stage' in course && (
                                                        <Badge variant="secondary" className="text-xs font-semibold px-2 py-1">
                                                            Etapa {course.stage}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <CardTitle className="text-xl font-bold mb-2">{course.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6 pt-2">
                                                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                                                    {course.description}
                                                </CardDescription>
                                                {userProgress[course.name] !== undefined && (
                                                    <ProgressIndicator progress={userProgress[course.name]} />
                                                )}
                                            </CardContent>
                                            <CardFooter className="p-6 pt-0">
                                                <Button
                                                    className="w-full justify-between items-center text-left"
                                                    variant={course.link ? "default" : "secondary"}
                                                    disabled={!course.link || userProgress[course.name] === 100}
                                                >
                                                    <span>
                                                        {!course.link ? "Em Breve" :
                                                            userProgress[course.name] === 100 ? "Concluído" :
                                                                userProgress[course.name] > 0 ? "Continuar Curso" : "Começar Curso"}
                                                    </span>
                                                    {userProgress[course.name] === 100 ? (
                                                        <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />
                                                    ) : (
                                                        <ChevronRight className="h-4 w-4 ml-2" />
                                                    )}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                            Nossos Professores
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {teachers.map((teacher) => (
                                <Card key={teacher.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                                    <CardHeader className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <Avatar className="w-16 h-16 border-2 border-primary">
                                                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                                                <AvatarFallback><User className="w-8 h-8" /></AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-xl font-bold">{teacher.name}</CardTitle>
                                                <CardDescription>{teacher.courses.length} cursos</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 pt-0">
                                        <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Cursos ministrados:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {teacher.courses.map((course, index) => (
                                                <li key={index} className="text-sm text-gray-600 dark:text-gray-400">{course}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </MainLayout>
    )
}