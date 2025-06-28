import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ronaldoImg from "../assets/ronaldoHero.png";
import { motion } from 'framer-motion';
import adidasLogo from '../assets/adidas.jpg';
import nikeLogo from '../assets/nike.jpg';
import pumaLogo from '../assets/puma.jpg';
import niviaLogo from '../assets/nivia.jpg';
import "./styles/style.css";
import Typed from 'typed.js';

const Hero = () => {

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Quality.', 'Comfort.','Passion.'],
      typeSpeed: 100,
      backSpeed:100,
      loop:true
    });
  },[]);

  return (
    <div className='h-screen w-full p-4'>
      <div className='bg-gradient-to-b from-[#CBD6DA] to-[#F1FFFF] rounded-xl h-full w-full overflow-hidden'>
        <Navbar />
        <section className='flex flex-col'>
          <section className='w-full text-center h-1/3 pt-5'>
            <h1 className='text-5xl mb-2 tracking-wider' style={{ fontFamily: '"Bebas Neue' }}>Gear Up Like A Pro</h1>
            <h3 className='text-xl font-light mb-2'>Shop Authentic Football Kits From Top Clubs & National Teams</h3>
            <span className='text-5xl tracking-wider' style={{ fontFamily: '"Bebas Neue' }} ref={el}/>
          </section>
          <section className='flex h-2/3'>
            <aside className='flex-1 pt-30 -20'>
              <p className='ms-10 w-90 text-lg mb-5'>We bring you authentic football kits from top clubs and national teams, designed for fans who live the game. Wear your passion. Represent your team. Play bold, feel unstoppable.</p>
              <a href="#newlyAdded" className='ms-10'><button className='h-10 rounded-3xl w-70 bg-zinc-900 text-white'>Explore</button></a>
            </aside>
            <aside className='flex-1 flex justify-center'>
              <motion.img className='ronaldoImg relative ' initial={{ bottom: '50px', opacity: 0.5 }} whileInView={{ bottom: 0, opacity: 1 }} transition={{ duration: 1 }} src={ronaldoImg} alt="" />
            </aside>
            <aside className='flex-1 flex pt-30 flex-nowrap flex-col gap-4 overflow-hidden '>
              <h1 className='text-2xl font-semibold'>Our Collaborations</h1>
              <article className='flex w-320'>
                <div className="logos flex">
                  <img className='mx-5 h-30 w-30 rounded-lg' src={adidasLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={nikeLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={pumaLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={niviaLogo} alt="" />
                </div>
                <div className="logos flex">
                  <img className='mx-5 h-30 w-30 rounded-lg' src={adidasLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={nikeLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={pumaLogo} alt="" />
                  <img className='mx-5 h-30 w-30 rounded-lg' src={niviaLogo} alt="" />
                </div>
              </article>
            </aside>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Hero