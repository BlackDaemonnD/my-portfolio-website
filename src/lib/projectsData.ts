export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'Web Development' | 'Data Analytics' | 'AI/ML';
  liveUrl?: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with Next.js, featuring product catalogs, a shopping cart, and Stripe integration for payments.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'A machine learning model that predicts customer churn based on usage data, built using Python, Pandas, and Scikit-learn.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    category: 'AI/ML',
    githubUrl: '#',
  },
  {
    title: 'Sales Performance Dashboard',
    description: 'An interactive dashboard visualizing sales data across multiple regions. Built with Power BI to provide actionable insights for stakeholders.',
    tags: ['Power BI', 'DAX', 'Data Visualization'],
    category: 'Data Analytics',
    liveUrl: '#', // This could link to a public Power BI report
    githubUrl: '#',
  },
  // Add more of your projects here...
];