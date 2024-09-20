"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../button-theme";

const components = [
    { title: "Dashboard", href: "/", description: "Volte ao início da página." },
    { title: "Anotações", href: "/", description: "Confira as suas anotações." },
    { title: "Cursos", href: "/", description: "Veja os cursos disponíveis para você." },
    { title: "Suporte", href: "/", description: "Entre em contato com nosso suporte, caso haja dúvidas ou dificuldade." },
    { title: "Sair", href: "/", description: "Encerre a sua sessão." }
];

export const NavigationMobile = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md lg:hidden dark:bg-slate-950">
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
    );
};