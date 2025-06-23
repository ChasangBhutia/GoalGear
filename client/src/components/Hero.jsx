import {motion} from 'framer-motion';
import heroImg from '../assets/hero.png';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Hero = () => {
  return (
    <div className='z- h-[92vh] overflow-hidden bg-[#FFEFEF] flex flex-col items-center'>
      <motion.div initial={{x:-800}} whileInView={{x:0}} transition={{duration:1, type:'spring', bounce:0.3}} className='flex justify-center w-full px-60 h-[80vh] pt-8'>
        <section className='pt-30 flex-1'>
        <h1 className='uppercase text-5xl font-semibold mb-5' style={{fontFamily:'"Babas Neue", sans-serif'}}>Gear Up Like A Pro</h1>
        <h3 className='mb-2 text-2xl font-light' style={{fontFamily:'"Poppins", sans-serif'}}>Shop Authentic Football Kits From Top Clubs & National Teams</h3>
        <h3 className='mb-2 text-2xl font-light' style={{fontFamily:'"Poppins", sans-serif'}}>Quality. Comfort. Passion.</h3>
        <a href="#newlyAdded">
          <button className='w-2/3 h-10 rounded-lg mt-10 bg-[#F6E20C] font-semibold'>Explore</button>
        </a>
      </section>
      <section className='flex-1 relative'>
        <motion.div initial={{x:1500}} whileInView={{x:0}} transition={{duration:0.5}} className='h-[200vh] w-[50vw] absolute top-[-120px] left-30 bg-[#C91EF9] rotate-30'></motion.div>
        <motion.img initial={{x:1500}} whileInView={{x:50}} transition={{duration:1, type:'spring', bounce:0.3}} className='absolute top-15 left-10' src={heroImg} alt="" />
      </section>
      </motion.div>
      <KeyboardDoubleArrowDownIcon className='text-zinc-900' sx={{fontSize:'60px'}}/>
    </div>
  )
}

export default Hero