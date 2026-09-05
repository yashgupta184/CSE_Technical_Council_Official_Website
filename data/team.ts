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
  title: string;
  number: string;
  description: string;
  focus: string;
  route: string;
}

export const cellsData: CellInfo[] = [
  {
    id: "AIC",
    name: "AIC",
    title: "INNOVATION",
    number: "01",
    description: "Incubating high-impact projects, builder culture, and technical prototyping.",
    focus: "Applied AI • System Prototyping • Product Incubation",
    route: "/cells/aic",
  },
  {
    id: "RAC",
    name: "RAC",
    title: "RESEARCH",
    number: "02",
    description: "Fostering academic rigor, research publications, and fundamental computing inquiry.",
    focus: "Literature Deep Dives • Paper Publications • Advanced Systems",
    route: "/cells/rac",
  },
  {
    id: "CPC",
    name: "CPC",
    title: "COMPETITIVE PROGRAMMING",
    number: "03",
    description: "Elevating algorithmic mastery, competitive contests, and problem-solving velocity.",
    focus: "Algorithms • ICPC Training • High-Speed Problem Solving",
    route: "/cells/cpc",
  },
];

export const councilCoordinator = {
  name: "Dr. Dhiraj Pandey",
  role: "Coordinator",
  council: "CSE Technical Council",
  institution: "JSS University, Noida",
  department: "Department of Computer Science & Engineering",
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
    image: "/images/team/placeholder-faculty-aic.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "fac-rac",
    name: "Faculty Coordinator Name",
    role: "Faculty Coordinator",
    cell: "RAC",
    institution: "JSS University, Noida",
    quote: "Cultivating research mindset and scientific inquiry across modern computing paradigms.",
    image: "/images/team/placeholder-faculty-rac.jpg",
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
    image: "/images/team/placeholder-faculty-cpc.jpg",
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
    image: "/images/team/placeholder-student-aic.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yash-gupta18/",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "stu-rac-1",
    name: "Utkarsh Srivastava",
    role: "Lead Coordinator",
    cell: "RAC",
    quote: "Organizing reading groups, research methodologies, and collaborative paper writing pipelines.",
    image: "/images/team/placeholder-student-rac.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/utkarshsri1139/",
      email: "#",
      instagram: "https://www.instagram.com/utkarshsri1139/",
    },
  },
  {
    id: "stu-cpc-1",
    name: "Ujjwal Kaushik",
    role: "Lead Coordinator",
    cell: "CPC",
    quote: "Leading weekly editorial walkthroughs, ladder contests, and algorithmic problem sets.",
    image: "/images/team/placeholder-student-cpc.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/kaushikujjwal/",
      email: "#",
      instagram: "https://instagram.com/ujjwal_insane",
    },
  },
];

export const completeTeamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Team Member Name",
    role: "Core Developer",
    cell: "AIC",
    quote: "Architecting backend systems and distributed platforms for council initiatives.",
    image: "/images/team/placeholder-team-1.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-2",
    name: "Team Member Name",
    role: "Research Associate",
    cell: "RAC",
    quote: "Investigating generative architectures and verifiable machine learning workloads.",
    image: "/images/team/placeholder-team-2.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-3",
    name: "Alok Pal",
    role: "Competitive Programmer",
    cell: "CPC",
    quote: "Face the fear till you get over from it",
    image: "/images/team/placeholder-team-3.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-4",
    name: "Team Member Name",
    role: "Systems Lead",
    cell: "AIC",
    quote: "Building low-latency pipelines and cloud infrastructure for university projects.",
    image: "/images/team/placeholder-team-4.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-5",
    name: "Team Member Name",
    role: "Research Fellow",
    cell: "RAC",
    quote: "Focusing on systems security, cryptography, and network telemetry benchmarks.",
    image: "/images/team/placeholder-team-5.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-6",
    name: "Kartik Gupta",
    role: "Problem Setter",
    cell: "CPC",
    quote: "Curating problem testcases, mathematical proofs, and rating-based contests.",
    image: "/images/team/placeholder-team-6.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-7",
    name: "Team Member Name",
    role: "UI/UX & Design Engineer",
    cell: "AIC",
    quote: "Crafting modern editorial user interfaces and responsive web experiences.",
    image: "/images/team/placeholder-team-7.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
  {
    id: "tm-8",
    name: "Team Member Name",
    role: "Operations Lead",
    cell: "CORE",
    quote: "Coordinating technical workshops, hackathon venues, and council outreach.",
    image: "/images/team/placeholder-team-8.jpg",
    socials: {
      linkedin: "#",
      email: "#",
      instagram: "#",
    },
  },
];
