import SideMenu from '../components/SideMenu'
import ProfileDetails from '../components/ProfileDetails'

const Profile = () => {
  return (
    <div className=''>
        <section className='h-[92vh] py-5 px-30 flex gap-0'>
            <SideMenu/>
            <ProfileDetails/>
        </section>
    </div>
  )
}

export default Profile