import React from "react";
import Link from "next/link";
import RevealingContent from "./RevealingContent";

const title = "Building <br> High-Performance <br> Web Experiences";
const description = "Delivering speed, scalability, and seamless design.";
const primaryCta = {
  text: "Resume",
  href: "https://drive.google.com/file/d/1CGQvVo1ckQY_Qgfl1Lw298sZFyqTKvoy/view?usp=drive_link",
  shouldDisable: true,
};
const secondaryCta = {
  text: "GitHub Profile",
  href: "https://github.com/affu72",
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
        <div className='flex sm:items-center justify-between flex-col-reverse md:flex-row'>
          <div className='w-full'>
            <h1
              data-name='hero-title'
              className='text-4xl mt-4 text-center md:text-start md:text-7xl md:leading-[1.1] font-bold mb-6 gradient-text'
            >
              {title
                .replace(/<br>/g, "\n")
                .split("\n")
                .map((line, index) => (
                  <span key={index} className='inline-block'>
                    {line}
                  </span>
                ))}
            </h1>
            <p
              data-name='hero-subtitle'
              className='text-xl text-center md:text-start md:text-2xl text-theme-secondary mb-12 typewriter'
            >
              {description}
            </p>
            <div className='flex justify-center md:justify-start space-x-4 scale-in'>
              <Link
                href={secondaryCta.href}
                target='_blank'
                rel='noopener noreferrer'
                data-name='cta-button-secondary'
                className='bg-theme-primary text-theme-primary border-2 border-theme px-8 py-3 rounded-lg hover-lift shadow-lg'
              >
                {secondaryCta.text}
              </Link>
              <Link
                href={primaryCta.href}
                target='_blank'
                data-name='cta-button-primary'
                className='accent-primary hover:bg-secondary text-white px-8 py-3 rounded-lg hover-lift shadow-lg'
              >
                {primaryCta.text}
              </Link>
            </div>
          </div>
          <RevealingContent />
        </div>

        <div className='mt-6 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8'>
          {techStack.map((tech) => (
            <div key={tech} className='tech-stack-item p-4 text-center'>
              <p className='font-mono text-theme-secondary'>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
