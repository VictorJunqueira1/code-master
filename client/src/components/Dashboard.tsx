import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, BookOpen, GraduationCap, Trophy, ArrowRight, Calendar, Users } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import CourseCard from './CourseCard'

const studyData = [
    { name: 'Jan', hours: 10 },
    { name: 'Feb', hours: 15 },
    { name: 'Mar', hours: 20 },
    { name: 'Apr', hours: 25 },
    { name: 'May', hours: 30 },
    { name: 'Jun', hours: 35 },
]

const teachers = [
    {
        name: "Victor Junqueira",
        courses: ["Front-End", "Git/Github", "Firebase", "C#", "ASP.NET Core", "RedisDB"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Felipe de Castro",
        courses: ["Node", "Express", "Nest", "PHP", "Laravel", "SQL", "MySQL", "PostgreSQL"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Tiago Braga",
        courses: ["Lógica de Programação (Python)", "Lógica de Programação (C)", "Python", "MongoDB"],
        avatar: "/placeholder.svg?height=100&width=100",
    },
]

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Estatísticas Gerais */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Cursos em Andamento</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-xs text-muted-foreground">+2 desde o último mês</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">68%</div>
                        <Progress value={68} className="mt-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Certificados</CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-muted-foreground">3 obtidos este mês</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pontos de Conquista</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,284</div>
                        <p className="text-xs text-muted-foreground">+10% desde a semana passada</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                {/* Gráfico de Progresso */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Horas de Estudo</CardTitle>
                        <CardDescription>Seu progresso ao longo dos últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={studyData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Próximas Aulas e Conquistas */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Atividades</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="aulas" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="aulas">Próximas Aulas</TabsTrigger>
                                <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
                            </TabsList>
                            <TabsContent value="aulas" className="space-y-4">
                                {[
                                    { name: "Introdução ao React", date: "Hoje, 14:00", instructor: "Victor Junqueira" },
                                    { name: "Algoritmos Avançados", date: "Amanhã, 10:00", instructor: "Felipe de Castro" },
                                    { name: "Python para Data Science", date: "23 Mai, 15:30", instructor: "Tiago Braga" },
                                ].map((lesson, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="w-[50px] h-[50px] rounded-full bg-secondary/10 flex items-center justify-center">
                                            <Calendar className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{lesson.name}</p>
                                            <p className="text-xs text-muted-foreground">{lesson.date}</p>
                                            <p className="text-xs text-muted-foreground">Instrutor: {lesson.instructor}</p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full">
                                    Ver Todas as Aulas
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </TabsContent>
                            <TabsContent value="conquistas" className="space-y-4">
                                {[
                                    { name: "Mestre do Git", date: "Obtido em 15 Mai" },
                                    { name: "Guru do JavaScript", date: "Obtido em 10 Mai" },
                                    { name: "Ninja do CSS", date: "Obtido em 5 Mai" },
                                ].map((achievement, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center">
                                            <Trophy className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{achievement.name}</p>
                                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full">
                                    Ver Todas as Conquistas
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>

            {/* Professores */}
            <Card>
                <CardHeader>
                    <CardTitle>Professores Code Master</CardTitle>
                    <CardDescription>Conheça nossa equipe de instrutores especializados</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {teachers.map((professor, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src={professor.avatar} alt={professor.name} />
                                            <AvatarFallback>{professor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle>{professor.name}</CardTitle>
                                            <CardDescription>{professor.courses.length} cursos</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 space-x-1">
                                        {professor.courses.map((course, courseIndex) => (
                                            <Badge key={courseIndex} variant="secondary">{course}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Cursos Disponíveis */}
            <Card>
                <CardHeader>
                    <CardTitle>Cursos Disponíveis</CardTitle>
                    <CardDescription>Explore nossos cursos por categoria</CardDescription>
                </CardHeader>
                <CardContent>
                    <CourseCard  />
                </CardContent>
            </Card>
        </div>
    )
}