"use client";
import ContactSection from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
        <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.03] ">
            <HeroSection />
            {/* About Me */}
            {/* Projects */}
            <ProjectSection />
            {/* Skills */}
            <SkillSection />
            {/* Experience */}
            {/* Contact */}
            <ContactSection />
        </main>
    );
}
