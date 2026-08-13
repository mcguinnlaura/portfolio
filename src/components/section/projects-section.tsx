import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { X } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const projectsMeta = DATA.sections.projects as {
    heading?: string;
    text?: string;
};

export default function ProjectsSection({
    activeSkill = null,
    onClear,
}: {
    activeSkill?: string | null;
    onClear?: () => void;
}) {
    // Projects display in the order they appear in resume.tsx (no sorting).
    const projects = activeSkill
        ? DATA.projects.filter((p) => p.technologies.some((t) => t === activeSkill))
        : DATA.projects;

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-6">
                {(projectsMeta.heading || projectsMeta.text || activeSkill) && (
                    <div className="flex flex-col gap-y-3 items-center justify-center text-center">
                        {projectsMeta.heading && (
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{projectsMeta.heading}</h2>
                        )}
                        {projectsMeta.text && (
                            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance">
                                {projectsMeta.text}
                            </p>
                        )}
                        {activeSkill && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>
                                    Showing {projects.length} {projects.length === 1 ? "project" : "projects"} in{" "}
                                    <span className="font-medium text-foreground">{activeSkill}</span>
                                </span>
                                <button
                                    type="button"
                                    onClick={onClear}
                                    className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs cursor-pointer hover:bg-muted transition-colors"
                                >
                                    <X className="size-3" /> Show all
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
                    {projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                icon={project.icon}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
