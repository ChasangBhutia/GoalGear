import React, { useState } from 'react'
import { useUser } from '../../hooks/useUser';
import {motion} from 'framer-motion';

const ProfileDetails = () => {

    const { user, uploadProfilImage } = useUser();

    const [uploadForm, setUploadForm] = useState(false);
    const [image, setImage] = useState({});

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    function uploadImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        uploadProfilImage(formData);
        setUploadForm(false)
    }


    return (
        <motion.article className='rounded-lg md:w-200  md:pr-3' >
            <h1 className='text-[5vw] md:text-[30px]'>My Details</h1>
            <header className='flex items-start gap-2 mt-2'>
                <img className='h-[15vw] w-[15vw] rounded-[100%] md:h-20 md:w-20' src={`${user.image}`} alt="" />
                <aside className=''>
                    <h3 className='text-[3.5vw] md:text-[20px]'>{user.fullname}</h3>
                    <button className='bg-zinc-900 text-white rounded-4xl text-[2.5vw] w-[30vw] h-[7vw] md:h-10 md:w-50 md:text-[18px] md:mt-1' onClick={() => setUploadForm(true)}>Upload Image</button>
                </aside>
                {uploadForm && <div className='fixed inset-0 h-full w-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center flex-col'>
                    <form className='bg-white mb-20 w-[80vw] p-[5vw] rounded-xl sm:w-130 sm:h-50 sm:p-5' onSubmit={uploadImage}>
                        <header className='flex items-center mb-[2vw] justify-between sm:mb-3'>
                            <h1 className='text-[5vw] sm:text-[30px]'>Choose your image</h1>
                            <button onClick={() => setUploadForm(false)} className='bg-red-500 h-[6vw] w-[6vw] flex items-center justify-center text-white rounded text-[3.5vw] sm:h-8 sm:w-8 sm:text-[20px]' type='button'>x</button>
                        </header>
                        <input className='outline w-[70vw] p-2 rounded mr-10 text-[2.5vw] sm:w-full sm:text-[20px]' name='image' onChange={handleImageChange} type="file" accept='image/*' />
                        <input className='bg-zinc-900 mt-1 text-white rounded h-[7vw] w-[20vw] text-[2.5vw] sm:h-13 sm:w-50 sm:text-[20px] sm:mt-3' type="submit" value='Upload' />
                    </form>
                </div>}
            </header>
            <section className='mt-5 flex gap-2 flex-col'>
                <section className='flex gap-2'>
                    <section className='w-1/2'>
                        <h4 className='mb-2 text-[3vw] md:text-[20px]'>Fullname</h4>
                        <h3 className='outline inline flex items-center px-2 py-2 rounded-4xl text-[2.5vw] md:h-10 md:text-[18px]'>{user.fullname}</h3>
                    </section>
                    <section className='w-1/2'>
                        <h4 className='mb-2 text-[3vw] md:text-[20px]'>Email Address</h4>
                        <h3 className='outline inline flex items-center px-2 py-2 rounded-4xl text-[2.5vw] md:h-10 md:text-[18px]'>{user.email}</h3>
                    </section>
                </section>
                <section className=''>
                    <section className='w-1/2'>
                    <h4 className='mb-2 text-[3vw] md:text-[20px]'>Phone number</h4>
                    <h3 className='outline inline flex items-center px-2 py-2 rounded-4xl text-[2.5vw] md:h-10 md:text-[18px]'>+91 {user.mobile}</h3>
                    </section>
                </section>
                <section className='mt-5'>
                    <button className='w-1/2 bg-zinc-900 rounded-3xl h-[8vw] text-white text-[3vw] md:h-10 md:text-[20px] md:w-50'>
                        Edit Profile
                    </button>
                </section>
            </section>
        </motion.article>
    )
}

export default ProfileDetails