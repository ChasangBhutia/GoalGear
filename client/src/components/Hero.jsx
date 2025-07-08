import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ronaldoImg from "../assets/ronaldoHero.png";
import { motion } from 'framer-motion';
import adidasLogo from '../assets/adidas.jpg';
import nikeLogo from '../assets/nike.jpg';
import pumaLogo from '../assets/puma.jpg';
import niviaLogo from '../assets/nivia.jpg';
import background from "../assets/background.png"
import "./styles/style.css";
import Typed from 'typed.js';
import { useLocation } from 'react-router-dom';


const Hero = () => {

  const location = useLocation();

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
    <div id='hero' className='h-screen w-full p-2'>
      <div className='rounded-xl h-full w-full overflow-hidden bg-cover bg-center' style={{backgroundImage:`url(${background})`}}>
        <div className='bg-[rgba(0,0,0,0.1)] h-full'>
        <Navbar />
        <section className='flex flex-col mt-2'>
          <section className='w-full text-center h-1/3'>
            <h1 className='text-[6vw] tracking-wider' style={{ fontFamily: '"Bebas Neue' }}>Gear Up Like A Pro</h1>
            <h3 className='text-[3vw] w-[70vw] m-auto font-light'>Shop Authentic Football Kits From Top Clubs & National Teams</h3>
            <span className='text-[4vw] tracking-wider' style={{ fontFamily: '"Bebas Neue' }} ref={el}/>
          </section>
          <section className='flex h-2/3 flex-col'>
            <aside className='flex-1 w-[80vw] hidden m-auto text-center'>
              <p className='w-full text-[3vw] mb-2'>We bring you authentic football kits from top clubs and national teams, designed for fans who live the game. Wear your passion. Represent your team. Play bold, feel unstoppable.</p>
              <a href="#featured"><button className='h-[7vw] rounded-3xl w-[20vw] bg-zinc-900 text-white text-[2.5vw]'>Explore</button></a>
            </aside>
            <aside className='flex-1 flex justify-center'>
              <motion.img key={location.pathname} className='ronaldoImg relative h-[40vw]' initial={{ bottom: '50px', opacity: 0.5 }} whileInView={{ bottom: 0, opacity: 1 }} transition={{ duration: 1 }} src={ronaldoImg} alt="" />
            </aside>
            <aside className='flex-1 flex flex-nowrap flex-col pb-8 pt-4 w-full backdrop-blur-sm relative bottom-0'>
              <h1 className='text-[3vw] font-semibold mb-2 ml-2'>Our Collaborations</h1>
              <article className='flex w-250'>
                <div className="logos flex">
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={adidasLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={nikeLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={pumaLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={niviaLogo} alt="" />
                </div>
                <div className="logos flex">
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={adidasLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={nikeLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={pumaLogo} alt="" />
                  <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg' src={niviaLogo} alt="" />
                </div>
              </article>
            </aside>
          </section>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Hero