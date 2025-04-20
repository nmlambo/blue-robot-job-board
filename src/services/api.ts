import type { Job } from "@/types"

// Mock data
export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech",
    location: "Cape Town",
    type: "Full-time",
    salary: "R45,000 - R65,000 per month",
    description:
      "We are looking for an experienced Frontend Developer to join our team in Cape Town. You will be responsible for building user interfaces for our web applications using React and TypeScript.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management libraries",
      "Knowledge of modern CSS and responsive design",
      "Experience with testing frameworks",
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components and libraries",
      "Optimize applications for maximum performance",
      "Collaborate with backend developers and designers",
      "Ensure the technical feasibility of UI/UX designs",
    ],
    postedAt: "2 days ago",
    deadline: "15 May 2023",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Johannesburg",
    type: "Full-time",
    salary: "R50,000 - R70,000 per month",
    description:
      "We're seeking a Backend Engineer to design and implement scalable APIs and services. You'll work with our team to build robust systems that power our applications.",
    requirements: [
      "4+ years of experience with Node.js or Python",
      "Experience with SQL and NoSQL databases",
      "Knowledge of API design principles",
      "Understanding of cloud services (AWS, GCP)",
      "Experience with microservices architecture",
    ],
    responsibilities: [
      "Design and implement APIs and services",
      "Optimize database queries and data structures",
      "Implement security and data protection measures",
      "Collaborate with frontend developers",
      "Write automated tests for backend systems",
    ],
    postedAt: "1 week ago",
    deadline: "20 May 2023",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Durban",
    type: "Full-time",
    salary: "R35,000 - R50,000 per month",
    description:
      "Join our design team to create beautiful and intuitive user experiences. You'll work on various projects and collaborate with developers to bring your designs to life.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools (Figma, Sketch)",
      "Understanding of user-centered design principles",
      "Experience with design systems",
      "Portfolio showcasing your work",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with developers on implementation",
      "Iterate designs based on user feedback",
    ],
    postedAt: "3 days ago",
    deadline: "25 May 2023",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote (South Africa)",
    type: "Contract",
    salary: "R40,000 - R60,000 per month",
    description:
      "We're looking for a DevOps Engineer to help us automate and optimize our infrastructure. You'll work on CI/CD pipelines, cloud infrastructure, and monitoring systems.",
    requirements: [
      "3+ years of experience in DevOps",
      "Experience with AWS or GCP",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with CI/CD tools",
      "Scripting skills (Bash, Python)",
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure using IaC",
      "Set up monitoring and alerting systems",
      "Optimize system performance and reliability",
      "Collaborate with development teams",
    ],
    postedAt: "5 days ago",
    deadline: "18 May 2023",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "Innovate",
    location: "Pretoria",
    type: "Full-time",
    salary: "R45,000 - R65,000 per month",
    description:
      "Join our product team to lead the development of innovative products. You'll work closely with engineering, design, and marketing teams to define product strategy and roadmap.",
    requirements: [
      "3+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and stakeholder management",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Create and prioritize product backlog",
      "Work with engineering and design teams",
      "Analyze market trends and user feedback",
      "Track and report on product metrics",
    ],
    postedAt: "1 week ago",
    deadline: "30 May 2023",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Cape Town",
    type: "Full-time",
    salary: "R50,000 - R75,000 per month",
    description:
      "We're seeking a Data Scientist to help us extract insights from complex datasets. You'll develop models and algorithms to solve business problems and drive decision-making.",
    requirements: [
      "MS or PhD in a quantitative field",
      "Experience with Python and data science libraries",
      "Strong statistics and machine learning knowledge",
      "Experience with big data technologies",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Develop machine learning models",
      "Analyze large datasets to extract insights",
      "Create data visualizations and reports",
      "Collaborate with engineering and product teams",
      "Present findings to non-technical stakeholders",
    ],
    postedAt: "3 days ago",
    deadline: "22 May 2023",
  },
]

// Simulating API call with a delay
export const fetchJobs = async (): Promise<Job[]> => {
  // Simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return mockJobs
}

// Simulating posting a new job
export const postJob = async (jobData: Omit<Job, "id" | "postedAt">): Promise<Job> => {
  // Simulating network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const newJob: Job = {
    ...jobData,
    id: String(mockJobs.length + 1),
    postedAt: "Just now",
  }

  mockJobs.push(newJob)
  return newJob
}