export type CellType = "AIC" | "RAC" | "CPC" | "CORE";

export interface SocialLinks {
  linkedin?: string;
  email?: string;
  instagram?: string;
  github?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  cell: CellType;
  quote?: string;
  image?: string;
  socials: SocialLinks;
}

export interface CoordinatorMember extends TeamMember {
  department?: string;
  institution?: string;
}

export interface CellInfo {
  id: CellType;
  name: string;
  fullName: string;
  title: string;
  number: string;
  tagline: string;
  vision: string;
  description: string;
  focus: string[];
  route: string;
  color: {
    accent: string;
    border: string;
    bgBadge: string;
    textBadge: string;
    gradient: string;
  };
}

export const cellsData: CellInfo[] = [
  {
    id: "AIC",
    name: "AIC",
    fullName: "AI Innovation Cell",
    title: "ARTIFICIAL INTELLIGENCE & INNOVATION",
    number: "01",
    tagline: "Bridging foundational machine learning with real-world product engineering.",
    vision:
      "To build a student-driven ecosystem where emerging AI paradigms, generative technologies, and system automation are rapidly converted into working, scalable prototypes and impactful solutions for industry and society.",
    description:
      "The AI Innovation Cell is dedicated to hands-on experimentation across Generative AI, Computer Vision, Natural Language Processing, and Autonomous Systems through sprints, hackathons, and product incubations.",
    focus: [
      "Applied Generative AI & LLM Systems",
      "Computer Vision & Edge Intelligence",
      "Full-Stack Product Prototyping",
      "Automation & Cloud Infrastructure",
    ],
    route: "/cells/aic",
    color: {
      accent: "text-blue-600",
      border: "border-blue-200 dark:border-blue-900/50",
      bgBadge: "bg-blue-50 dark:bg-blue-950/50",
      textBadge: "text-blue-700 dark:text-blue-400",
      gradient: "from-blue-600 to-indigo-600",
    },
  },
  {
    id: "RAC",
    name: "RAC",
    fullName: "Research Activity Cell",
    title: "RESEARCH & SCHOLARLY INQUIRY",
    number: "02",
    tagline: "Cultivating scientific rigor, literature exploration, and impactful academic publications.",
    vision:
      "To instill a culture of academic rigor and deep scientific inquiry, guiding aspiring student researchers to investigate open frontiers in computing and publish peer-reviewed papers in high-impact journals and conferences.",
    description:
      "The Research Activity Cell facilitates reading groups, methodology bootcamps, dataset curation, and faculty mentorship to turn undergraduate research into publishable contributions.",
    focus: [
      "Literature Surveys & Paper Reading Groups",
      "Empirical Benchmarking & Reproducibility",
      "Technical Writing & Peer-Review Prep",
      "Systems Security & Cryptographic Protocols",
    ],
    route: "/cells/rac",
    color: {
      accent: "text-purple-600",
      border: "border-purple-200 dark:border-purple-900/50",
      bgBadge: "bg-purple-50 dark:bg-purple-950/50",
      textBadge: "text-purple-700 dark:text-purple-400",
      gradient: "from-purple-600 to-pink-600",
    },
  },
  {
    id: "CPC",
    name: "CPC",
    fullName: "Competitive Programming Cell",
    title: "COMPETITIVE CODING & ALGORITHMS",
    number: "03",
    tagline: "Mastering algorithms, data structures, and high-velocity problem-solving.",
    vision:
      "To foster algorithmic mastery and analytical thinking across the student community, training students to conquer ICPC, global coding challenges, and technical engineering interviews at top tech companies.",
    description:
      "The Competitive Programming Cell conducts structured weekly contests, editorial walkthroughs, algorithmic ladders, and peer-coaching sprints to elevate departmental coding prowess.",
    focus: [
      "Advanced Data Structures & Graph Algorithms",
      "Dynamic Programming & Mathematical Foundations",
      "ICPC / Codeforces Ladder Training",
      "Systematic Contest Editorial Walkthroughs",
    ],
    route: "/cells/cpc",
    color: {
      accent: "text-emerald-600",
      border: "border-emerald-200 dark:border-emerald-900/50",
      bgBadge: "bg-emerald-50 dark:bg-emerald-950/50",
      textBadge: "text-emerald-700 dark:text-emerald-400",
      gradient: "from-emerald-600 to-teal-600",
    },
  },
];

