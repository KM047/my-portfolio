"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <div id="home" className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 z-20">
                I am Kunal Mandave
            </h1>
            <p className="text-center md:text-xl mt-2 text-neutral-300 relative z-20">
                A Passionate Full Stack Developer
            </p>
        </div>
    );
}
