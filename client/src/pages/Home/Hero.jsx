
import Navbar from '../../components/Navbar'
import ronaldoImg from "../../assets/ronaldoHero.png";
import { motion } from 'framer-motion';
import adidasLogo from '../../assets/adidas.jpg';
import nikeLogo from '../../assets/nike.jpg';
import pumaLogo from '../../assets/puma.jpg';
import niviaLogo from '../../assets/nivia.jpg';
import background from "../../assets/background.png"
import "../../components/styles/style.css";
import { useLocation } from 'react-router-dom';
import ProtectedRoutes from '../../utils/ProtectedRoutes';


const Hero = () => {

  const location = useLocation();


  return (
    <div id='hero' className='h-[100vh] sm:h-screen w-full p-2'>
      <div className='rounded-xl h-full w-full overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <div className='bg-[rgba(0,0,0,0.1)] h-full flex flex-col justify-between'>
          <ProtectedRoutes><Navbar /></ProtectedRoutes>
          <section className='flex flex-col h-[calc(100%-7vw)] justify-between lg:mb-10'>
            <section className='w-full text-center h-[20%] sm:mt-2 lg:mt-10'>
              <h1 id='landingFont' className='text-[6vw] tracking-wider lg:text-[4.5vw]' style={{ fontFamily: '"Bebas Neue' }}>Gear Up Like A Pro</h1>
              <h3 className='text-[3vw] w-[70vw] m-auto font-light sm:text-[2vw] sm:w-100 lg:w-[40vw] lg:text-[1.5vw]'>Shop Authentic Football Kits From Top Clubs & National Teams</h3>
              <a className='' href="#newlyAdded">
                <button className='z-90 relative w-[40vw] h-[7vw] text-[3.5vw] rounded-xl text-white bg-zinc-900 sm:w-40 sm:h-10 sm:text-sm sm:mt-4'>Explore</button>
              </a>
            </section>
            <section className='flex flex-col-reverse mt-[10vw] sm:flex-row sm:p-2 sm:items-center sm:mt-10 lg:px-4 lg:mt-10 xl:px-20 xl:mt-10 '>
              <aside className='flex-1 w-[80vw] hidden m-auto sm:block sm:w-1/3'>
                <p className='w-full text-[2vw] text-left mb-2 md:text-sm lg:text-lg'>We bring you authentic football kits from top clubs and national teams, designed for fans who live the game. Wear your passion. Represent your team. Play bold, feel unstoppable.</p>
                <a href="#featured"><button className='h-[3vw] rounded-3xl w-[13vw] outline text-zinc-900 hover:bg-zinc-900 hover:text-white text-[1.5vw]'>Featured</button></a>
              </aside>
              <aside className='flex justify-center sm:w-1/3'>
                <motion.img key={location.pathname} className='ronaldoImg relative h-130 sm:h-100 xl:h-140' initial={{ bottom: '10px', opacity: 0.5 }} whileInView={{ bottom: '-50px', opacity: 1 }} transition={{ duration: 1 }} src={ronaldoImg} alt="" />
              </aside>
              <aside className='flex flex-nowrap flex-col pt-1 pb-3 w-full sm:bg-transparent sm:w-1/3 sm:overflow-hidden'>
                <h1 className='text-[3vw] font-semibold mb-2 ml-2 sm:text-[2.3vw] lg:text-[1.5rem]'>Our Collaborations</h1>
                <article className='flex w-250 lg:w-400'>
                  <div className="logos flex">
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={adidasLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={nikeLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={pumaLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={niviaLogo} alt="" />
                  </div>
                  <div className="logos flex">
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={adidasLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={nikeLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={pumaLogo} alt="" />
                    <img className='mx-[5vw] h-[10vw] w-[10vw] rounded-lg sm:h-[7vw] w-[7vw] sm:mx-[2vw]' src={niviaLogo} alt="" />
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