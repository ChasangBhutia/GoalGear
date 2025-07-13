import { useState, useEffect } from 'react'
import { getAllUsers } from '../services/OwnerServices';
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
    <div className='p-3 h-full text-center'>
      <h1 className='text-[5vw] mb-2 sm:text-[30px] sm:mb-5'>All Users</h1>
      <section className='flex flex-wrap justify-center gap-5 sm:gap-10'>
        {users.map((item, index) => {
          return (
            <section key={index} className='flex items-center gap-2'>
              <article className='flex gap-2 items-center border-1 rounded text-left p-1 w-[65vw] sm:w-100'>
                <img className='h-[10vw] w-[10vw] rounded-[100%] sm:w-15 sm:h-15' src={`http://localhost:3000/uploads/${item.image}`} alt={`${item.fullname}'`} />
                <section>
                  <h3 className='text-[4vw] sm:text-[25px]'>{item.fullname}</h3>
                  <p className='text-[3vw] sm:text-[20px]'>{item.email}</p>
                </section>
              </article>
              <button className='hover:bg-zinc-900  flex items-center justify-center hover:text-white p-2 border-1 rounded h-[7vw] w-[7vw] flex items-center items-center sm:w-13 sm:h-13'><ArrowDropDownIcon fontSize='medium'/></button>
            </section>
          )
        })}
      </section>
    </div>
  )
}

export default AllUsers