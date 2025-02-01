import React from "react";
import RevealContentWrapper from "./RevealContentWrapper";

export default function Experience() {
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
    <section className='min-h-screen bg-theme-secondary text-theme-primary py-8'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-16 text-center'>Experience</h1>

        {/* Timeline Container */}
        <RevealContentWrapper className='relative max-w-3xl mx-auto'>
          {/* Vertical Line with gradient effect */}
          <div className='absolute -left-[2px] md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-400 via-accent-primary to-accent-primary/50'></div>

          {/* Status Indicator with glow */}
          <div className='relative mb-8'>
            <div className='absolute left-[-1px] md:left-4 -translate-x-1/2 z-10 top-[10%]'>
              <div className='w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]'></div>
              <div className='absolute top-0 left-0 w-3 h-3 rounded-full bg-green-400 animate-ping'></div>
              <div className='absolute -top-1 -left-1 w-5 h-5 rounded-full bg-green-400/20 animate-pulse delay-75'></div>
            </div>
          </div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className='relative mb-16 group'>
              {/* Timeline Node with horizontal line */}
              <div className='z-10 absolute left-0 md:left-4 bottom-[10%] flex items-center'>
                <div className='w-[16px] h-[2px] bg-accent-primary'></div>
                <div className='w-3 h-3 rounded-full bg-accent-primary ring-2 ring-accent-primary/20 ring-offset-2 ring-offset-theme-secondary'></div>
              </div>

              {/* Content Card with enhanced styling */}
              <div
                className='ml-6 md:ml-12 bg-theme-primary p-8 rounded-lg relative 
                transform transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                border border-accent-primary/5 active:cursor-grabbing  active:animate-pulse'
                draggable
              >
                {/* Card Header */}
                <div className='mb-6'>
                  <h2 className='text-2xl font-bold text-theme-primary group-hover:text-accent-primary transition-colors duration-300'>
                    {exp.company}
                  </h2>
                  <h3 className='text-accent-primary text-lg mt-1'>
                    {exp.role}
                  </h3>
                  <div className='flex items-center gap-2 text-theme-secondary text-sm mt-2'>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Highlights with enhanced styling */}
                <ul className='space-y-4'>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className='flex items-start gap-3 group/item'>
                      <span
                        className='mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary/40 
                        group-hover/item:bg-accent-primary transition-all duration-300
                        group-hover/item:scale-110'
                      ></span>
                      <span
                        className='flex-1 text-theme-secondary 
                        group-hover/item:text-theme-primary transition-colors duration-300'
                      >
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </RevealContentWrapper>
      </div>
    </section>
  );
}
