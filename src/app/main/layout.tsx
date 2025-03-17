"use client";

import { Suspense } from "react";
import { Header } from "../../components/Header";
import Footer from "@/components/Footer";



export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Header />
            {children}
            <Suspense>
                <Footer />
            </Suspense>
        </div>
    );
}
