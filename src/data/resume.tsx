import { Icons } from "@/components/icons";
import { House, Palette, Megaphone, Workflow, Clapperboard, Camera, TrendingUp, Users, Newspaper, BookMarked, Landmark, GraduationCap, Mic, BookText, BarChart3, DoorOpen, Flag, Blocks, Trophy } from "lucide-react";

export const DATA = {
  name: "Laura McGuinn",
  initials: "LM",
  url: "https://lauramcguinn.com",
  location: "Columbia, SC",
  locationLink: "https://www.google.com/maps/place/columbia+sc",
  description: "",
  summary:
    "I'm a creative strategist that helps mission-driven organizations communicate, operate, and grow. I've led communications, built internal systems, designed programs, and managed teams across established institutions and early-stage startups. Whether the job calls for a messaging overhaul, a systems build, or a campaign launch, I show up ready to build it.\n\nI studied strategies for building viable arts and cultural initiatives at SCAD, where design thinking became my primary lens: I start from the user's perspective, resist easy assumptions, and build things that are sustainable rather than just clever.\n\nIn practice, that looked like securing $35,000 in grant funding for a public humanities series I designed and directed from scratch, reviving a dormant Instagram account and more than tripling its following, and building internship programs that genuinely invest in young people and result in exit interviews with lines like 'I'm no longer afraid of not knowing how to do something.'\n\nI'm drawn to organizations doing meaningful work that need a thoughtful, versatile partner to help them punch above their weight. Give me a clear idea and a real constraint, and I'll build you something that works.",
  avatarUrl: "/Laura.png",
  sections: {
    about: { order: 1, enabled: true, heading: "" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "What I Do"},
    projects: {
      order: 5, enabled: true,
      label: "Projects",
      text: "",
    },
    contact: {
      order: 6, enabled: true,
      label: "Get in Touch",
      heading: "Contact",
      text: "Send me a note. I'd love to hear what you're building.",
    },
  },
  photos: [],
  skills: [
    { name: "Operations", icon: Workflow },
    { name: "Programs", icon: Blocks },
    { name: "Production", icon: Clapperboard },
    { name: "Design", icon: Palette },
    { name: "Communications", icon: Megaphone },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "mcguinnlaura@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lauramcguinn/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mcguinnlaura@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Independent / Freelance",
      href: "",
      badges: ["Consulting"],
      location: "Remote",
      title: "Creative Strategist & Consultant",
      logoUrl: "/freelance.png",
      start: "2023",
      end: undefined,
      description:
        "Design and implement systems for onboarding, documentation, program management, online learning, and cross-functional coordination. Conduct research and develop documentation for processes and standards in data management. Build systems adopted by thousands of nonprofits, including tools featured and recommended by Notion HQ.",
    },
    {
      company: "Novelly",
      href: "https://www.novelly.org/",
      badges: [],
      location: "San Francisco, CA (Remote)",
      title: "Operations Manager",
      logoUrl: "/novelly.png",
      start: "2022",
      end: "2023",
      description:
        "Partnered closely with founder to oversee internal systems, performance management, and organizational efficiency. Built a custom operating system in 4 weeks to establish predictable operating rhythms, track OKRs, and support strategic decision-making. Designed and piloted an internship program providing college students with a full academic year of structured work and leadership experience. Provided clear direction and coaching to staff and interns, strengthening judgment and confidence without rescuing or over-functioning.",
    },
    {
      company: "SC Humanities",
      href: "https://schumanities.org",
      badges: [],
      location: "Columbia, SC",
      title: "Communications Director",
      logoUrl: "/sch.png",
      start: "2018",
      end: "2021",
      description:
        "Owned communications and social strategy across every channel, produced public humanities programs, designed the organization's annual reports and campaign materials, and managed editorial partnerships and press. Grew the combined social following 105% and reached a top-3 ranking among Southeastern state humanities councils.",
    },
  ],
  education: [
    {
      school: "Savannah College of Art and Design",
      href: "https://www.scad.edu/academics/programs/creative-business-leadership",
      degree: "M.A. in Business Design and Arts Leadership",
      logoUrl: "/scad.png",
      start: "2016",
      end: "2018",
    },
    {
      school: "University of South Carolina",
      href: "https://sc.edu/",
      degree: "B.A. in Art History and French Language & Literature",
      logoUrl: "/usc.png",
      start: "2011",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Scaling a Successful Program Model to New Communities",
      icon: GraduationCap,
      href: "https://canva.link/dm2vo9m9ap8emye",
      dates: "2025",
      active: false,
      description:
        "Developed the full materials package for a training initiative structured like a semester-long college course that trains community leaders to implement Magnolia Project's proven career-connected learning program model in their own communities.",
      technologies: ["Programs", "Operations"],
      links: [
        { type: "Preview the Course", href: "https://canva.link/dm2vo9m9ap8emye", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Visual Guides to a Program's Research, Methodology, & Data",
      icon: BarChart3,
      href: "https://canva.link/k5onus8352jmrts",
      dates: "2024 – 2025",
      active: true,
      description:
        "Designed a suite of infographics and one-pagers that turn Magnolia Project's research and program data into clear, funder- and educator-ready visuals. From case studies and program-flow diagrams to syntheses of the developmental research behind the model, the pieces help make an evidence-based case for their programs.",
      technologies: ["Design", "Communications"],
      links: [
        { type: "Infographics", href: "https://canva.link/rhnx8njz77m2yww", icon: <Icons.globe className="size-3" /> },
        { type: "One-Pagers", href: "https://canva.link/k5onus8352jmrts", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Expanding Access to Digital Literacy & Community Engagement",
      icon: BookText,
      href: "https://canva.link/70nwo5yg6tinkd7",
      dates: "2023 – 2024",
      active: true,
      description:
        "Designed a step-by-step facilitation guide for the SC Arts Commission to scale Quilted Quatrains, a virtual quilting and storytelling workshop series for seniors in rural South Carolina. The series doubled as digital-literacy training: participants joined from tablets they'd received from a program designed to facilitate access to telehealth and mitigate social isolation during the pandemic.",
      technologies: ["Design"],
      links: [
        { type: "Facilitation Guide", href: "https://canva.link/70nwo5yg6tinkd7", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Building an Internship Program & Culture Handbook",
      icon: Users,
      href: "https://canva.link/ljfap3mf14ws7bu",
      dates: "2022",
      active: true,
      description:
        "Built and ran Novelly's equity-centered remote internship program from the ground up, managing nine interns across nine disciplines. The program was built on the belief that interns deserve to be treated as emerging leaders, not task-fillers. Flexible scheduling, 1:1 mentorship, real project ownership, and monthly career coaching produced exit interviews with lines like "I'm no longer afraid of not knowing how to do something." A facilitated team retreat produced Novelly's first-ever Culture Handbook, capturing the shared values and collaboration norms the program ran on.",
      technologies: ["Operations", "Programs"],
      links: [
        { type: "Culture Handbook", href: "https://canva.link/ljfap3mf14ws7bu", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
      {
      title: "Elevating Youth Voices on The Read to Heal Podcast",
      icon: Mic,
      href: "https://www.youtube.com/playlist?list=PLQhARJYVbZOOGRUFUNCw7q8ECUoOsytQX",
      dates: "2022",
      active: false,
      description:
        "Led a team of three college interns to produce the first season of Novelly's Read to Heal podcast. The series spotlighted young authors from the nonprofit's Rising Voices Collective, with a finale featuring author and former Disney Channel star Alyson Stoner.",
      technologies: ["Production", "Operations"],
      links: [
        { type: "Season 1", href: "https://www.youtube.com/playlist?list=PLQhARJYVbZOOGRUFUNCw7q8ECUoOsytQX", icon: <Icons.youtube className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Onboarding and Engaging Remote Team Members",
      icon: DoorOpen,
      href: "https://canva.link/glhrc0n0kag0wej",
      dates: "2022",
      active: false,
      description:
        "Designed Novelly 101, a self-guided onboarding experience for new team members. It introduces the organization's tech stack, prompts the user to add themselves to the staff directory, and guides them through a goal-setting exercise. It even requires reading pieces by Novelly's youth authors, so people start grounded in the mission, not just the logistics.",
      technologies: ["Operations", "Design"],
      links: [
        { type: "Onboarding Slides", href: "https://canva.link/glhrc0n0kag0wej", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Producing Programs on Imagery, Democracy, & Media Literacy",
      icon: Camera,
      href: "https://schumanities.org/picturingdemocracy/",
      dates: "2021",
      active: true,
      description:
        "Three public programs and three media literacy workshops for rural South Carolina high school students on imagery, democracy, and media literacy. Designed, directed, and promoted from scratch with a strategic university partnership.",
      technologies: ["Programs", "Production", "Communications"],
      links: [
        { type: "Program Details", href: "https://schumanities.org/picturingdemocracy/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Creating a Communications Strategy that Drives Social Growth",
      icon: TrendingUp,
      href: "https://drive.google.com/file/d/17y5hC9LufWnYnJNYg_soa6fnS8XmFQMB/view?usp=sharing",
      dates: "2018 – 2021",
      active: true,
      description:
        "Grew SC Humanities' combined social following by 105% over three years, reaching top-3 ranking among Southeastern state humanities councils by Facebook audience. Behind the numbers sat a deliberate strategy: an annual communications plan and a messaging guide that defined the voice, channels, and audience priorities across every platform.",
      technologies: ["Communications", "Social Media", "Design", "Strategy"],
      links: [
        { type: "Communications Plan", href: "https://drive.google.com/file/d/17y5hC9LufWnYnJNYg_soa6fnS8XmFQMB/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "Social Growth", href: "https://drive.google.com/file/d/1ceqylY0glzByNiZ7zVtTp4Fkfozyy2WC/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Planning & Producing the Annual Governor's Awards Ceremony",
      icon: Trophy,
      href: "",
      dates: "2019 – 2021",
      active: true,
      description:
        "Coordinated and promoted the annual Governor's Awards in the Humanities. Designed the printed program, ran the email campaign to a 5,000+ list (nominations → save-the-date → recipients), and managed event logistics. When the pandemic prevented in-person gatherings, produced a pre-recorded virtual ceremony in 2020 and a live-streamed 30th-anniversary ceremony plus a recipients' panel discussion in 2021.",
      technologies: ["Production", "Communications", "Design"],
      links: [
        { type: "Live-Stream Ceremony", href: "https://www.youtube.com/watch?v=OyZ37nGv-Tc", icon: <Icons.youtube className="size-3" /> },
        { type: "Panel Discussion", href: "https://youtu.be/fnRdg6Gomr8", icon: <Icons.youtube className="size-3" /> },
        { type: "Pre-Recorded Ceremony", href: "https://youtu.be/6m_OGp78u70", icon: <Icons.youtube className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Designing District-by-District Legislative Leave-Behinds",
      icon: Flag,
      href: "",
      dates: "2020 – 2021",
      active: false,
      description:
        "Designed the district-by-district leave-behind handouts SC Humanities carried to Humanities on the Hill, the annual DC fly-in where state councils lobby Congress to protect federal humanities funding. Each was tailored to one legislator's district, showing the exact grant dollars, program attendance, funded local organizations, and constituent quotes from their own backyard, so the case for funding landed as local, not abstract.",
      technologies: ["Design", "Communications"],
      links: [
        { type: "2020 Handouts", href: "https://drive.google.com/file/d/1v0DHs-YuFSfmJw9aFQfvOnpw9O2gMbZa/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "2021 Handouts", href: "https://drive.google.com/file/d/1RJuGuEnzyJHlr6lUsMKXmk6oSgz6kGVc/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    
    {
      title: "Capturing a Federally-Funded Organization's Annual Impact",
      icon: Newspaper,
      href: "",
      dates: "2019 – 2020",
      active: false,
      description:
        "Designed SC Humanities' annual report for three consecutive years, translating program data, photography, and staff content into polished publications distributed to funders, board members, and community partners.",
      technologies: ["Design", "Communications"],
      links: [
        { type: "2019 Annual Report", href: "https://drive.google.com/file/d/1csI81yA-AfAOfLpAU3_8Y8W6EtqKp1kX/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "2020 Annual Report", href: "https://drive.google.com/file/d/1DWSXtjWmHhaxgAk_lrO2rm0wq7AiLoBe/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bringing Smithsonian Traveling Exhibits to Small-Town SC",
      icon: Landmark,
      href: "",
      dates: "2020",
      active: false,
      description:
        "Designed materials to support bringing three Smithsonian Museum on Main Street exhibitions to rural communities: *Crossroads: Change in Rural America*, *Water/Ways*, and *Voices & Votes: Democracy in America*. The work included RFPs and application forms to recruit host venues, funder handouts making the case for investment, and flyers for local events.",
      technologies: ["Design", "Communications"],
      links: [
        { type: "Host Venue RFP & Application", href: "https://drive.google.com/file/d/1Re5gN594HBjgD71w7z-2qMxuYFhz5jX9/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "Funder One-Sheet", href: "https://drive.google.com/file/d/1GbyuQMFUox9rcJbprosmrNBNBWFbk0nT/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "Writing Workshop Flyer", href: "https://drive.google.com/file/d/1-WVUUTcWBSfLxl7mI0g_57VwnpWJrzzB/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
      ],
      image: "",
      video: "",
    },
   {
      title: "Coordinating a Partnership with an Iconic Literary Publication",
      icon: BookMarked,
      href: "https://drive.google.com/drive/folders/1yTox_7prtq5kr6lENUqSF-oNZixZUdfX?usp=drive_link",
      dates: "2019",
      active: false,
      description:
        "Produced SC Humanities' placement in the Oxford American: designed the full-page print ad and two web banners, created the opt-in and reservation forms used to engage board members and donors, and wrote the accompanying feature profiling the organization's programs and impact.",
      technologies: ["Design", "Communications", "Writing"],
      links: [
        { type: "Print Ad", href: "https://drive.google.com/file/d/1H-0cRQkClgJybHNbH7h2WpRi6T9AiVfY/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "Web Banner", href: "https://drive.google.com/file/d/1stOqpXjI__UYKQpFXgRFixexGe8OfYgC/view?usp=sharing", icon: <Icons.googleDrive className="size-3" /> },
        { type: "Feature", href: "https://docs.google.com/document/d/16Pwt9O-JT9hVltsMhKFZ8nCAjy5EQ5H6/edit?usp=sharing&ouid=110154024008082762527&rtpof=true&sd=true", icon: <Icons.googleDrive className="size-3" /> },
      ],
      image: "",
      video: "",
    },

  ],
  hackathons: [],
} as const;
