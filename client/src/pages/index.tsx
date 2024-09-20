"use client"

import { NavigationDesktop } from "@/components/Navigation/NavigationDesktop";
import { NavigationMobile } from "@/components/Navigation/NavigationMobile";

export const Home = () => {
    return (
        <>
            <NavigationMobile />
            <NavigationDesktop />
            <main className="p-4 lg:ml-52">
                Hello, home!
            </main>
        </>
    )
}

export default Home;