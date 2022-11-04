import React from 'react'
import {Menu , XIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <div className='w-screen h-[80px z-10 bg-zinc-200 fixed drop-shadow-lg' >
            <div className="px-2 flex justify-beetween items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3l font-bold mr-4 sm:text-4xl">CLOUDS.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                
            </div>

        
        </div>
    )
}

export default Navbar