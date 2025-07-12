import React from 'react';
import ME from '../assets/ME.jpg';
import it from '../assets/it.jpg';
import PIC from '../assets/PIC.png';
import logo from '../assets/logo.jpg';

const AboutData = [
  { id: 1, image: logo, title: 'College of Computer Studies', description: 'Currently pursuing a Bachelor of Science in Information Technology' },
  { id: 2, image: PIC, title: 'National Certificate II', description: 'NC II Passer in Computer Systems Servicing under TESDA' },
  { id: 3, image: it, title: 'Test of Practical Competency in Information Technology (TOPCIT) Philippines', description: 'Selected as one of the candidates for TOPCIT' }
];

const AboutBox = ({ image, title, description }) => (
  <article  className='bg-gradient-to-br from-[#0c1516] via-[#29988b] to-[#0c1516] p-4 sm:p-6 rounded-lg shadow-[0_0_20px_#5badae] text-center hover:scale-105 transition-all duration-300 transform'>
    <figure className='flex justify-center m-4'>
      <img src={image} alt={title} className='w-24 h-24 sm:w-32 sm:h-32' />
    </figure>
    <header>
      <h3 className='text-lg sm:text-lg font-semibold mb-2'>{title}</h3>
    </header>
    <p className='text-gray-100 text-sm sm:text-base'>{description}</p>
  </article>
);

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-4 py-10 flex items-center justify-center">
      <section
        className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 px-4 sm:px-6"
      >
        <figure className="relative flex justify-center items-center gap-6 flex-wrap">
        </figure>
        <article id="about"
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative max-w-xl"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 bg-[#62ada5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <div className="absolute z-0 w-40 h-40 sm:w-60 bg-[#62ada5] rounded-full blur-3xl opacity-50 -top-5 right-10"></div>
          <div className="absolute -z-10 w-60 h-60 bg-[#62ada5] rounded-full blur-3xl opacity-50 -top-5 left-1/2 transform -translate-x-1/2"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I am a Bachelor of Science in Information Technology (BSIT) student
            with a strong interest in web development and software technologies.
            My academic background, hands-on projects, and certification in
            Computer Hardware Servicing NC II have equipped me with both
            theoretical and practical knowledge in the IT field.
          </p>
        </article>
      </section>
      <section className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-10'>
        <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
          <header>
          </header>
          <section
            data-aos='fade-up'
            data-aos-delay='500'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4'
          >
            {AboutData.map((about) => (
              <AboutBox
                key={about.id}
                image={about.image}
                title={about.title}
                description={about.description}
              />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
