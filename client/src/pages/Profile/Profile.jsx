import { useState } from 'react'
import SideMenu from '../../components/SideMenu'
import ProfileDetails from './ProfileDetails'
import ProfileAddress from './ProfileAddress'
import ProfileOrders from './ProfileOrders'

const Profile = () => {

  const [currSection, setCurrSection] = useState('details');

  return (
    <div className=''>
        <section className='py-5 px-1 flex'>
            <SideMenu currSection={currSection} setCurrSection={setCurrSection}/>
            {currSection === 'details' && <ProfileDetails/>}
            {currSection === 'address' && <ProfileAddress/>}
            {currSection === 'orders' && <ProfileOrders/>}
        </section>
    </div>
  )
}

export default Profile