import React, { useState } from 'react';
import { BiMenu, BiUser } from 'react-icons/bi';

function footer() {
    return ( 
    <div className='container w-full bg-[#0f3460] flex flex-col justify-between px-10 py-12 md:grid md:grid-cols-5 md:gap-4'>
        <div className='mb-5 md:col-span-2'>
            <h2 className='text-2xl mb-4 text-white'>Logo</h2>
            <p className='text-[#aeb4be] text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
        </div>
        <div className='mb-5'>
            <h2 className='text-2xl mb-4 text-white'>About Us</h2>
            <ul className='text-[#aeb4be] font-light'>
                <li className='hover:text-white text-sm mb-2'>Careers</li>
                <li className='hover:text-white text-sm mb-2'>Our Stores</li>
                <li className='hover:text-white text-sm mb-2'>Our Cares</li>
                <li className='hover:text-white text-sm '>Privacy Policy</li>
            </ul>
        </div>
        <div className='mb-5'>
        <h2 className='text-2xl mb-4 text-white'>Customer Care</h2>
            <ul className='text-[#aeb4be] '>
                <li className='hover:text-white text-sm mb-2'>Help Center</li>
                <li className='hover:text-white text-sm mb-2'>How to Buy</li>
                <li className='hover:text-white text-sm mb-2'>Track Your Order</li>
                <li className='hover:text-white text-sm '>How Are You</li>
            </ul>
        </div>
        <div className=''>
            <h2 className='text-2xl mb-4 text-white'>Contact Us</h2>
            <ul className='text-[#aeb4be] '>
                <li className='hover:text-white text-sm mb-2'>D5, Binh Thanh, Tp.HCM</li>
                <li className='hover:text-white text-sm mb-2'>Email: leduyphong789@gmail.com</li>
                <li  className='hover:text-white text-sm mb-2'>Phone: +84919421679</li>
                <li className='hover:text-white text-sm'>logo </li>
            </ul>
        </div>
    </div>
     );
}

export default footer;