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
    <motion.article initial={{ left: 700, opacity: 0 }} whileInView={{ left: 10, opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: false }} className='relative w-3/4 rounded-lg p-5 mx-20'>
      <h1 className='text-3xl'>My Address</h1>
      <section className='grid grid-cols-2 gap-4 my-10'>
        {user.address.map((item, index) => {
          return (
            <section key={index} className='outline p-3 rounded-2xl w-full'>
              <header className='flex justify-between'>
                <h2>{item.type} Address</h2>
                <section>
                  <button><EditSquareIcon /></button>
                  <button onClick={()=>handleRemove(item._id)}><DeleteIcon /></button>
                </section>
              </header>
              <article>
                <h2>{user.fullname}</h2>
                <p>{item.street}, {item.city}, {item.state}, {item.zip}, {item.country}.</p>
              </article>
            </section>
          )
        })}
      </section>
      {addAddressSection && <section className='fixed inset-0 h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] flex-col'>
        <article className='bg-white p-5 rounded-xl'>
          <header className='flex items-center mb-10 justify-between'>
            <h1 className='text-3xl'>Add Address</h1>
            <button className='bg-red-500 h-5 w-5 flex items-center justify-center text-white p-4 rounded' type='button' onClick={()=>setAddAddressSection(false)}>x</button>
          </header>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <section className='flex gap-4 items-center'>
              <p>Street: </p>
              <input className='outline h-10 rounded ps-2' name='street' onChange={handleChange} type="text" placeholder='Enter your street' />
              <p>City: </p>
              <input className='outline h-10 rounded ps-2' name='city' onChange={handleChange} type="text" placeholder='Enter your City' />
            </section>
            <section className='flex gap-4 items-center'>
              <p>State: </p>
              <input className='outline h-10 rounded ps-2' name='state' onChange={handleChange} type="text" placeholder='Enter your State' />
              <p>Country: </p>
              <input className='outline h-10 rounded ps-2' name='country' onChange={handleChange} type="text" placeholder='Enter your Country' />
            </section>
            <section className='flex gap-4 items-center'>
              <p>Zip Code: </p>
              <input className='outline h-10 rounded ps-2' name='zip' onChange={handleChange} type="text" placeholder='Enter your Zip Code' />
            </section>
            <section className='flex gap-4 items-center'>
              <p>Address Type: </p>
              <select name='type' onChange={handleChange} className='outline h-10 rounded w-70'>
                <option selected disabled>Type</option>
                <option value="Main">Main</option>
                <option value="Secondary">Secondary</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </section>
            <input className='bg-zinc-900 text-white py-3 rounded px-5 mt-10' type="submit" value="Add Address" />
          </form>
        </article>
      </section>}
      <button className='bg-zinc-900 text-white rounded-4xl h-12 w-70' onClick={()=>setAddAddressSection(true)}>Add Address</button>
    </motion.article>
  )
}

export default ProfileAddress