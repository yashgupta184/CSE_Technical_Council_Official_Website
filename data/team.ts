export type CellType = "AIC" | "CPC" | "DCT" | "RAC" | "CORE";

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
    tagline:
      "Fostering practical exploration in Artificial Intelligence, Machine Learning, Generative AI, and Automation.",
    vision:
      "Empower students to innovate and build practical AI solutions through projects, workshops, hackathons, and collaboration.",
    description:
      "The AI Innovation Cell fosters a culture of intelligent experimentation, hands-on learning, and practical innovation. It brings together students who are curious about Artificial Intelligence, Machine Learning, Generative AI, Automation, and the technologies shaping the future of software and digital systems.",
    focus: [
      "Artificial Intelligence & Machine Learning",
      "Generative AI & LLM Systems",
      "Automation & Autonomous Agents",
      "Applied AI Solutions & Hackathons",
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
    id: "CPC",
    name: "CPC",
    fullName: "Competitive Programming Cell",
    title: "COMPETITIVE CODING & ALGORITHMS",
    number: "02",
    tagline:
      "Building strong coding fundamentals, advanced problem-solving skills, and competitive excellence.",
    vision:
      "Build strong coding fundamentals and competitive excellence across programming contests, technical interviews, and real-world development.",
    description:
      "The Competitive Programming Cell develops strong coding fundamentals and advanced problem-solving abilities. It provides students with a structured environment to practise Data Structures & Algorithms, improve algorithmic thinking, prepare for technical interviews, and participate in programming competitions through regular practice sessions, coding contests, and bootcamps.",
    focus: [
      "Data Structures & Algorithms",
      "Competitive Programming Contests",
      "Technical Interview Preparation",
      "Algorithmic Problem-Solving & Ladders",
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
  {
    id: "DCT",
    name: "DCT",
    fullName: "Design & Creativity Team",
    title: "UI/UX DESIGN & DIGITAL MEDIA",
    number: "03",
    tagline:
      "Building the Council's digital and visual identity through UI/UX design, web development, and creative media.",
    vision:
      "Build a strong digital and visual identity for the Council while providing students with hands-on experience and conducting workshops that support creative and technical growth.",
    description:
      "The Design & Creativity Team develops the digital and visual identity of the CSE Technical Council. It works on UI/UX design, web development, graphic design, presentation assets, event creatives, and other communication materials that support Council initiatives.",
    focus: [
      "UI/UX Design & User Research",
      "Web & Frontend Development",
      "Graphic Design & Visual Branding",
      "Creative Media & Event Assets",
    ],
    route: "/cells/dct",
    color: {
      accent: "text-amber-600",
      border: "border-amber-200 dark:border-amber-900/50",
      bgBadge: "bg-amber-50 dark:bg-amber-950/50",
      textBadge: "text-amber-700 dark:text-amber-400",
      gradient: "from-amber-500 to-orange-600",
    },
  },
  {
    id: "RAC",
    name: "RAC",
    fullName: "Research Activity Cell",
    title: "RESEARCH & SCHOLARLY INQUIRY",
    number: "04",
    tagline:
      "Cultivating a research-driven mindset and positioning the department as a hub for student-centric research.",
    vision:
      "Cultivate a research-driven mindset and position the department as a hub for student-centric research by guiding students through methodology, technical writing, publications, and patents.",
    description:
      "The Research Activity Cell nurtures a research-driven environment in which students learn to identify problems, explore domains, review existing work, develop ideas, and communicate their findings through research cohorts, faculty guidance, senior mentorship, and collaborative team formation.",
    focus: [
      "Research Methodology & Domain Exploration",
      "Technical Writing & Scientific Communication",
      "Peer-Reviewed Publications & Conferences",
      "Patents & Innovative Project Development",
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
];

export const councilCoordinator = {
  name: "Dr. Dhiraj Pandey",
  role: "Coordinator",
  council: "CSE Technical Council",
  institution: "JSS University, Noida",
  department: "Department of CSE and Allied Branches",
  vision: "Council vision statement will be added here.",
  image: "dhiraj-pandey",
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
];

export const studentCoordinators: CoordinatorMember[] = [
  {
    id: "stu-aic-1",
    name: "Yash Gupta",
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
];

export const completeTeamMembers: TeamMember[] = [
  // =========================================================================
  // 1. AI INNOVATION CELL (AIC)
  // =========================================================================
  {
    id: "tm-aic-1",
    name: "Navya Gupta",
    role: "Student Member",
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
    name: "Sanchita Singh",
    role: "Student Member",
    cell: "AIC",
    quote: "Exploring machine learning architectures, Generative AI models, and real-world intelligence.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-aic-3",
    name: "Aryan Garg",
    role: "Student Member",
    cell: "AIC",
    quote: "Building autonomous agents, intelligent workflows, and scalable AI solutions.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-aic-4",
    name: "Ipshita Srivastava",
    role: "Student Member",
    cell: "AIC",
    quote: "Passionate about generative AI, automation pipelines, and hands-on collaborative learning.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-aic-5",
    name: "Harshit Jain",
    role: "Student Member",
    cell: "AIC",
    quote: "Transforming cutting-edge AI research and foundation models into practical applications.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },

  // =========================================================================
  // 2. COMPETITIVE PROGRAMMING CELL (CPC)
  // =========================================================================
  {
    id: "tm-cpc-1",
    name: "Alok Pal",
    role: "Student Member",
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
    role: "Student Member",
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
    role: "Student Member",
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
    role: "Student Member",
    cell: "CPC",
    quote: "Managing leaderboard systems, editorial walkthroughs, and weekly coding ladders.",
    image: "anshul-kanswal",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },

  // =========================================================================
  // 3. DESIGN & CREATIVITY TEAM (DCT)
  // =========================================================================
  {
    id: "tm-dct-1",
    name: "Garvit Garg",
    role: "Student Member",
    cell: "DCT",
    quote: "Crafting intuitive digital experiences, design systems, and cohesive brand identities.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-dct-2",
    name: "Harsh Verma",
    role: "Student Member",
    cell: "DCT",
    quote: "Bridging creative visual aesthetics with modern frontend engineering and interaction design.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-dct-3",
    name: "Aaryan Bhardwaj",
    role: "Student Member",
    cell: "DCT",
    quote: "Designing expressive visuals, presentation media, and engaging event creatives for the Council.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },

  // =========================================================================
  // 4. RESEARCH ACTIVITY CELL (RAC)
  // =========================================================================
  {
    id: "tm-rac-1",
    name: "Mohd. Sahal Parvez",
    role: "Student Member",
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
    role: "Student Member",
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
    name: "Divyanshi Verma",
    role: "Student Member",
    cell: "RAC",
    quote: "Investigating emerging computing domains, research methodology, and contributing to academic publications.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm-rac-4",
    name: "Anshika Mittal",
    role: "Student Member",
    cell: "RAC",
    quote: "Nurturing structured scientific inquiry, technical paper writing, and peer review rigor.",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];
