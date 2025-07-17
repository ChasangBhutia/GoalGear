import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUser } from '../../hooks/useUser';

const ProfileAddress = () => {

  const {user, addUserAddress, removeUserAddress} = useUser();  
  const [addAddressSection, setAddAddressSection] = useState(false);
  const [addressDetail, setAddressDetail] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  })

  const handleChange = (e) => {
    setAddressDetail(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addUserAddress(addressDetail);
    setAddAddressSection(false);
  }


  return (
    <motion.article className='relative p-2 pt-0'>
      <h1 className='text-[5vw] md:text-[30px]'>My Address</h1>
      <section className='grid grid-cols-2 gap-4 my-3 xl:grid-cols-3'>
        {user.address?.length > 0 ? user.address.map((item) => {
          return (
            <section key={item._id} className='outline p-[2vw] w-1/2 rounded-lg w-full sm:p-2'>
              <header className='flex justify-between items-center'>
                <h2 className='text-[3vw] font-semibold md:text-[20px]'>{item.type} Address</h2>
                <section className='flex items-center'>
                  <button><EditSquareIcon sx={{fontSize:'3vw'}}/></button>
                  <button onClick={()=>removeUserAddress(item._id)}><DeleteIcon sx={{fontSize:'3vw'}}/></button>
                </section>
              </header>
              <article>
                <h2 className='text-[3vw] sm:text-[20px]'>{user.fullname}</h2>
                <p className='text-[2.5vw] sm:text-[18px]'>{item.street}, {item.city}, {item.state}, {item.zip}, {item.country}.</p>
              </article>
            </section>
          )
        }): <p>No address added</p>}
      </section>
       <button className='bg-zinc-900 text-white rounded-4xl text-[3vw] h-[10vw] w-[40vw] sm:h-12 sm:w-80 sm:text-[20px]' onClick={()=>setAddAddressSection(true)}>Add Address</button>
      {addAddressSection && <section className='fixed inset-0 z-99 h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] flex-col'>
        <article className='bg-white max-w-130 p-2 rounded'>
          <header className='flex items-center mb-3 justify-between'>
            <h1 className='text-[4vw] sm:text-[25px]'>Add Address</h1>
            <button className='bg-red-500 h-[6vw] w-[6vw] flex items-center justify-center text-white rounded sm:h-8 sm:w-8' type='button' onClick={()=>setAddAddressSection(false)}>x</button>
          </header>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <section className='flex gap-1 items-center text-[2.5vw] sm:text-[15px]'>
              <p>Street: </p>
              <input className='outline h-[7vw] w-[28vw]  rounded ps-1 sm:h-10 sm:w-50' name='street' onChange={handleChange} type="text" placeholder='Enter your street' />
              <p>City: </p>
              <input className='outline h-[7vw] w-[28vw]  rounded ps-1 sm:h-10 sm:w-50' name='city' onChange={handleChange} type="text" placeholder='Enter your City' />
            </section>
            <section className='flex gap-1 items-center text-[2.5vw] sm:text-[15px]'>
              <p>State: </p>
              <input className='outline h-[7vw] w-[28vw]  rounded ps-1 sm:h-10 sm:w-50' name='state' onChange={handleChange} type="text" placeholder='Enter your State' />
              <p>Country: </p>
              <input className='outline h-[7vw] w-[28vw]  rounded ps-1 sm:h-10 sm:w-50' name='country' onChange={handleChange} type="text" placeholder='Enter your Country' />
            </section>
            <section className='flex gap-1 items-center text-[2.5vw] sm:text-[15px]'>
              <p>Zip Code: </p>
              <input className='outline h-[7vw] w-[28vw]  rounded ps-1 sm:h-10 sm:w-50' name='zip' onChange={handleChange} type="text" placeholder='Enter your Zip Code' />
            </section>
            <section className='flex gap-1 items-center text-[2.5vw] sm:text-[15px]'>
              <p>Address Type: </p>
              <select name='type' onChange={handleChange} className='outline h-[7vw] w-[28vw] rounded w-70 sm:h-10 sm:w-50' defaultValue="Type">
                <option disabled>Type</option>
                <option value="Main">Main</option>
                <option value="Secondary">Secondary</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </section>
            <input className='bg-zinc-900 text-white py-3 rounded px-5 mt-3 text-[3vw] sm:h-10 sm:text-[18px] sm:py-0' type="submit" value="Add Address" />
          </form>
        </article>
      </section>}
    </motion.article>
  )
}

export default ProfileAddress