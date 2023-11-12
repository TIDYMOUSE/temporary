'use client'
import React, { useEffect } from 'react';

export default function Navbar() {
    const handleMouseEnter = (event) => {
        event.target.style.animation = 'underlineExpand 0.3s ease forwards';
    };

    const handleMouseLeave = (event) => {
        event.target.style.animation = 'none';
        void event.target.offsetWidth; // Trigger reflow to reset animation
        event.target.style.animation = null;
    };

    useEffect(() => {
        // Attach event handlers on the client side
        const elements = document.querySelectorAll('.underline-animation');
        elements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup event handlers on component unmount
        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div className="flex sticky top-0 justify-between m-3 font-size bg-primary p-2">
            <div>
                <h1 className=" uppercase font-title font-extrabold text-2xl text-white">WAKEFUL WORKFORCE</h1>
            </div>
            <div className="flex gap-x-4 ">
                <div className="cursor-pointer relative text-white duration-300">
                    <span className="underline-animation">HOME</span>
                </div>
                <div className="cursor-pointer relative text-white duration-300">
                    <span className="underline-animation">ABOUT US</span>
                </div>
                <div className="cursor-pointer relative text-white duration-300">
                    <span className="underline-animation">CONTACT US</span>
                </div>
                <div className=" cursor-pointer text-white border-2 rounded-xl border-secondary p-1 hover:border-[#22abab] ">
                    <span className="font-bold">LOGIN</span>
                </div>
            </div>
        </div>
    );
}
