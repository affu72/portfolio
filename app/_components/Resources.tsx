"use client";
import React, { useEffect } from "react";
import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  url: string;
  category: "Blog" | "Tool" | "Learning" | "Development";
  isExternal: boolean;
  date?: string;
  tags?: string[];
  readTime?: string;
}

const resources: Resource[] = [
  {
    title:
      "Never Wait for Backend Again! 3 Simple Steps That Changed My Frontend Life",
    description:
      "Learn how to use mock data effectively in frontend development using Apidog for faster development cycles.",
    url: "https://dev.to/geekvergil/never-wait-for-backend-again-3-stupidly-simple-steps-that-changed-my-frontend-life-1gh6",
    category: "Development",
    isExternal: true,
  },
  {
    title: "Building a Portfolio with Next.js",
    description:
      "A detailed guide on creating a modern portfolio website using Next.js, Tailwind CSS, and best practices for performance.",
    url: "/blog/building-portfolio",
    category: "Blog",
    isExternal: false,
    date: "2024-03-20",
    tags: ["nextjs", "react", "portfolio"],
    readTime: "10 min read",
  },
];

function Resources() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".scroll-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-name='resources'
      id='resources'
      className='section bg-theme-secondary theme-transition py-16'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-center gradient-text'>
          Learning Resources & Collections
        </h2>

        {/* Category Filter */}
        <div className='flex flex-wrap gap-4 justify-center mb-8'>
          {["All", "Blog", "Tool", "Learning", "Development"].map(
            (category) => (
              <button
                key={category}
                className='px-4 py-2 rounded-full border border-theme text-theme-primary hover:bg-accent-primary hover:text-white transition-colors'
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Resources Grid with Interactive Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {resources.map((resource, index) => (
            <div
              key={index}
              className='group bg-theme-primary p-6 rounded-lg 
                shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:scale-[1.02] cursor-pointer
                border border-transparent hover:border-accent-primary/20
                relative overflow-hidden scroll-reveal'
            >
              <div
                className='absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              />

              <div className='grid grid-rows-[auto_auto_1fr_auto] h-full gap-3 relative'>
                {/* Category Badge */}
                <div className='flex justify-between items-center'>
                  <span
                    className='text-sm text-accent-primary px-3 py-1 rounded-full 
                    bg-theme-secondary group-hover:bg-accent-primary group-hover:text-white
                    transition-colors duration-300'
                  >
                    {resource.category}
                  </span>
                  {resource.isExternal && (
                    <svg
                      className='w-4 h-4 text-theme-secondary group-hover:text-accent-primary'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3
                  className='text-xl font-semibold text-theme-primary
                  group-hover:text-accent-primary transition-colors duration-300'
                >
                  {resource.title}
                </h3>

                {/* Description - shorter for external content */}
                <p
                  className='text-theme-secondary group-hover:text-theme-primary/90
                  transition-colors duration-300'
                >
                  {resource.description}
                </p>

                {/* Additional details only for internal content */}
                {!resource.isExternal && resource.tags && (
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {resource.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='text-xs px-2 py-1 rounded-md bg-theme-secondary/50 
                          text-theme-primary group-hover:bg-accent-primary/10 
                          group-hover:text-accent-primary transition-colors duration-300'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link */}
                <Link
                  href={resource.url}
                  target={resource.isExternal ? "_blank" : undefined}
                  rel={resource.isExternal ? "noopener noreferrer" : undefined}
                  className='text-accent-primary inline-flex items-center mt-auto
                    group-hover:translate-x-2 transition-transform duration-300'
                >
                  <span className='relative'>
                    {resource.isExternal ? "Read on Dev.to" : "Read More"}
                    <span
                      className='absolute bottom-0 left-0 w-0 h-0.5 
                      bg-accent-primary group-hover:w-full transition-all duration-300'
                    />
                  </span>
                  <svg
                    className='w-4 h-4 ml-2 transform group-hover:translate-x-1 
                      transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
