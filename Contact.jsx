import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ME from '../assets/ME.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = '1019004';
    const templateID = 'template_hfs0lvo';
    const publicKey = 'KWQUV6UttWsptKozo';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send message, please try again.');
        console.error(error);
      });
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className='min-h-screen flex justify-center items-center p-4 bg-black'
    >
      <article className='flex flex-col md:flex-row items-center justify-center shadow-lg rounded-lg max-w-5xl w-full bg-black'>
        <aside className='w-full md:w-1/2 flex justify-center items-center p-6 relative'>
          <div className='relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] flex justify-center items-center'>
            <div className='absolute w-full h-full rounded-full bg-gradient-to-r from-[#0c1516] via-[#29988b] to-[#0c1516] shadow-[0_0_20px_#5badae]' />
            <img
              src={ME}
              alt='Contact'
              className='relative z-10 w-full h-full object-cover rounded-full border-4 border-[#0c1516]'
            />
          </div>
        </aside>

        <section className='w-full md:w-1/2 p-8'>
          <header className='mb-6'>
            <h2 className='text-4xl font-serif text-center text-white'>Contact Us</h2>
          </header>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-white font-medium mb-2'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your Name'
                className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-white font-medium mb-2'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
                className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-white font-medium mb-2'>Message</label>
              <textarea
                name='message'
                id='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-black border-2 py-2 px-6 focus:outline-none hover:bg-[#62ada5] hover:shadow-[0_0_20px_#62ada5] rounded-full text-lg'
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
