export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    description:
      "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces using React and Next.js.",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    postedDate: "2025-03-10",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "Data Systems",
    description:
      "Join our backend team to build scalable APIs and services using Node.js and PostgreSQL.",
    location: "Remote",
    salary: "$100,000 - $130,000",
    postedDate: "2025-03-12",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Startup Hub",
    description:
      "We need a versatile developer who can work on both frontend and backend using modern JavaScript frameworks.",
    location: "San Francisco, CA",
    salary: "$110,000 - $140,000",
    postedDate: "2025-03-15",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Cloud Native",
    description:
      "Help us build and maintain our cloud infrastructure using AWS, Docker, and Kubernetes.",
    location: "Austin, TX",
    salary: "$115,000 - $145,000",
    postedDate: "2025-03-08",
  },
  {
    id: "5",
    title: "UI/UX Designer",
    company: "Creative Digital",
    description:
      "Design beautiful and intuitive user interfaces for web and mobile applications.",
    location: "Chicago, IL",
    salary: "$85,000 - $110,000",
    postedDate: "2025-03-14",
  },
  {
    id: "6",
    title: "Product Manager",
    company: "Product Ventures",
    description:
      "Lead product development from conception to launch, working with cross-functional teams.",
    location: "Boston, MA",
    salary: "$120,000 - $150,000",
    postedDate: "2025-03-16",
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "Analytics Pro",
    description:
      "Apply machine learning and statistical methods to extract insights from large datasets.",
    location: "Seattle, WA",
    salary: "$105,000 - $135,000",
    postedDate: "2025-03-11",
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "Quality First",
    description:
      "Ensure software quality through automated testing and quality assurance processes.",
    location: "Denver, CO",
    salary: "$80,000 - $100,000",
    postedDate: "2025-03-13",
  },
  {
    id: "9",
    title: "Mobile Developer (iOS)",
    company: "Apple Inc.",
    description: "Develop iOS applications using Swift and SwiftUI.",
    location: "Cupertino, CA",
    salary: "$120,000 - $160,000",
    postedDate: "2025-03-18",
  },
  {
    id: "10",
    title: "Mobile Developer (Android)",
    company: "Google",
    description: "Build Android applications using Kotlin and Jetpack Compose.",
    location: "Mountain View, CA",
    salary: "$125,000 - $165,000",
    postedDate: "2025-03-19",
  },
  {
    id: "11",
    title: "Security Engineer",
    company: "CyberGuard",
    description: "Protect our systems and data from cyber threats.",
    location: "Washington, D.C.",
    salary: "$130,000 - $170,000",
    postedDate: "2025-03-20",
  },
  {
    id: "12",
    title: "Technical Writer",
    company: "Documentation Experts",
    description: "Create clear and concise technical documentation.",
    location: "Remote",
    salary: "$70,000 - $90,000",
    postedDate: "2025-03-21",
  },
  {
    id: "13",
    title: "Sales Engineer",
    company: "SalesForce",
    description: "Provide technical expertise to sales teams and clients.",
    location: "San Francisco, CA",
    salary: "$110,000 - $150,000",
    postedDate: "2025-03-22",
  },
  {
    id: "14",
    title: "Business Analyst",
    company: "Business Intelligence",
    description: "Analyze business requirements and provide insights.",
    location: "London, UK",
    salary: "$95,000 - $125,000",
    postedDate: "2025-03-23",
  },
  {
    id: "15",
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    description: "Develop and deploy machine learning models.",
    location: "Toronto, Canada",
    salary: "$135,000 - $175,000",
    postedDate: "2025-03-24",
  },
  {
    id: "16",
    title: "Network Engineer",
    company: "Network Solutions",
    description: "Design and maintain network infrastructure.",
    location: "Dallas, TX",
    salary: "$100,000 - $140,000",
    postedDate: "2025-03-25",
  },
  {
    id: "17",
    title: "Database Administrator",
    company: "Database Systems",
    description: "Manage and maintain database systems.",
    location: "Atlanta, GA",
    salary: "$105,000 - $145,000",
    postedDate: "2025-03-26",
  },
  {
    id: "18",
    title: "Project Manager",
    company: "Project Professionals",
    description: "Lead and manage project teams and timelines.",
    location: "Miami, FL",
    salary: "$115,000 - $155,000",
    postedDate: "2025-03-27",
  }
];