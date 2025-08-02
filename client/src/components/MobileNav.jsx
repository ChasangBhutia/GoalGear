import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const MobileNav = ({ openMenu, cartQuantity, imgUrl, role }) => {
    return (
        <ul className={`fixed ${openMenu ? 'left-0 flex' : 'left-[120vw] hidden'} duration-200 text-black inset-0 bg-white z-98 flex flex-col items-center gap-3 h-screen pt-20`}>
            <section className='flex gap-2 items-center flex-row-reverse absolute top-2 left-2 bg-red-90 w'>
                {role === 'user' && <Link to="/cart">
                    <ShoppingBagOutlinedIcon fontSize='large' />
                    <span className='absolute top-3 left-15'>{cartQuantity}</span></Link>}

                <Link to="/user">
                    <img className='h-10 w-10 rounded-[100%]' src={`${imgUrl}`} alt="profile pic" />
                </Link>
            </section>
            <Link to="/"><li>Home</li></Link>
            <Link to="/category/boots"><li>Boots</li></Link>
            <Link to="/category/jerseys"><li>Jerseys</li></Link>
            <Link to="/category/gloves"><li>Gloves</li></Link>
            <Link to="/category/bags"><li>Bags</li></Link>
            <Link to="/category/socks"><li>Socks</li></Link>
            <Link to="/category/guards"><li>Guards</li></Link>

            {role === 'admin' && <Link to="/admin/all-products"><li>All Products</li></Link>}
            {role === 'admin' && <Link to="/admin/all-users"><li>All Users</li></Link>}
            {role === 'admin' && <Link to="/admin/create-product"><li>Create Product</li></Link>}
            <Link to="/login">
                <button className='bg-zinc-900 text-white p-2 rounded-4xl w-30 text-sm'>Login</button>
            </Link>
        </ul>
    )
}

export default MobileNav