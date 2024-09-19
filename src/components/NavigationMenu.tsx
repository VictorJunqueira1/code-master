"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Grid, LibraryBig, NotebookPen, Headset, ShoppingBasket, DoorOpen, Cpu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const components = [
    { title: "Dashboard", href: "/", description: "Volte ao início da página." },
    { title: "Anotações", href: "/", description: "Confira as suas anotações." },
    { title: "Cursos", href: "/", description: "Veja os cursos disponíveis para você." },
    { title: "Suporte", href: "/", description: "Entre em contato com nosso suporte, caso haja dúvidas ou dificuldade." },
    { title: "Sair", href: "/", description: "Encerre a sua sessão." }
]

export const NavigationMenuMain = () => {
    const { setTheme } = useTheme()
    return (
        <div>
            {/* Mobile Menu */}
            <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md lg:hidden">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    Code Master
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <span className="p-3">
                            <Menu size={24} className="text-gray-900" />
                        </span>
                    </SheetTrigger>
                    <SheetContent className="max-h-screen overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="mt-4 space-y-4">
                            {components.map((component) => (
                                <Link
                                    key={component.title}
                                    href={component.href}
                                    className="block p-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    {component.title}
                                    <p className="text-sm text-gray-500">{component.description}</p>
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
                <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <a href="/" className="flex ms-2 md:me-24 items-center gap-2">
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white flex items-center justify-center text-center">Code Master</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Grid className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-2 hover:text-blue-600">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <NotebookPen className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-2 hover:text-blue-600">Anotações</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <LibraryBig className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-2 hover:text-blue-600">Cursos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <Headset className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-2 hover:text-blue-600">Suporte</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <DoorOpen className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-2 hover:text-red-600">Sair</span>
                                </a>
                            </li>
                        </ul>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Trocar tema</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Claro
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Escuro
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                Sistema
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </aside>
            </div>
        </div>
    )
}