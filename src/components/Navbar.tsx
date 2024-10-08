"use client";
import React, { useState } from "react";
import {
    IconBrandStackshare,
    IconHome,
    IconMail,
    IconMessage,
    IconPrompt,
    IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: (
                <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Projects",
            link: "#project",
            icon: (
                <IconPrompt className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Skills",
            link: "#skills",
            icon: (
                <IconBrandStackshare className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Contact",
            link: "#contact",
            icon: (
                <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    return (
        <div className="relative w-full z-30">
            <FloatingNav navItems={navItems} />
        </div>
    );
}

export default Navbar;
