import React from 'react';
import proj from '../assets/proj.png';
import proj1 from '../assets/proj1.jpg';

const ProjectCard = ({ image, title, link, description }) => {
  return (
    <article className="group p-6 bg-gradient-to-br from-[#0c1516] via-[#29988b] to-[#0c1516]
                    rounded-lg shadow-[0_0_20px_#5badae] text-center
                    hover:scale-105 transition-all duration-300 transform">

      <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-white rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

      <div className='relative z-10'>
        <figure className='relative'>
          <img
            src={image}
            alt={title}
            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute h-[202px] inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          >
            <button className='bg-[#62ada5] font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#62ada5]'>
              Click here
            </button>
          </a>
        </figure>

        <div className='px-6 py-4'>
          <header>
            <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
          </header>
          <p className='text-gray-300 text-base'>{description}</p>
        </div>
      </div>
    </article>
  );
};


const Project = () => {
  const listProject = [
    {
      image: proj1,
      title: 'Byte Bazaar',
      link: 'https://github.com/corbs19/bytebazaar',
      description: 'Byte Bazaar is a web app that lets users Create, Read, Update, and Delete (CRUD) products easily, managing inventory efficiently.',
     
    },
    {
      image: proj,
      title: 'Spectral by HTML5 UP',
      link: 'https://example.com/project1',
      description: 'This website is built with HTML, coded in VSCode, and tested locally using XAMPP.', 
      
    },
  ];

  return (
    <main className='p-4' id='projects'>
      <section data-aos='fade-up' data-aos-delay='300'>
        <header className='text-center'>
          <h1 className='text-3xl text-white sm:text-4xl font-serif mb-6'>
            My Projects
          </h1>
        </header>
      </section>

      <section
        data-aos='fade-up'
        data-aos-delay='500'
        className='flex flex-wrap gap-4 justify-center mt-6'
      >
        {listProject.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Project;
