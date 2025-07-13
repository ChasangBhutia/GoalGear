import { useState } from 'react'
import SideMenu from '../../components/SideMenu'
import ProfileDetails from './ProfileDetails'
import ProfileAddress from './ProfileAddress'
import ProfileOrders from './ProfileOrders'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Profile = () => {

  const [currSection, setCurrSection] = useState('details');
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <section className='flex justify-between items-center px-[3vw] py-3'>
        <h3 className='text-[3vw] md:text-[20px]'>Shopping {'->'} Account</h3>
        <section className={`${menuClicked && 'fixed right-[2vw] top-[12vw] z-99 bg-red-400 p-2 rounded-[100%]'} md:hidden`}>
          <ManageAccountsIcon onClick={() => setMenuClicked(!menuClicked)} />
        </section>
      </section>
      <section className='pb-5 pt-2  flex flex-col px-2 md:flex-row md:gap-2 md:items-start lg:gap-20 lg:mx-20'>
        <SideMenu currSection={currSection} setCurrSection={setCurrSection} menuClicked={menuClicked} />
        {currSection === 'details' && <ProfileDetails />}
        {currSection === 'address' && <ProfileAddress />}
        {currSection === 'orders' && <ProfileOrders />}
      </section>
    </>
  )
}

export default Profile