import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../context/AuthContext';
import { addAddress, removeAddress } from '../../services/AuthServices';

const ProfileAddress = () => {
  const { user, setRefresh } = useAuth();

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
    try {
      let response = await addAddress(addressDetail);
      alert(response.data.message);
      setRefresh(prev=>({
        ...prev+1
      }))
      if(response.data.success) setAddAddressSection(false);
    } catch (err) {
      console.log(err.message);
    }
  }

   const handleRemove = async (addressId) => {
    try {
      let response = await removeAddress(addressId);
      alert(response.data.message);
       setRefresh(prev=>({
        ...prev+1
      }))
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <motion.article className='relative rounded-lg p-2 pt-0'>
      <h1 className='text-[5vw]'>My Address</h1>
      <section className='grid grid-cols-2 gap-4 my-3'>
        {user.address.map((item, index) => {
          return (
            <section key={index} className='outline p-[2vw] w-1/2 rounded-lg w-full'>
              <header className='flex justify-between items-center'>
                <h2 className='text-[3vw] font-semibold'>{item.type} Address</h2>
                <section className='flex items-center'>
                  <button><EditSquareIcon sx={{fontSize:'5vw'}}/></button>
                  <button onClick={()=>handleRemove(item._id)}><DeleteIcon sx={{fontSize:'5vw'}}/></button>
                </section>
              </header>
              <article>
                <h2 className='text-[3vw]'>{user.fullname}</h2>
                <p className='text-[2.5vw]'>{item.street}, {item.city}, {item.state}, {item.zip}, {item.country}.</p>
              </article>
            </section>
          )
        })}
      </section>
       <button className='bg-zinc-900 text-white rounded-4xl text-[3vw] h-[10vw] w-[40vw]' onClick={()=>setAddAddressSection(true)}>Add Address</button>
      {addAddressSection && <section className='fixed inset-0 z-99 h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] flex-col'>
        <article className='bg-white w-[80vw] p-2 rounded'>
          <header className='flex items-center mb-3 justify-between'>
            <h1 className='text-[4vw]'>Add Address</h1>
            <button className='bg-red-500 h-[6vw] w-[6vw] flex items-center justify-center text-white rounded' type='button' onClick={()=>setAddAddressSection(false)}>x</button>
          </header>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <section className='flex gap-1 items-center'>
              <p className='text-[2.5vw]'>Street: </p>
              <input className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded ps-1' name='street' onChange={handleChange} type="text" placeholder='Enter your street' />
              <p className='text-[2.5vw]'>City: </p>
              <input className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded ps-1' name='city' onChange={handleChange} type="text" placeholder='Enter your City' />
            </section>
            <section className='flex gap-1 items-center'>
              <p className='text-[2.5vw]'>State: </p>
              <input className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded ps-1' name='state' onChange={handleChange} type="text" placeholder='Enter your State' />
              <p className='text-[2.5vw]'>Country: </p>
              <input className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded ps-1' name='country' onChange={handleChange} type="text" placeholder='Enter your Country' />
            </section>
            <section className='flex gap-1 items-center'>
              <p className='text-[2.5vw]'>Zip Code: </p>
              <input className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded ps-1' name='zip' onChange={handleChange} type="text" placeholder='Enter your Zip Code' />
            </section>
            <section className='flex gap-1 items-center'>
              <p className='text-[2.5vw]'>Address Type: </p>
              <select name='type' onChange={handleChange} className='outline h-[7vw] w-[28vw] text-[2.5vw] rounded w-70'>
                <option selected disabled>Type</option>
                <option value="Main">Main</option>
                <option value="Secondary">Secondary</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </section>
            <input className='bg-zinc-900 text-white py-3 rounded px-5 mt-3 text-[3vw]' type="submit" value="Add Address" />
          </form>
        </article>
      </section>}
    </motion.article>
  )
}

export default ProfileAddress