import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function getSectionComponents(
  activeSkill: string | null,
  setActiveSkill: (skill: string | null) => void
): Record<string, React.ReactNode> {
  return {
    about: (
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{DATA.sections.about.heading}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    ),
    work: (
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <img src="/Experience.png" alt={DATA.sections.work.heading} className="h-8 w-auto" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
    ),
    education: (
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <img src="/Education.png" alt={DATA.sections.education.heading} className="h-8 w-auto" />
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.start ? <span>{education.start} - {education.end}</span> : null}
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    ),
    skills: (
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <img src="/Projects.png" alt={DATA.sections.skills.heading} className="h-8 w-auto" />
              <p className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground/70">
                Filter by Skill
                <ArrowDown className="size-4" aria-hidden />
              </p>
            </div>
          </BlurFade>
          <div className="flex flex-wrap justify-center md:justify-between gap-1.5">
            {DATA.skills.map((skill, id) => {
              const isActive = activeSkill === skill.name;
              return (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActiveSkill(isActive ? null : skill.name)}
                    aria-pressed={isActive}
                    className={`border rounded-xl h-8 w-fit px-2.5 flex items-center gap-1 cursor-pointer transition-colors ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground ring-2 ring-primary/30"
                        : "bg-background border-border text-foreground ring-2 ring-border/20 hover:bg-muted"
                    }`}
                  >
                    {skill.icon && (
                      <skill.icon className="size-3.5 rounded overflow-hidden object-contain" />
                    )}
                    <span className="text-sm font-bold">{skill.name}</span>
                  </button>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    ),
    projects: (
      <section id="projects" className="-mt-[2.14rem]">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection activeSkill={activeSkill} onClear={() => setActiveSkill(null)} />
        </BlurFade>
      </section>
    ),
    contact: (
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    ),
  };
}

export default function HomePage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionComponents = getSectionComponents(activeSkill, setActiveSkill);

  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-[4.2rem] relative">
      <section id="hero" className="-mb-7">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <img
                  src="/lm.png"
                  alt={DATA.name}
                  className="w-64 sm:w-72 md:w-80 h-auto"
                />
              </BlurFade>
              {DATA.description && (
                <BlurFadeText
                  className="mt-4 text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                  delay={BLUR_FADE_DELAY * 2}
                  text={DATA.description}
                />
              )}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-44 md:size-60 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <React.Fragment key={key}>
          {sectionComponents[key]}
        </React.Fragment>
      ))}
    </main>
  );
}
