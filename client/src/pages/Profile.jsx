import React from 'react'
import MenuBar from '../components/MenuBar'
import SideMenu from '../components/SideMenu'
import ProfileDetails from '../components/ProfileDetails'

const Profile = () => {
  return (
    <div className=''>
        <MenuBar/>
        <section className='h-[92vh] py-5 px-20 flex'>
            <SideMenu/>
            <ProfileDetails/>
        </section>
    </div>
  )
}

export default Profile