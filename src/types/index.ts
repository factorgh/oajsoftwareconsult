export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'developer' | 'support';
  avatar?: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  clientId: string;
  assignedTo?: string[];
  budget: number;
  startDate: Date;
  endDate: Date;
  progress: number;
  services: string[];
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  clientId: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  price?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}