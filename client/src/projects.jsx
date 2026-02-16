// projects.jsx

import React from 'react';
import DineSmart from '../src/project-pics/dine-smart.png';
import MovieShare from '../src/project-pics/MovieShare-AzizSyed.png';
import CommunityPortal from '../src/project-pics/community-portal.png';
import Portfolio from '../src/project-pics/portfolioPic.png';
import GymNet from '../src/project-pics/gymnet.png';
import ProjectsXProjects from '../src/project-pics/pxp-img.png';

const projects = [
  {
    title: 'Projects X Projects - Non-Profit Charity Platform',
    image: ProjectsXProjects, 
    role: 'Full-stack Developer · Non-profit project',
    link: 'https://projectsxprojects.ca/', 
    description:
    'Built and launched the official Projects by the Projects (PXP) production non-profit platform used by the public to explore initiatives, subscribe to updates, ' +
    'and donate securely. ' +
    'Implemented a React + Vite frontend with public pages for projects, events, and donation flows, ' +
    'and developed a Spring Boot backend exposing REST APIs for managing content, media, and supporter subscriptions. ' +
    'Integrated Brevo SMTP to power newsletter signups and event notifications, Cloudflare R2 object storage for scalable ' +
    'image uploads and delivery, and Stripe Checkout to securely process donations without storing sensitive payment details. ' +
    'Deployed the full stack on Render (frontend, backend, and PostgreSQL), with Flyway-managed database migrations, ' +
    'JWT-based admin authentication, and role-based access for content management.',
    tech: [
      'React',
      'JavaScript',
      'Vite',
      'CSS',
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'Flyway',
      'REST APIs',
      'JWT Authentication',
      'Stripe (Checkout)',
      'Cloudflare R2',
      'Render'
    ],
  },
  {
    title: 'GymNet - Gym Operations, Member, and Admin Management System',
    image: GymNet,
    role: 'Full-stack Developer · Personal project',
    link: "https://gym-net-five.vercel.app/",
    description:
    'Designed and built a full-stack gym management platform that mirrors real-world gym operations, including ' +
    'membership tiers, personal training session packs, bookings, attendance tracking, and operational reporting. ' +
    'Implemented a modern React + TypeScript frontend for public pages, member, trainer, and admin dashboards, ' +
    'and developed a Spring Boot backend enforcing business rules such as access control, session consumption, ' +
    'overlap prevention, and attendance states (completed, cancelled, no-show). ' +
    'Integrated JWT-based authentication with role-based routing, Flyway-managed database migrations, ' +
    'and PostgreSQL persistence, with deployments using Neon (database), Render (backend), and Vercel (frontend).',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Spring Boot',
      'Java',
      'JWT Authentication',
      'PostgreSQL',
      'Flyway',
      'REST APIs',
      'Docker',
      'Neon (Postgres)',
      'Render',
      'Vercel',
      'Postman'
    ],
  },
  {
    title: 'DineSmart - Restaurant Management Application',
    image: DineSmart,
    role: 'Full-stack Developer · Academic project',
    description:
      'Developed a full-stack restaurant management system to handle menus, orders, and customer interactions. ' +
      'Designed an Angular frontend for day-to-day operations and implemented a Spring Boot backend for ' +
      'authentication, business logic, and API endpoints. Used MongoDB for data storage and a combination of ' +
      'REST and GraphQL (Apollo Server) to enable flexible communication between the client and server.',
    tech: ['Angular', 'OpenAI (Agentic AI)', 'JavaScript', 'TypeScript', 'Vue.Js',  'Spring Boot', 'Java', 'MongoDB', 'GraphQL', 'Apollo Server', 'REST APIs'],
  },
  {
    title: 'MovieShare - ASP.NET Cloud Movie Hosting Platform ',
    image: MovieShare,
    role: 'Back-end & Cloud Developer · Personal project',
    description:
      'Built and deployed a cloud-hosted movie streaming platform supporting user authentication, playlists, and ' +
      'content management. Deployed on AWS using EC2 for compute, S3 for media storage, CloudFront for content ' +
      'delivery, and RDS/SQL Server for relational data. Focused on secure user management, optimized streaming ' +
      'performance, and automated deployment using AWS CI/CD pipelines.',
    tech: ['ASP.NET Core', 'C#', 'AWS EC2', 'AWS S3', 'AWS CloudFront', 'AWS RDS', 'SQL Server'],
  },
  {
    title: 'CommConnect - Community Engagement Platform ',
    image: CommunityPortal,
    role: 'Full-stack Developer · Academic project',
    description:
      'Developed a full-stack community engagement platform using a micro-frontend architecture to manage authentication, news posts, ' +
      'help requests, and resident interactions. Built independent React MFEs for user authentication and community features,' +
      ' connected through an Apollo GraphQL Federation gateway with Node.js microservices. Integrated a Gemini-powered AI assistant  ' +
      'using RAG to analyze community discussions, provide intelligent answers, and enhance user support within the platform.',
    tech: ['React', 'Gemini-AI (RAG)', 'Langchain', 'Next.js','Vite', 'Module Federation', 'Express', 'Apollo Server', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'Personal Portfolio Website ',
    image: Portfolio,
    role: 'Front-end Developer · Personal project',
    description:
      'Designed and deployed a personal portfolio website to showcase projects, technical skills, and experience. ' +
      'Implemented a responsive React frontend with a clean, professional layout and deployed it using a cloud ' +
      'hosting platform.',
    tech: ['React', 'JavaScript', 'CSS', 'Node.js', 'Cloud deployment (Render/on-cloud)'],
  },
];

export default function Projects() {
  return (
    <main className="container section">
      <header className="section-header">
        <h1 className="section-title">
          Selected <span className="highlight">Projects</span>
        </h1>
        <p className="section-subtitle">
          A selection of projects that reflect my experience with full-stack development, cloud
          deployments, and modern web technologies.
        </p>
      </header>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
            </div>

            <div className="project-body">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-role">{project.role}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              )}
              <p className="project-description">{project.description}</p>
              
              <ul className="pill-list">
                {project.tech.map((tech) => (
                  <li key={tech} className="pill">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
