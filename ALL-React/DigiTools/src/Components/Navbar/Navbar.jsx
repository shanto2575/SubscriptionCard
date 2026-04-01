import React from 'react'
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <div className='fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md'>
                <div className='container mx-auto flex justify-between items-center py-4'>
                    <div>
                        <a className='btn btn-ghost font-bold text-4xl text-purple-700'>DigiTools</a>
                    </div>
                    <div>
                        <ul className='flex gap-8 items-center'>
                            <li><a href="">Products</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <ShoppingCart />
                        <button className='btn btn-ghost font-semibold'>Login</button>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>

            {/* Spacer so content doesn't hide behind navbar */}
            <div className='h-24'></div>
        </>
    )
}

export default Navbar;