import React from "react"
import { assets } from "../assets/assets"
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { openSignIn } = useClerk()
    const { user } = useUser()

    return (
        <div className='shadow py-3 bg-white'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                
                {/* Logo section: logo and text aligned */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={assets.logo} alt="Skill Bridge Logo" className="h-10 w-auto" />
                    <span className="font-bold text-xl text-blue-600 group-hover:text-blue-800 transition">
                        Skill Bridge
                    </span>
                </Link>

                {/* User/Profile Section */}
                {user ? (
                    <div className='flex items-center gap-6'>
                        <Link 
                          to={'/applications'} 
                          className="text-md font-medium hover:text-blue-700 transition"
                        >
                            Applied Jobs
                        </Link>
                        <span className="mx-1">|</span>
                        <span className='max-sm:hidden font-medium text-gray-800'>Hi, {user.firstName + " " + user.lastName}</span>
                        <UserButton />
                    </div>
                ) : (
                    <div className='flex gap-4 max-sm:text-xs items-center'>
                        <Link  className='text-gray-600 cursor-pointer font-medium hover:text-blue-700 transition'>Recruiter Login</Link>
                        <button 
                          onClick={e => openSignIn()} 
                          className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full font-bold hover:bg-blue-700 shadow transition cursor-pointer'
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
