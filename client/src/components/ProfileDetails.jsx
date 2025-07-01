import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useAuth} from '../context/AuthContext';

const ProfileDetails = () => {

    const{user, uploadProfilImage} = useAuth();

    const [uploadForm, setUploadForm] = useState(false);
    const [image, setImage] = useState({});

    const handleImageChange = (e)=>{
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
        <article className='bg-zinc-100 w-3/4 rounded-lg p-5'>
            <h1>My Details</h1>
            <header className='flex items-start gap-5 mt-10'>
                <img className='h-25 w-25 rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" />
                <aside className='mt-3'>
                    <h3 className='mb-2'>{user.fullname}</h3>
                    <button className='bg-zinc-900 text-white py-3 rounded-4xl px-8' onClick={() => setUploadForm(true)}>Upload Image</button>
                </aside>
                {uploadForm && <div className='fixed inset-0 top-[8vh] h-full w-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center flex-col'>
                    <form className='bg-white mb-20 p-10 rounded-xl' onSubmit={uploadImage}>
                        <header className='flex items-center mb-10 justify-between'>
                            <h1 className='text-3xl '>Choose your image</h1>
                            <button onClick={()=>setUploadForm(false)} className='bg-red-500 h-5 w-5 flex items-center justify-center text-white p-4 rounded' type='button'>x</button>
                        </header>
                        <input className='outline w-60 p-2 rounded mr-10' name='image' onChange={handleImageChange} type="file" accept='image/*' />
                        <input className='bg-zinc-900 text-white py-3 rounded px-5' type="submit" value='Upload' />
                    </form>
                </div>}
            </header>
            <section>
                <h3>Fullname: {user.fullname}</h3>
                <h3>Email address: {user.email}</h3>
                <h3>Phone number: 9339197277</h3>
            </section>
        </article>
    )
}

export default ProfileDetails