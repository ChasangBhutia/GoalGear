import React from 'react'
import Navbar from './Navbar'
import ronaldoImg from "../assets/ronaldoHero.png";

const Hero = () => {
  return (
    <div className='h-screen w-full p-4'>
        <div className='bg-gradient-to-b from-[#CBD6DA] to-[#F1FFFF] rounded-xl h-full w-full overflow-hidden'>
          <Navbar/>
          <section className='flex flex-col'>
              <section className='w-full text-center h-1/3 pt-8'>
                <h1 className='text-5xl mb-2 tracking-wider' style={{fontFamily:'"Bebas Neue'}}>Gear Up Like A Pro</h1>
                <h3 className='text-xl font-light'>Shop Authentic Football Kits From Top Clubs & National Teams</h3>
                <h3 className='text-xl font-light mb-2'>Quality. Comfort. Passion.</h3>
                <article className='flex justify-center gap-2'>
                  <button className='h-10 rounded-3xl w-50 bg-[#F6E20C]'>Shop Now</button>
                  <button className='h-10 rounded-3xl w-50 bg-zinc-900 text-white'>Explore</button>
                </article>
              </section>
              <section className='flex h-2/3'>
                <aside className='flex-1'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus asperiores rem mollitia minus. Consectetur eos debitis nobis voluptatibus ducimus cupiditate. Fugit earum ab sed debitis in officia, nemo saepe asperiores?</p>
                </aside>
                <aside className='flex-1 flex justify-center'>
                  <img src={ronaldoImg} alt="" />
                </aside>
                <aside className='flex-1'></aside>
              </section>
          </section>
        </div>      
    </div>
  )
}

export default Hero