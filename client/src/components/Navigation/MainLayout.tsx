"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, CircleHelp, Headset, DoorOpen, Menu, NotebookPen } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const components = [
    { title: "Dashboard", href: "/", description: "Volte ao início da página." },
    { title: "Anotações", href: "/modules/anotations", description: "Confira as suas anotações." },
    { title: "Fórum", href: "/modules/forum", description: "Confira as suas anotações." },
    { title: "Suporte", href: "/modules/support", description: "Entre em contato com nosso suporte." },
    { title: "Sair", href: "/#", description: "Encerre a sua sessão." }
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div>
            <div className="hidden lg:block">
                <nav className="relative z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <Link href="/" className="flex ms-2 md:me-24 items-center gap-2">
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white flex items-center justify-center text-center">Code Master</span>
                                </Link>
                            </div>
                            <div className="flex gap-4 items-center">
                                <ModeToggle />
                                <Avatar>
                                    <AvatarImage />
                                    <AvatarFallback>VJ</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex">
                    <aside id="logo-sidebar" className="w-60 min-h-screen pt-4 bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-900">
                            <ul className="space-y-2 font-normal text-2xl">
                                {components.map(component => (
                                    <li key={component.title}>
                                        <Link href={component.href} className={
                                            `
                                                flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white group ${isActive(component.href)
                                                ? "bg-blue-600 text-white dark:bg-blue-800"
                                                : "dark:hover:text-blue-500 hover:text-blue-500"
                                            }`}
                                        >
                                            {component.title === "Dashboard" && <Grid className="w-5 h-5" />}
                                            {component.title === "Anotações" && <NotebookPen className="w-5 h-5" />}
                                            {component.title === "Fórum" && <CircleHelp className="w-5 h-5" />}
                                            {component.title === "Suporte" && <Headset className="w-5 h-5" />}
                                            {component.title === "Sair" && <DoorOpen className="w-5 h-5" />}
                                            <span className="flex-1 ml-2">{component.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                    <main className="min-h-screen p-4 w-full bg-gray-100 dark:bg-slate-900">
                        {children}
                    </main>
                </div>
            </div>
            <div className="block lg:hidden min-h-screen">
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-md border-b border-gray-200 dark:border-gray-700 dark:bg-slate-950">
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        Code Master
                    </Link>
                    <Sheet>
                        <SheetTrigger>
                            <span className="p-3">
                                <Menu size={24} className="text-gray-900 dark:text-white" />
                            </span>
                        </SheetTrigger>
                        <SheetContent className="max-h-screen overflow-y-auto">
                            <SheetHeader className="flex flex-row justify-between mt-6">
                                <SheetTitle className="flex items-center ml-3">Menu</SheetTitle>
                                <ModeToggle />
                            </SheetHeader>
                            <div className="mt-4 space-y-4">
                                {components.map((component) => (
                                    <Link
                                        key={component.title}
                                        href={component.href}
                                        className="block p-3 text-lg font-semibold dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-blue-600 duration-200 rounded-md"
                                    >
                                        {component.title}
                                        <p className="text-sm dark:text-gray-400 text-gray-500">{component.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <main className="pt-28 min-h-screen p-4 w-full bg-gray-100 dark:bg-slate-900">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;