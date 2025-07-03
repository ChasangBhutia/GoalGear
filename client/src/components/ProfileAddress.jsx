import React from 'react'
import { motion } from 'framer-motion'
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileAddress = () => {
  return (
    <motion.article initial={{ left: 700, opacity: 0 }} whileInView={{ left: 10, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: false }} className='relative w-3/4 rounded-lg p-5 mx-20'>
      <h1 className='text-3xl'>My Address</h1>
      <section className='grid grid-cols-2 gap-4 my-10'>
        <section className='outline p-3 rounded-2xl w-full'>
          <header className='flex justify-between'>
            <h2>Main Address</h2>
            <section>
            <button><EditSquareIcon/></button>
            <button><DeleteIcon/></button>
            </section>
          </header>
          <article>
            <h2>Chasang Tserin Bhutia</h2>
            <p>Fone Zone, near LPU, Jalandhar, Punjab, 144411</p>
          </article>
        </section>
         <section className='outline p-3 rounded-2xl w-full'>
          <header className='flex justify-between'>
            <h2>Main Address</h2>
            <section>
            <button><EditSquareIcon/></button>
            <button><DeleteIcon/></button>
            </section>
          </header>
          <article>
            <h2>Chasang Tserin Bhutia</h2>
            <p className='text-zinc-600'>Fone Zone, near LPU, Jalandhar, Punjab, 144411</p>
          </article>
        </section>
         <section className='outline p-3 rounded-2xl w-full'>
          <header className='flex justify-between'>
            <h2>Main Address</h2>
            <section>
            <button><EditSquareIcon/></button>
            <button><DeleteIcon/></button>
            </section>
          </header>
          <article>
            <h2>Chasang Tserin Bhutia</h2>
            <p className='text-zinc-600'>Fone Zone, near LPU, Jalandhar, Punjab, 144411</p>
          </article>
        </section>
          <section className='outline p-3 rounded-2xl w-full'>
          <header className='flex justify-between'>
            <h2>Main Address</h2>
            <section>
            <button><EditSquareIcon/></button>
            <button><DeleteIcon/></button>
            </section>
          </header>
          <article>
            <h2>Chasang Tserin Bhutia</h2>
            <p className='text-zinc-600'>Fone Zone, near LPU, Jalandhar, Punjab, 144411</p>
          </article>
        </section>
      </section>
      <button className='bg-zinc-900 text-white rounded-4xl h-12 w-70'>Add Address</button>
    </motion.article>
  )
}

export default ProfileAddress