import {React, useEffect} from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ToSkills from './components/toSkills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
    })
  },{})
   return (
    <main className='bg-black'>
      <Hero />
      <About />
      <ToSkills />
      <Project/>
      <Contact />
      <Footer/>
    </main>
  )
}

export default App
