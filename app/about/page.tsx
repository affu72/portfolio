import React from "react";

export default function About() {
  const experiences = [
    {
      company: "TimelyAI",
      role: "Frontend Engineer",
      period: "Nov 2023 – Present",
      location: "Bangalore",
      highlights: [
        "Engineered website generation system with 200ms load times",
        "Built 6 core modules using React, Tailwind, React-Query",
        "Optimized 600+ live sites for performance and SEO",
      ],
    },
    {
      company: "Prosperix",
      role: "Software Developer Intern",
      period: "Mar 2023 – Oct 2023",
      location: "Remote",
      highlights: [
        "Reduced page transition times by 30%",
        "Achieved 65% test coverage with CodeceptJS",
        "Resolved 50+ JIRA tickets for platform stability",
      ],
    },
  ];

  return (
    <section
      data-name='about'
      id='about'
      className='section bg-theme-secondary'
    >
      <div data-name='about-content' className='container mx-auto'>
        <h2
          data-name='about-title'
          className='text-3xl font-bold mb-12 text-center gradient-text'
        >
          Experience
        </h2>
        <div data-name='experience-grid' className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='scroll-reveal bg-theme-primary p-6 rounded-lg shadow-lg'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-theme-primary'>
                    {exp.company}
                  </h3>
                  <p className='text-accent-primary'>{exp.role}</p>
                </div>
                <div className='text-right'>
                  <p className='text-theme-secondary'>{exp.period}</p>
                  <p className='text-theme-secondary'>{exp.location}</p>
                </div>
              </div>
              <ul className='list-disc list-inside space-y-2'>
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className='text-theme-secondary'>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='scroll-reveal'>
            <h3 className='text-xl font-bold mb-4 text-theme-primary'>
              Technical Skills
            </h3>
            <div className='space-y-4'>
              <div>
                <p className='font-semibold text-theme-secondary'>Frontend</p>
                <p className='text-theme-secondary'>
                  React, Next.js, TypeScript, Tailwind CSS, React-Query, Zustand
                </p>
              </div>
              <div>
                <p className='font-semibold text-theme-secondary'>Backend</p>
                <p className='text-theme-secondary'>
                  Node.js, Express, Flask, REST APIs, PostgreSQL
                </p>
              </div>
              <div>
                <p className='font-semibold text-theme-secondary'>Tools</p>
                <p className='text-theme-secondary'>
                  AWS (S3, CloudFront), GitHub Actions, Webpack, Vite
                </p>
              </div>
            </div>
          </div>

          <div className='scroll-reveal'>
            <h3 className='text-xl font-bold mb-4 text-theme-primary'>
              Education
            </h3>
            <div className='bg-theme-primary p-6 rounded-lg'>
              <h4 className='font-semibold text-theme-primary'>
                NSUT East Campus
              </h4>
              <p className='text-theme-secondary'>
                B.Tech in Electronics & Communication
              </p>
              <p className='text-theme-secondary'>2019 – 2023 | CGPA: 8.7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
