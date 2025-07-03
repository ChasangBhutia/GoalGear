import SideMenu from '../components/SideMenu'
import ProfileDetails from '../components/ProfileDetails'
import ProfileAddress from '../components/ProfileAddress'
import { useState } from 'react'
import ProfileOrders from '../components/ProfileOrders'

const Profile = () => {

  const [currSection, setCurrSection] = useState('details');

  return (
    <div className=''>
        <section className='h-[92vh] py-5 px-30 flex gap-0'>
            <SideMenu currSection={currSection} setCurrSection={setCurrSection}/>
            {currSection === 'details' && <ProfileDetails/>}
            {currSection === 'address' && <ProfileAddress/>}
            {currSection === 'orders' && <ProfileOrders/>}
        </section>
    </div>
  )
}

export default Profile