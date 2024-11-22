"use client"

import Dashboard from "@/components/Dashboard";
import { MainLayout } from "@/components/MainLayout";

export const Home = () => {
    return (
        <>
            <MainLayout>
                <Dashboard />
            </MainLayout>
        </>
    )
}

export default Home;