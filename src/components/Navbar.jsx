import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import '../App.css'





const Navbar = () => {



    return (
        <div className='w-full flex justify-evenly items-center h-[5rem]'>
            <div className='w-[20%] bg-black h-full py-3 flex justify-center rounded-lg gap-3 items-center border-r border-black '>
                <img src={Logo} alt="Logo" className='h-full inline-block ' /> <span className='font-bold text-white text-2xl'>GrabZLit</span>
            </div>

            <div className='w-[50%] h-full flex text-xl justify-evenly items-center border-r border-black'>
                <NavLink to="/"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >All Products</NavLink>
                <NavLink to="menRoute"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Men</NavLink>
                <NavLink to="womenRoute"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Women</NavLink>
                <NavLink to="jewelleryRoute"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Jewellery</NavLink>
                <NavLink to="electronicsRoute"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Electronics</NavLink>
            </div>

            <div className='w-[30%] h-full flex text-xl justify-evenly items-center '>
                <NavLink to="wishList"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >WishList</NavLink>
                <NavLink to="cart"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Cart</NavLink>
                <NavLink to="bill"
                    className={({ isActive }) => `${isActive ? "border border-black rounded-xl hover:no-underline px-5 py-3" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out`}
                >Bill</NavLink>
            </div>
        </div>
    )
}

export default Navbar
