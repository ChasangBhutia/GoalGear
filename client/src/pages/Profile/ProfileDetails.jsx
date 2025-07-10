import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext';
import {motion} from 'framer-motion';

const ProfileDetails = () => {

    const { user, uploadProfilImage } = useAuth();

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
        <motion.article className='relative rounded-lg' >
            <h1 className='text-[5vw]'>My Details</h1>
            <header className='flex items-start gap-2 mt-2'>
                <img className='h-[15vw] w-[15vw] rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" />
                <aside className=''>
                    <h3 className='text-[3.5vw]'>{user.fullname}</h3>
                    <button className='bg-zinc-900 text-white rounded-4xl text-[2.5vw] w-[30vw] h-[7vw]' onClick={() => setUploadForm(true)}>Upload Image</button>
                </aside>
                {uploadForm && <div className='fixed inset-0 h-full w-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center flex-col'>
                    <form className='bg-white mb-20 w-[80vw] p-[5vw] rounded-xl' onSubmit={uploadImage}>
                        <header className='flex items-center mb-[2vw] justify-between'>
                            <h1 className='text-[5vw] '>Choose your image</h1>
                            <button onClick={() => setUploadForm(false)} className='bg-red-500 h-[6vw] w-[6vw] flex items-center justify-center text-white rounded text-[3.5vw]' type='button'>x</button>
                        </header>
                        <input className='outline w-[70vw] p-2 rounded mr-10 text-[2.5vw]' name='image' onChange={handleImageChange} type="file" accept='image/*' />
                        <input className='bg-zinc-900 mt-1 text-white rounded h-[7vw] w-[20vw] text-[2.5vw]' type="submit" value='Upload' />
                    </form>
                </div>}
            </header>
            <section className='mt-5 flex gap-2 flex-col'>
                <section className='flex gap-2'>
                    <section className='w-1/2'>
                        <h4 className='mb-1 text-[3vw] font-semibold'>Fullname</h4>
                        <h3 className='outline w-[38vw] h-[7vw] flex items-center px-1 rounded-4xl text-[2.5vw]'>{user.fullname}</h3>
                    </section>
                    <section className='w-1/2'>
                        <h4 className='mb-1 text-[3vw] font-semibold'>Email Address</h4>
                        <h3 className='outline w-[38vw] h-[7vw] flex items-center px-1 rounded-4xl text-[2.5vw]'>{user.email}</h3>
                    </section>
                </section>
                <section className=''>
                    <section className='w-1/2'>
                    <h4 className='mb-1 text-[3vw] font-semibold'>Phone number</h4>
                    <h3 className='outline w-[38vw] h-[7vw] flex items-center px-1 rounded-4xl text-[2.5vw]'>+91 {user.mobile}</h3>
                    </section>
                </section>
                <section className='mt-5'>
                    <button className='w-1/2 bg-zinc-900 rounded-3xl h-[8vw] text-white text-[3vw]'>
                        Edit Profile
                    </button>
                </section>
            </section>
        </motion.article>
    )
}

export default ProfileDetails