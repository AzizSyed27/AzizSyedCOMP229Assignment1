// services.jsx

import React from 'react';

const skillGroups = [
  {
    title: 'Programming Languages',
    description:
      'Comfortable working across multiple languages and paradigms, from systems-level code to web and scripting.',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'C#', 'Rust', 'PHP'],
  },
  {
    title: 'Web & Application Development',
    description:
      'Experience building full-stack applications, APIs, and modern web interfaces using established frameworks.',
    items: [
      'React',
      'Angular',
      'HTML5 / CSS3',
      'Node.js',
      'Express',
      'Spring Boot',
      'ASP.NET Core',
      'REST APIs',
      'GraphQL',
      'Apollo Server',
      'Microservice architectures',
    ],
  },
  {
    title: 'Databases',
    description:
      'Work with both relational and NoSQL databases to design schemas, write queries, and optimize data access.',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'NoSQL data modeling'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Hands-on exposure to cloud platforms and DevOps tools used to deploy, monitor, and scale applications.',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Testing & Quality',
    description:
      'Use of automated testing tools and practices to improve reliability and catch issues earlier in development.',
    items: ['JUnit', 'PyTest', 'Selenium', 'Cypress', 'Unit & integration testing'],
  },
  {
    title: 'Methods & Ways of Working',
    description:
      'Experience collaborating in structured environments with modern software delivery practices.',
    items: ['Agile', 'Scrum', 'DevOps', 'CI/CD pipelines', 'Waterfall', 'Prototyping'],
  },
];

export default function Services() {
  return (
    <main className="container section">
      <header className="section-header">
        <h1 className="section-title">
          Technical <span className="highlight">Capabilities</span>
        </h1>
        <p className="section-subtitle">
          A snapshot of the technologies and areas I’m actively building experience in as a
          software engineer.
        </p>
      </header>

      <div className="cards-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <div className="card-header">
              <h2 className="card-title">{group.title}</h2>
            </div>
            <p className="card-description">{group.description}</p>
            <ul className="pill-list">
              {group.items.map((item) => (
                <li key={item} className="pill">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
