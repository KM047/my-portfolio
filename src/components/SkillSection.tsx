"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import userData from "@/data/data.json";

interface Technology {
    name: string;
    logo: string;
}

function SkillSection() {
    const technologies: Technology[] = userData.technologies;

    return (
        <div className="py-12 bg-gray-900" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Technologies
                    </p>
                </div>
                <div className="mt-10 max-w-5xl mx-auto px-8">
                    {/* {technologies.map((tech: Technology, key) => (
                        <div key={key}>
                            <SkillCard tech={tech}  />
                        </div>
                    ))} */}

                    <HoverEffect items={technologies} />
                </div>
                {/* <div className="mt-10 text-center">
                    <Link
                        href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All Webinars
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default SkillSection;
