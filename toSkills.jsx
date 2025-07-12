

import React from 'react';
import fire from '../assets/fire.png';
import html from '../assets/html.jpg';
import react from '../assets/react.png';
import php from '../assets/php.png';
import python from '../assets/python.jpg';
import sql from '../assets/sql.jpg';
import tail from '../assets/tail.png';
import vs from '../assets/vs.jpg';

const toskillsData = [
  { id: 1, image: react, title: 'React', link: 'https://reactjs.org/' },
  { id: 2, image: tail, title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
  { id: 3, image: sql, title: 'MySQL', link: 'https://www.mysql.com/' },
  { id: 4, image: fire, title: 'Firebase', link: 'https://firebase.google.com/' },
  { id: 5, image: vs, title: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
  { id: 6, image: html, title: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { id: 7, image: php, title: 'PHP', link: 'https://www.php.net/' },
  { id: 8, image: python, title: 'Python', link: 'https://www.python.org/' }
];


const ToSkillsBox = ({ image, title, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-gradient-to-br from-[#0c1516] via-[#29988b] to-[#0c1516]
               rounded-lg shadow-[0_0_20px_#5badae] text-center
               hover:scale-105 transition-all duration-300 transform cursor-pointer"
  >
    <figure className="flex justify-center m-4">
      <img src={image} alt={title} className="w-24 h-24 sm:w-32 sm:h-32" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-lg font-semibold mb-2">{title}</h3>
    </header>
  </a>
);



export default function ToSkills() {
  return (
    <section id= 'skills' className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-serif">Skills</h1>
        </header>
      <section
  data-aos="fade-up"
  data-aos-delay="500"
  className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-14 mt-4"
>

        {toskillsData.map((skill) => (
  <ToSkillsBox
    key={skill.id}
    image={skill.image}
    title={skill.title}
    link={skill.link}
  />
))}

        </section>
      </div>
    </section>
  );
}

