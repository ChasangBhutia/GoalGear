import React from 'react'
import { useState } from 'react'
import { getAllUsers } from '../services/OwnerServices';
import { useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getAllUsers();
        if (response.data.success) setUsers(response.data.users);
      }
      catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [])


  return (
    <div className='p-3 h-full'>
      <h1 className='text-[5vw] mb-2'>All Users</h1>
      <section className='flex flex-col gap-2 items-center'>
        {users.map((item, index) => {
          return (
            <section key={index} className='flex items-center gap-2'>
              <article className='flex gap-2 items-center border-1 rounded-xl p-1 w-[65vw]'>
                <img className='h-[10vw] w-[10vw] rounded-[100%]' src={`http://localhost:3000/uploads/${item.image}`} alt={`${item.fullname}'`} />
                <section>
                  <h3 className='text-[4vw]'>{item.fullname}</h3>
                  <p className='text-[3vw]'>{item.email}</p>
                </section>
              </article>
              <button className='hover:bg-zinc-900 hover:text-white p-2 border-1 rounded h-[7vw] w-[7vw] flex items-center items-center'><ArrowDropDownIcon fontSize='medium'/></button>
            </section>
          )
        })}
      </section>
    </div>
  )
}

export default AllUsers