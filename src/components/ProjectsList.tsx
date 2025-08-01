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

    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=5`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                const structuredRepos: Repo[] = data.map((repo: any) => ({
                    title: repo.name,
                    description: repo.description || 'No description available',
                    dates: `Created on ${new Date(repo.created_at).toLocaleDateString()} | Last updated on ${new Date(repo.updated_at).toLocaleDateString()}`,
                    tags: repo.topics || [],
                    href: repo.html_url,
                    image: repo.owner.avatar_url,
                    video: null,
                    links: [
                        {
                            title: "Code",
                            icon: <Icons.github className="h-4 w-4" />,
                            href: repo.html_url,
                        },
                    ],
                }));
                setRepos(structuredRepos);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

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
                    {[...DATA.projects, ...repos].map((project, id) => (
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