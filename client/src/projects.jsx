// projects.jsx

import React from 'react';
import DineSmart from '../src/project-pics/dine-smart.png';
import MovieShare from '../src/project-pics/MovieShare-AzizSyed.png';
import CommunityPortal from '../src/project-pics/community-portal.png';
import Portfolio from '../src/project-pics/portfolioPic.png';

const projects = [
  {
    title: 'Restaurant Management Application',
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
    title: 'ASP.NET Cloud Movie Hosting Platform ',
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
    title: 'Community Engagement Platform ',
    image: CommunityPortal,
    role: 'Full-stack Developer · Academic project',
    description:
      'Developed a full-stack community engagement platform using a micro-frontend architecture to manage authentication, news posts,' +
      'help requests, and resident interactions. Built independent React MFEs for user authentication and community features,' +
      'onnected through an Apollo GraphQL Federation gateway with Node.js microservices. Integrated a Gemini-powered AI assistant  ' +
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
