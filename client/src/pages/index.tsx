"use client"

import CoursesCarousel from "@/components/CoursesCarousel";
import MainLayout from "@/components/Navigation/MainLayout";

export const Home = () => {
    return (
        <>
            <MainLayout>
                <CoursesCarousel />
            </MainLayout>
        </>
    )
}

export default Home;