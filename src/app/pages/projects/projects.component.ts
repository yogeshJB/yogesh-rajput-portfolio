import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string; // Using gradient placeholders for now
  tags: string[];
  link: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'InstaFetch Pro',
      description: 'InstaFetch Pro is a robust, full-stack media retrieval engine designed to streamline the archival of ephemeral social media content. This project demonstrates advanced API integration, media stream proxying, and a high-performance UI/UX',
      image: 'from-rose-400 to-yellow-600',
      tags: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'instagram-private-api', 'TypeScript'],
      link: '#',
      github: 'https://github.com/yogeshJB/InstaFetch-Pro'
    },
    {
      title: 'Online Exam Web Application',
      description: 'A full-featured online store with cart functionality, user authentication, and payment integration.',
      image: 'from-blue-500 to-cyan-500',
      tags: ['Angular', 'Node.js', 'Stripe'],
      link: 'https://beaenglish.co.uk/',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task manager with Kanban boards and team chat features.',
      image: 'from-purple-500 to-pink-500',
      tags: ['Angular.JS', 'Node.js', 'AWS S3', 'AWS CloudWatch', 'AWS Cognito', 'AWS ECS', 'AWS ECR'],
      link: '#',
      github: '#'
    },
    {
      title: 'Gas Management System for Gas Distributors',
      description: 'The system provides an integrated solution for managing distributors and consumers, enabling seamless registration, gas booking, and delivery tracking. It efficiently handles inventory and cylinder stock management to ensure accurate availability and timely distribution, while also maintaining secure payment processing and detailed billing records for transparent and reliable financial management.',
      image: 'from-orange-400 to-red-500',
      tags: ['Angular', 'AWS Serverless like S3, DynamoDB, API Gateway, Lambda, Cognito, SNS, SES, CloudWatch'],
      link: 'http://staroil-web-production.s3-website-us-east-1.amazonaws.com',
      github: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'The system supports secure user authentication and enables real-time one-to-one messaging between users. It provides clear message status indicators showing when messages are sent, delivered, and read, while also ensuring chat history is securely stored and accessible for future reference.',
      image: 'from-indigo-400 to-blue-600',
      tags: ['React.js', 'Node.js', 'Socket.io', 'Mongo DB', 'TailwindCSS', 'JWT', 'TypeScript'],
      link: '#',
      github: 'https://github.com/yogeshJB/real-time-chat-messenger'
    },
    {
      title: 'E-commerce Web Application',
      description: 'The system includes a centralized admin panel for efficient product and order management, while providing end users with a smooth shopping experience through product browsing, cart management, secure checkout, and payment processing. It also ensures secure authentication with role-based access control to protect data and manage user permissions effectively.',
      image: 'from-green-400 to-emerald-600',
      tags: ['React.js', 'Node.js', 'Mail Service', 'Hostinger Server'],
      link: '#',
      github: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard aggregating metrics from Twitter, LinkedIn, and Instagram.',
      image: 'from-rose-400 to-red-600',
      tags: ['Angular', 'RxJS', 'Material'],
      link: '#',
      github: '#'
    },

  ];
}
