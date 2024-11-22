"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Home, BookOpen, MessageSquare, HelpCircle, LogOut, Menu, Search, Bell } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Cursos", href: "/courses" },
    { icon: MessageSquare, label: "Fórum", href: "/forum" },
    { icon: HelpCircle, label: "Suporte", href: "/support" },
]

export function MainLayout({ children }: { children: React.ReactNode }) {
    const { setTheme, theme } = useTheme()
    const [activeItem, setActiveItem] = React.useState("Dashboard")

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-900 dark:to-slate-800 text-gray-900 dark:text-gray-100">
            {/* Sidebar para desktop */}
            <aside className="hidden border-r dark:border-slate-700 w-64 flex-col bg-white dark:bg-slate-900 shadow-lg md:flex">
                <div className="p-6">
                    <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Code Master</h2>
                </div>
                <nav className="flex-1 px-4">
                    <ul className="space-y-2">
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start gap-3 px-4 py-5 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 ${activeItem === item.label ? 'bg-gray-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-medium' : ''
                                            }`}
                                        onClick={() => setActiveItem(item.label)}
                                    >
                                        <item.icon className="h-6 w-6" />
                                        <span>{item.label}</span>
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-200 dark:border-slate-700">
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                        onClick={() => { }}
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Sair</span>
                    </Button>
                </div>
            </aside>

            <div className="flex flex-1 flex-col">
                {/* Navbar */}
                <header className="flex h-16 items-center border-b dark:border-slate-700 justify-between bg-white dark:bg-slate-900 px-6 shadow-sm">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 bg-white dark:bg-slate-900 p-0">
                            <SheetHeader className="p-6 border-b border-gray-200 dark:border-slate-700">
                                <SheetTitle className="text-2xl font-semibold text-left bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Code Master</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col p-4">
                                {sidebarItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        className={`justify-start gap-3 px-4 py-3 mb-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 ${activeItem === item.label ? 'bg-gray-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-medium' : ''
                                            }`}
                                        onClick={() => setActiveItem(item.label)}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.label}</span>
                                    </Button>
                                ))}
                                <Button
                                    variant="ghost"
                                    className="justify-start gap-3 px-4 py-3 mt-4 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border-t hover:border duration-300 border-gray-200 dark:border-slate-700"
                                    onClick={() => { }}
                                >
                                    <LogOut className="h-5 w-5" />
                                    <span>Sair</span>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="flex-1 flex items-center justify-end space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="search"
                                placeholder="Pesquisar..."
                                className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-slate-700 border-none rounded-full focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            />
                        </div>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                            Editar Perfil
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Editar Perfil</DialogTitle>
                                            <DialogDescription>
                                                Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                    Nome
                                                </Label>
                                                <Input id="name" defaultValue="Pedro Silva" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="email" className="text-right">
                                                    E-mail
                                                </Label>
                                                <Input id="email" defaultValue="pedro@example.com" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="new-password" className="text-right">
                                                    Nova Senha
                                                </Label>
                                                <Input id="new-password" type="password" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="confirm-password" className="text-right">
                                                    Confirmar Nova Senha
                                                </Label>
                                                <Input id="confirm-password" type="password" className="col-span-3" />
                                            </div>
                                            <Button type="submit" className="ml-auto">Salvar Alterações</Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                                <DropdownMenuItem>Sair</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Conteúdo principal */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}