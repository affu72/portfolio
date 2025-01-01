import React from "react";
import Link from "next/link";
import RevealingContent from "./RevealingContent";

const title = "Building High-Performance Web Experiences";
const description = "Delivering speed, scalability, and seamless design.";
const primaryCta = {
  text: "View Projects",
  href: "/projects",
  shouldDisable: true,
};
const secondaryCta = {
  text: "GitHub Profile",
  href: "https://github.com/afzal-nomani",
  shouldDisable: true,
};
const techStack = ["React", "Next.js", "TypeScript", "TailwindCSS"];

function Hero() {
  return (
    <section
      data-name='hero'
      id='home'
      className='min-h-[calc(100vh-var(--header-height-desktop))] flex items-center bg-theme-secondary theme-transition'
    >
      <div
        data-name='hero-content'
        className='container mx-auto px-6 py-6 text-center'
      >
        <div className='flex flex-col md:flex-col-reverse sm:items-center justify-center '>
          <div>
            <h1
              data-name='hero-title'
              className='text-5xl md:text-7xl font-bold mb-6 gradient-text font-[var(--font-courgette)]'
            >
              {title}
            </h1>
            <p
              data-name='hero-subtitle'
              className='text-xl md:text-2xl text-theme-secondary mb-12 typewriter'
            >
              {description}
            </p>
            <div className='flex justify-center space-x-4 scale-in'>
              <Link
                href={primaryCta.href}
                data-name='cta-button-primary'
                className='accent-primary text-white px-8 py-3 rounded-lg hover-lift shadow-lg'
              >
                {primaryCta.text}
              </Link>
              <Link
                href={secondaryCta.href}
                target='_blank'
                rel='noopener noreferrer'
                data-name='cta-button-secondary'
                className='bg-theme-primary text-theme-primary border-2 border-theme px-8 py-3 rounded-lg hover-lift shadow-lg'
              >
                {secondaryCta.text}
              </Link>
            </div>
          </div>
          <RevealingContent />
        </div>

        <div className='mt-6 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8'>
          {techStack.map((tech) => (
            <div
              key={tech}
              className='tech-stack-item p-4 text-center scroll-reveal'
            >
              <p className='font-mono text-theme-secondary'>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
