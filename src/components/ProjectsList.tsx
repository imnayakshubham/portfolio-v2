"use client"

import React, { useEffect, useState } from 'react'
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";
import { DATA } from '@/data/resume';
import { ProjectCard } from './project-card';
import { Icons } from './icons';

interface Repo {
    key?: string | null
    title: string;
    href: string;
    description: string;
    dates?: string | null;
    tags: readonly string[] | null;
    link: string;
    image: string;
    video?: string | null;
    links?: readonly {
        icon: React.ReactNode;
        type?: string;
        title: string;
        href: string;
    }[];
    className?: string;
}

const username = "imnayakshubham"

const ProjectsList = () => {




    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out my latest work
                            </h2>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title + "__" + id}
                                title={project.title}
                                description={project.description}
                                dates={project?.dates}
                                tags={project.tags}
                                image={project?.image}
                                video={project?.video}
                                links={project?.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsList