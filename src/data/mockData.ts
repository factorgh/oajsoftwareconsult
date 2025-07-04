import { Service, PortfolioItem, Testimonial, Project, Ticket } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance',
    icon: 'Globe',
    category: 'Development',
    features: ['React/Vue/Angular', 'Node.js/Python/Java', 'Database Design', 'API Integration'],
    price: 'Starting from $2,500'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences',
    icon: 'Smartphone',
    category: 'Development',
    features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Deployment'],
    price: 'Starting from $5,000'
  },
  {
    id: '3',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, deployment automation, and comprehensive DevOps consulting services',
    icon: 'Cloud',
    category: 'Infrastructure',
    features: ['AWS/GCP/Azure', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging'],
    price: 'Starting from $3,000'
  },
  {
    id: '4',
    name: 'Cybersecurity',
    description: 'Comprehensive security assessments, implementation, and ongoing protection for your digital assets',
    icon: 'Shield',
    category: 'Security',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
    price: 'Starting from $4,000'
  },
  {
    id: '5',
    name: 'IT Infrastructure',
    description: 'Network setup, server management, and comprehensive IT infrastructure consulting and support',
    icon: 'Server',
    category: 'Infrastructure',
    features: ['Network Design', 'Server Setup', 'Hardware Support', 'Remote Management'],
    price: 'Starting from $2,000'
  },
  {
    id: '6',
    name: 'AI/ML Integration',
    description: 'Artificial Intelligence and Machine Learning solutions designed to transform your business operations',
    icon: 'Brain',
    category: 'AI/ML',
    features: ['Custom AI Models', 'Data Analysis', 'Automation', 'Predictive Analytics'],
    price: 'Starting from $6,000'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-commerce Platform Revolution',
    description: 'Full-stack e-commerce solution with advanced payment integration, real-time inventory management, and AI-powered recommendations',
    image: 'https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'Web Development',
    link: 'https://example.com'
  },
  {
    id: '2',
    title: 'Healthcare Mobile Ecosystem',
    description: 'Cross-platform mobile application for patient management, telemedicine, and health monitoring with HIPAA compliance',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Express.js', 'PostgreSQL'],
    category: 'Mobile Development'
  },
  {
    id: '3',
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial analytics dashboard with advanced reporting, predictive modeling, and risk assessment tools',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js', 'TensorFlow'],
    category: 'Web Development'
  },
  {
    id: '4',
    title: 'Enterprise Cloud Migration',
    description: 'Complete cloud migration from on-premise to AWS infrastructure with zero downtime and enhanced security',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    category: 'Cloud & DevOps'
  },
  {
    id: '5',
    title: 'AI-Powered Logistics Platform',
    description: 'Machine learning platform for supply chain optimization, route planning, and predictive maintenance',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Redis'],
    category: 'AI/ML'
  },
  {
    id: '6',
    title: 'Cybersecurity Command Center',
    description: 'Comprehensive security monitoring system with threat detection, incident response, and compliance reporting',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    technologies: ['Python', 'Elasticsearch', 'Kibana', 'Docker', 'SIEM'],
    category: 'Cybersecurity'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'Chief Technology Officer',
    content: 'OAJ Software Consult delivered an exceptional e-commerce platform that exceeded our expectations. Their team\'s expertise in modern technologies and attention to detail were remarkable. The project was completed on time and within budget.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Healthcare Solutions',
    role: 'Chief Executive Officer',
    content: 'The mobile app development project was handled professionally from start to finish. Great communication, innovative solutions, and delivered exactly what we needed. Our patient engagement has increased by 300% since launch.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Finance Plus',
    role: 'Operations Manager',
    content: 'Outstanding cloud migration services that transformed our infrastructure. Our system performance improved dramatically, and the security enhancements give us complete peace of mind. Highly recommended for any enterprise.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Development',
    description: 'Building a comprehensive e-commerce solution with payment integration, inventory management, and customer analytics',
    status: 'in-progress',
    priority: 'high',
    clientId: '1',
    assignedTo: ['dev1', 'dev2'],
    budget: 15000,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-04-15'),
    progress: 65,
    services: ['Web Development', 'Payment Integration', 'Database Design']
  },
  {
    id: '2',
    title: 'Mobile App for Healthcare',
    description: 'Cross-platform mobile application for patient management with telemedicine capabilities',
    status: 'completed',
    priority: 'medium',
    clientId: '2',
    assignedTo: ['dev3'],
    budget: 25000,
    startDate: new Date('2023-10-01'),
    endDate: new Date('2024-01-31'),
    progress: 100,
    services: ['Mobile Development', 'UI/UX Design', 'Backend API']
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Setup',
    description: 'AWS cloud migration and infrastructure setup with automated deployment pipelines',
    status: 'pending',
    priority: 'high',
    clientId: '3',
    budget: 12000,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-03-15'),
    progress: 0,
    services: ['Cloud Services', 'DevOps', 'Security']
  }
];

export const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Login Issues on Mobile App',
    description: 'Users are experiencing login failures on iOS devices after the latest update',
    status: 'open',
    priority: 'high',
    clientId: '1',
    assignedTo: 'support1',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    title: 'Database Performance Optimization',
    description: 'Slow query performance affecting user experience during peak hours',
    status: 'in-progress',
    priority: 'medium',
    clientId: '2',
    assignedTo: 'dev2',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: '3',
    title: 'SSL Certificate Renewal',
    description: 'SSL certificate expiring soon, need renewal and deployment',
    status: 'resolved',
    priority: 'urgent',
    clientId: '3',
    assignedTo: 'devops1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-16')
  }
];