import React from "react";
import Image from "next/image";
import github from "../../public/github.png";

interface Tech {
    name: string;
    logo: string;
}
function SkillCard({ tech }: { tech: Tech }) {
    return (
        <div className="">
            <div className="w-56 h-28 flex flex-col justify-center items-center">
                <Image
                    src={github}
                    alt={tech.name}
                    height="250"
                    width="250"
                    className="object-cover object-center"
                />
                <p className="text-base font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {tech.name}
                </p>
            </div>
        </div>
    );
}

export default SkillCard;
