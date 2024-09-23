"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import userData from "@/data/data.json";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";

interface Project {
    id: number;
    name: string;
    description: string;
    deployLink: string;
    repoLink: string;
}

export function ProjectSection() {
    // featured projects

    const projects: Project[] = userData.projects.reverse();

    return (
        <div className="py-12 bg-gray-900" id="project">
            <div>
                <div className="text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Projects
                    </p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {projects.map((project: Project) => (
                        <div key={project.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <span className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        <LinkPreview
                                            url={project?.deployLink}
                                            className="font-bold"
                                        >
                                            {project.name}
                                        </LinkPreview>{" "}
                                    </span>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-end gap-2 w-full mt-4">
                                        <Link
                                            href={project?.repoLink}
                                            target="_blank"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">
                                                {" "}
                                                GitHub link
                                            </span>
                                        </Link>
                                        <Link
                                            href={project?.deployLink}
                                            target="_blank"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mt-20 text-center">
                <Link
                    href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All courses
                </Link>
            </div> */}
        </div>
    );
}
