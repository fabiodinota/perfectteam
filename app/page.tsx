"use client"

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import HeroSection from "./components/sections/HeroSection";

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <div className="h-[500vh] w-full">
            <HeroSection />
        </div>
    )
}
