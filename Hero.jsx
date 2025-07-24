import React from 'react';
import Navbar from './Navbar';
import fbb from '../assets/fbb.png';
import inst from '../assets/inst.jpg';
import x from '../assets/x.png';
 




export default function Hero() {
    return (
        <div className='relative overflow-hidden min-h-[500px] sm:min-h-[600px] flex flex-col items-center'>
            <div className='md:h-[500px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#0c1516] via-[#29988b] to-[#0c1516]
            transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>
            <div className='md:h-[500px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#0c1516] via-[#29988b] to-[#0c1516]
            transform rotate-45 z-0 left-2 top-28 rounded-3xl'></div>
            <Navbar />
            <main 
                id='home'
                className='flex flex-col md-flex-row items-center justify-center w-full px-4
                md:px-52 pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
            <section
                className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative'
                data-aos='fade-up'
                data-aos-dela='500'
                >
                    <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-16 py-10 md:py-20">
  <div className="absolute -z-10 w-60 h-60 bg-[#5cada5] rounded-full blur-3xl opacity-50 -top-5 -left-14"></div>
  <div className="absolute -z-10 w-60 h-60 bg-[#62ada5] rounded-full blur-3xl opacity-50 -top-5 -right-14"></div>
  <div className="absolute -z-10 w-60 h-60 bg-[#62ada5] rounded-full blur-3xl opacity-50 -top-5 left-1/2 transform -translate-x-1/2"></div>

  <div className="w-full max-w-3xl">
    <header className="mb-6">
      <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
        Vanise Corby D. Maniapao
      </h1>
      <h2 className="text-xl sm:text-sm md:text-md font-bold text-[#143934] md:text-[#a9cbc7]">
        Bachelor of Science in Information Technology
      </h2>
    </header>
    <p className="text-base sm:text-xl md:text-lg text-gray-300 font-arial mb-6">
      I’m a dedicated BSIT student currently studying at San Pablo Colleges.
      With a passion for technology and problem-solving, I’m focused on building strong foundations in
      software development, networking and database management.
      I enjoy learning new programming languages, exploring tech trends, and working on hands-on projects
      that improve both my technical and collaborative skills.
    </p>
    <div className='flex justify-center items-center space-x-4 mb-6'>
        <a href='https://www.facebook.com/vanise.corby.maniapao.2025' target='_blank' rel='noopener noreferrer'>
    <img src={fbb} alt='Facebook' className='w-11 h-11'/>
</a>
        <a href='https://www.instagram.com/vmaniapa0?igsh=MXh0ZDV5bzZqZDlvZQ==' target='_blank' rel='noopener noreferrer'>
    <img src={inst} alt='Instagram' className='w-11 h-11'/>
</a>
 <a href='https://x.com/mnp_vns?t=kCSzRtBieo644KFVUDtaAQ&s=09' target='_blank' rel='noopener noreferrer'>
    <img src={x} alt='X' className='w-11 h-11'/>
</a>

    </div>
  </div>
</div>
                </section>
            </main>
        </div>
    )
} 
