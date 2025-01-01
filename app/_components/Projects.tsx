import React from "react";

function Projects() {
  return (
    <section data-name='projects' id='projects' className='section bg-gray-100'>
      <div data-name='projects-content' className='container mx-auto'>
        <h2
          data-name='projects-title'
          className='text-3xl font-bold mb-6 text-center'
        >
          My Projects
        </h2>
        <div
          data-name='projects-grid'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              data-name='project-card'
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div
                data-name='project-image'
                className='h-48 bg-gray-300 rounded-lg mb-4'
              ></div>
              <h3
                data-name='project-name'
                className='text-xl font-semibold mb-2'
              >
                Project {project}
              </h3>
              <p data-name='project-description' className='text-gray-600 mb-4'>
                A brief description of the project and its key features.
              </p>
              <div data-name='project-links' className='flex space-x-4'>
                <a href='#' className='text-blue-600 hover:underline'>
                  View Demo
                </a>
                <a href='#' className='text-blue-600 hover:underline'>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
