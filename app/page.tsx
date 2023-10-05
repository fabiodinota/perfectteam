"use client"

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import HeroSection from "./components/sections/HeroSection";
import IntroductionSection from "./components/sections/IntroductionSection";
import AanbodSection from "./components/sections/AanbodSection";

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <>
            <HeroSection />
            <div className="w-full h-full flex justify-center items-center flex-col">
                <div className="h-full w-full flex flex-col justify-center items-center max-w-[1300px]">
                    <IntroductionSection /> 
                    <AanbodSection />
                </div> 
            </div>
        </>
    )
}
