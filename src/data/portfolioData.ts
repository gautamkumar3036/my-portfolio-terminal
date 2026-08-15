// ============================================================================
// portfolioData.ts
// Single source of truth for the whole portfolio.
// Edit this file to add projects, experience, skills, and social links.
// ============================================================================

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  thumbnail?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter';
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  badgeUrl?: string;
  skills: string[];
  description?: string;
};

export const portfolioData = {
  name: 'GAUTAM KUMAR',
  tagline: 'Computer Science Student & Backend Developer',

  // Short about lines shown on the Hero terminal
  aboutLines: [
    'Computer Science Student.',
    'Backend Developer.',
    'Learning Java, Spring Boot and React.',
    'Passionate about building scalable applications.',
  ],

  // Longer about paragraph shown in the About section
  aboutParagraph:
    'I enjoy building full-stack applications and continuously learning new technologies.',

  // Quick stats shown in the hero — recruiters scan for quantifiable signals
  stats: [
    { value: '5+', label: 'Projects Built' },
    { value: '2+', label: 'Years Coding' },
    { value: '3', label: 'Certifications' },
    { value: '250+', label: 'Leetcode Solved ' },
  ] as Stat[],

  // Resume link — recruiters look for this first
  resumeUrl: '/resume.pdf',

  skills: [
    {
      category: 'Languages',
      items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Spring Boot', 'Tailwind CSS'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'MySQL'],
    },
  ] as SkillGroup[],

  projects: [
    {
      name: 'TaskFlow — Task Manager API',
      description:
        'A RESTful task management API with user authentication, CRUD operations, and pagination. Built with Spring Boot and MySQL, deployed on Render.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Postman'],
      githubUrl: 'https://github.com/gautamkumar/taskflow',
      liveUrl: 'https://taskflow-api.onrender.com',
      thumbnail:
        'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ] as Project[],

  // Empty by design — add experience here later without touching any component.
  experience: [] as ExperienceItem[],

  certificates: [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Jan 2024',
      credentialId: 'AWS-ASA-2024-88392',
      credentialUrl: 'https://aws.amazon.com/verification',
      badgeUrl: '/aws-cert-badge.png',
      skills: ['AWS', 'Cloud Architecture', 'Spring Boot', 'Microservices', 'Security'],
      description:
        'Demonstrates technical expertise in designing resilient, high-performing, secure, and cost-optimized architectural solutions on AWS.',
    },
    {
      title: 'ed Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Jan 2024',
      credentialId: 'AWS-ASA-204-88392',
      credentialUrl: 'https://aws.amazon.com/verification',
      badgeUrl: '/aws-cert-badge.png',
      skills: ['AWS', 'Cloud Architecture', 'Spring Boot', 'Microservices', 'Security'],
      description:
        'Demonstrates technical expertise in designing resilient, high-performing, secure, and cost-optimized architectural solutions on AWS.',
    },
  ] as CertificateItem[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/gautamkumar3036', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gautamkumar3036/?isSelfProfile=false', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:[EMAIL_ADDRESS]', icon: 'mail' },
    { label: 'Twitter/X', href: 'https://twitter.com/gautamkumar3036', icon: 'twitter' },
  ] as SocialLink[],

  contact: [
    { label: 'Email', href: 'mailto:[EMAIL_ADDRESS]' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gautamkumar3036/?isSelfProfile=false' },
    { label: 'GitHub', href: 'https://github.com/gautamkumar3036' },
    { label: 'Resume', href: '/resume.pdf' },
  ] as ContactLink[],


};

export type PortfolioData = typeof portfolioData;