export const councilCoordinator = {
  name: "Dr. Dhiraj Pandey",
  role: "Coordinator",
  council: "CSE Technical Council",
  institution: "JSS University, Noida",
  department: "Department of CSE and Allied Branches",
  vision: "Council vision statement will be added here.",
  image: "/images/team/dhiraj-pandey.jpg",
  quote: "Empowering the next generation of engineers to transcend code and build foundational technical leadership.",
  socials: {
    linkedin: "#",
    email: "#",
  },
};

export const facultyCoordinators: CoordinatorMember[] = [
  {
    id: "fac-aic",
    name: "Dr. Sur Singh Rawat",
    role: "Faculty Coordinator",
    cell: "AIC",
    institution: "JSS University, Noida",
    quote: "Guiding students to bridge theoretical algorithms with scalable real-world innovation.",
    image: "sur-singh-rawat",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "fac-rac",
    name: "Ms. Attiuttama",
    role: "Faculty Coordinator",
    cell: "RAC",
    institution: "JSS University, Noida",
    quote: "Cultivating research mindset and scientific inquiry across modern computing paradigms.",
    image: "attiuttma",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "fac-cpc",
    name: "Mr. Vinooth Prakash",
    role: "Faculty Coordinator",
    cell: "CPC",
    institution: "JSS University, Noida",
    quote: "Sharpening mathematical rigor, algorithmic intuition, and contest readiness.",
    image: "vinooth-prakash",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
];

export const studentCoordinators: CoordinatorMember[] = [
  {
    id: "stu-aic-1",
    name: "Yash gupta",
    role: "Lead Coordinator",
    cell: "AIC",
    quote: "Driving builder sprints, hands-on hackathons, and technical incubations for the department.",
    image: "yash-gupta",
    socials: {
      linkedin: "https://www.linkedin.com/in/yash-gupta18/",
      github: "https://github.com/yashgupta184",
      instagram: "#",
    },
  },
  {
    id: "stu-rac-1",
    name: "Utkarsh Srivastava",
    role: "Lead Coordinator",
    cell: "RAC",
    quote:
      "I like asking 'what if?' almost as much as I like figuring out 'how do we build it?' Here's to more experiments, more ideas, and hopefully a few things that actually work.",
    image: "utkarsh-srivastava",
    socials: {
      linkedin: "https://www.linkedin.com/in/utkarshsri1139/",
      github: "https://github.com/utkarshsrivastava1139",
      instagram: "https://www.instagram.com/utkarshsri1139/",
    },
  },
  {
    id: "stu-cpc-1",
    name: "Ujjwal Kaushik",
    role: "Lead Coordinator",
    cell: "CPC",
    quote:
      "Those who are truly familiar with reality and its nature have nothing wrong with ignoring it, because they know it will never be able to defeat them.",
    image: "ujjwal-kaushik",
    socials: {
      linkedin: "https://www.linkedin.com/in/kaushikujjwal/",
      github: "https://github.com/Ujjwal-Qubit",
      instagram: "https://www.instagram.com/ujjwal_insane/",
    },
  },
];

export const completeTeamMembers: TeamMember[] = [
  // =========================================================================
  // AI INNOVATION CELL (AIC)
  // =========================================================================
  {
    id: "tm-aic-1",
    name: "Navya Gupta",
    role: "Core Team Member",
    cell: "AIC",
    quote: "You never lose, you either win or learn",
    image: "navya-gupta",
    socials: {
      linkedin: "https://www.linkedin.com/in/navya-gupta14",
      github: "https://github.com/SyntaxSphinx",
    },
  },
  {
    id: "tm-aic-2",
    name: "Team Member Name",
    role: "AI Systems Engineer",
    cell: "AIC",
    quote: "Architecting backend systems and distributed platforms for council initiatives.",
    image: "/images/team/placeholder-team-aic-2.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-3",
    name: "Team Member Name",
    role: "Full-Stack Developer",
    cell: "AIC",
    quote: "Building low-latency pipelines and cloud infrastructure for university projects.",
    image: "/images/team/placeholder-team-aic-3.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-4",
    name: "Team Member Name",
    role: "Machine Learning Engineer",
    cell: "AIC",
    quote: "Developing neural architectures and fine-tuning domain-specific LLM workflows.",
    image: "/images/team/placeholder-team-aic-4.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-5",
    name: "Team Member Name",
    role: "Computer Vision Specialist",
    cell: "AIC",
    quote: "Implementing real-time visual perception algorithms and edge deployment models.",
    image: "/images/team/placeholder-team-aic-5.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-6",
    name: "Team Member Name",
    role: "NLP & Agentic Systems Lead",
    cell: "AIC",
    quote: "Building RAG pipelines, retrieval strategies, and multi-agent coordination frameworks.",
    image: "/images/team/placeholder-team-aic-6.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-7",
    name: "Team Member Name",
    role: "Cloud & DevOps Architect",
    cell: "AIC",
    quote: "Scaling high-availability clusters and CI/CD pipelines for production deployments.",
    image: "/images/team/placeholder-team-aic-7.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-8",
    name: "Team Member Name",
    role: "Backend & API Developer",
    cell: "AIC",
    quote: "Designing secure, high-throughput microservices and database schemas.",
    image: "/images/team/placeholder-team-aic-8.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-aic-9",
    name: "Team Member Name",
    role: "Technical Operations & Sprints",
    cell: "AIC",
    quote: "Coordinating hackathon sprints, product roadmaps, and technical incubation.",
    image: "/images/team/placeholder-team-aic-9.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },

  // =========================================================================
  // RESEARCH ACTIVITY CELL (RAC)
  // =========================================================================
  {
    id: "tm-rac-1",
    name: "Mohd Sahal Parvez",
    role: "Core Team Member",
    cell: "RAC",
    quote: "The Social Network (Timestamp: 1:51:06)",
    image: "mohd-sahal-parvez",
    socials: {
      linkedin: "https://www.linkedin.com/in/sehal-pervez",
    },
  },
  {
    id: "tm-rac-2",
    name: "Krish Singh",
    role: "Core Team Member",
    cell: "RAC",
    quote: "I'm not chasing perfection. I'm building someone I'll be proud of.",
    image: "krish-singh",
    socials: {
      linkedin: "https://www.linkedin.com/in/krish-singh-090071307",
      github: "https://github.com/KRISH2006-IIT",
      instagram: "https://www.instagram.com/krishsingh__",
    },
  },
  {
    id: "tm-rac-3",
    name: "Team Member Name",
    role: "Empirical Benchmarking Lead",
    cell: "RAC",
    quote: "Validating reproducibility, statistical significance, and experimental baselines.",
    image: "/images/team/placeholder-team-rac-3.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-rac-4",
    name: "Team Member Name",
    role: "Data & Literature Analyst",
    cell: "RAC",
    quote: "Synthesizing literature reviews and survey frameworks across cutting-edge CS domains.",
    image: "/images/team/placeholder-team-rac-4.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-rac-5",
    name: "Team Member Name",
    role: "Scientific Publications Lead",
    cell: "RAC",
    quote: "Drafting technical manuscripts and structuring submissions for peer-reviewed conferences.",
    image: "/images/team/placeholder-team-rac-5.jpg",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },

  // =========================================================================
  // COMPETITIVE PROGRAMMING CELL (CPC)
  // =========================================================================
  {
    id: "tm-cpc-1",
    name: "Alok Pal",
    role: "Competitive Programmer",
    cell: "CPC",
    quote: "Face the fear till you get over from it",
    image: "alok-pal",
    socials: {
      linkedin: "https://www.linkedin.com/in/alok-pal08",
      github: "https://github.com/alokpal17",
      instagram: "https://www.instagram.com/itz_alokpal",
    },
  },
  {
    id: "tm-cpc-2",
    name: "Kartik Gupta",
    role: "Problem Setter",
    cell: "CPC",
    quote: "Let me fall if I must the person I am becoming will catch me",
    image: "kartik-gupta",
    socials: {
      linkedin: "https://www.linkedin.com/in/kartik-gupta-tech/",
      github: "https://github.com/kartikgupta372",
      instagram: "https://www.instagram.com/13guptakartik/",
    },
  },
  {
    id: "tm-cpc-3",
    name: "Luv Mangla",
    role: "Competitive Programmer",
    cell: "CPC",
    quote: "Somewhere between deadlines, dreams, and late night ideas - I found myself.",
    image: "luv-mangla",
    socials: {
      linkedin: "https://www.linkedin.com/in/luv-mangla/",
      github: "https://github.com/luvmangla05/",
      instagram: "https://www.instagram.com/luvmangla_05/",
    },
  },
  {
    id: "tm-cpc-4",
    name: "Anshul Kanswal",
    role: "Contest Platform Coordinator",
    cell: "CPC",
    quote: "Managing leaderboard systems, editorial walkthroughs, and weekly coding ladders.",
    image: "anshul-kanswal",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
];
