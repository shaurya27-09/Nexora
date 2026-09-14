export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  accentColor: string;
  gradient: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: string;
  metric: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}
