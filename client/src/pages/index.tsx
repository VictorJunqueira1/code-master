"use client"

import CourseCarousel from "@/components/CarouselCard";
import MainLayout from "@/components/Navigation/MainLayout";

export const Home = () => {
    return (
        <>
            <MainLayout>
                <CourseCarousel />
            </MainLayout>
        </>
    )
}

export default Home;