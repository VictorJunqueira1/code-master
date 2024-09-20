"use client";

import * as React from "react";
import { Grid, NotebookPen, LibraryBig, Headset, DoorOpen } from "lucide-react";
import { ModeToggle } from "../button-theme";

export const NavigationDesktop = () => {
    return (
        <div className="hidden lg:block">
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <a href="/" className="flex ms-2 md:me-24 items-center gap-2">
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white flex items-center justify-center text-center">Code Master</span>
                            </a>
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-950 dark:border-gray-800" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-950">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="dark:hover:text-blue-500 hover:text-blue-500 flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Grid className="w-5 h-5 hover:text-blue-600" />
                                <span className="flex-1 ml-2">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="dark:hover:text-blue-500 hover:text-blue-500 flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <NotebookPen className="flex-shrink-0 w-5 h-5 hover:text-blue-600" />
                                <span className="flex-1 ml-2">Anotações</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="dark:hover:text-blue-500 hover:text-blue-500 flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LibraryBig className="flex-shrink-0 w-5 h-5 hover:text-blue-600" />
                                <span className="flex-1 ml-2">Cursos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="dark:hover:text-blue-500 hover:text-blue-500 flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Headset className="flex-shrink-0 w-5 h-5 hover:text-blue-600" />
                                <span className="flex-1 ml-2">Suporte</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="dark:hover:text-red-600 hover:text-red-600 flex duration-300 transition-all items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <DoorOpen className="flex-shrink-0 w-5 h-5 hover:text-red-600" />
                                <span className="flex-1 ml-2">Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};