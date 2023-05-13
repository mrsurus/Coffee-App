import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handlelogOut = () => {
        logOut()
    }

    return (
        <div className=' '>
            <header aria-label="Site Header" className="  bg-gray-900 ">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="ml-8 block text-white" href="/">
                                <span className="sr-only">Home</span>
                                <p className="text-2xl font-bold text-orange-800">Caffeine Oasis</p>

                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Site Nav">
                                <ul className="flex items-center gap-6 text-sm">

                                    <li><Link to='/' className="text-base-300 font-semibold font-3xl transition hover:text-500/75" >Home</Link></li>
                                    <li><Link to='/allmenu' className="text-base-300 font-semibold font-3xl transition hover:text-gray-500/75" >Menu</Link></li>
                                    <li><Link to='/' className="text-base-300 font-semibold font-3xl transition hover:text-gray-500/75" >About Us</Link></li>

                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                {
                                    user?.uid ? <>
                                        <div>
                                            <Link onClick={handlelogOut} className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow">Log Out</Link>
                                        </div>

                                    </>
                                        : <div className="sm:flex sm:gap-4">
                                            <Link to='/login' className="rounded-md bg-orange-800 px-5 py-2.5 text-sm font-medium text-white shadow">Login</Link>

                                            <div className="hidden sm:flex">
                                                <Link to='/register' className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-800">Register</Link>
                                            </div>
                                        </div>
                                }
                            </div>


                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>

                                <div tabIndex={0} className="menu menu-compact dropdown-content  p-2   absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "   >
                                    <div className="py-1" role="none">
                                        <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" >Home</Link>
                                        <Link to='/blog' className="text-gray-700 block px-4 py-2 text-md" >Blog</Link>
                                        <Link to='/about' className="text-gray-700 block px-4 py-2 text-md" >About Us</Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
            </header >

        </div >
    );
};

export default Navbar;