import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
    return (
        <nav className="p-2 flex items-center justify-center bg-teal-700">
            <img src={ logo } alt="logo" className='w-30' />
        </nav>
    )
}

export default Navbar
