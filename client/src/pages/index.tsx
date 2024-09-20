"use client"

import { NavigationDesktop } from "@/components/Navigation/NavigationDesktop";
import { NavigationMobile } from "@/components/Navigation/NavigationMobile";

export const Home = () => {
    return (
        <>
            <NavigationMobile />
            <NavigationDesktop />
            <h1>Olá, Next.js!</h1>
        </>
    )
}

export default Home;