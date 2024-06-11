import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='flex justify-between items-center bg-gray-700 text-white py-4 px-6 sticky top-0 z-30'>
            <div className="logo">
                <NavLink to="/">
                    <img
                        src="https://imgs.search.brave.com/rBProRx1G4x0_Uj3bowU9_tzqQG6aaHps4GYiDoW3ho/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FlL1B1/bWEtbG9nby0lMjh0/ZXh0JTI5LnN2Zy8y/MjBweC1QdW1hLWxv/Z28tJTI4dGV4dCUy/OS5zdmcucG5n"
                        alt="Puma logo"
                        className="h-8"
                    />
                </NavLink>
            </div>
            <div className="sm:hidden relative">
                <button onClick={toggleMenu} className='text-white'>
                    Menu
                </button>
                {showMenu && (
                    <div className="absolute top-full left-0 bg-gray-700 p-4">
                        <ul className="space-y-4">
                            <li>
                                <NavLink to="/" className="font-bold text-white">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/store" className="font-bold text-white">Store</NavLink>
                            </li>
                            <li className='hover:text-gray-300'>
                                <Link to="footer" smooth={true} duration={500} className="cursor-pointer font-bold">Contact</Link>
                            </li>
                            <li>
                                <NavLink to="/about" className="font-bold text-white">About</NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="hidden sm:block">
                <ul className='flex space-x-4 items-center'>
                    <li className='hover:text-gray-300'>
                        <NavLink to="/" className="font-bold">Home</NavLink>
                    </li>
                    <li className='hover:text-gray-300'>
                        <NavLink to="/store" className="font-bold">Store</NavLink>
                    </li>
                    <li className='hover:text-gray-300'>
                        <Link to="footer" smooth={true} duration={500} className="cursor-pointer font-bold">Contact</Link>
                    </li>
                    <li className='hover:text-gray-300'>
                        <NavLink to="/about" className="font-bold">About</NavLink>
                    </li>
                </ul>
            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded'>
                <NavLink to="/login">Login</NavLink>
            </button>
        </nav>
    );
}

export default Navbar;
