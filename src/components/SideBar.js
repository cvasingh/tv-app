import React from 'react'
import { IoMdContact } from 'react-icons/io'
import logo from '../assets/logo.png'

export default function SideBar() {
    return (
        <div className="col-span-3 hidden md:flex flex-col space-y-4">
            <div className="mx-4">
                <img src={logo} alt="logo" />
            </div>
            <hr className="bg-gradient-to-r from-[#00A793] to-[#1B8F62]" />
            <div className="flex p-2 bg-gradient-to-r from-[#00A793] to-[#1B8F62] text-center rounded-md text-white font-medium  text-[12px] leading-[16px] md:text-[20px] md:leading-[24px]">
                <IoMdContact className='mt-1 mr-2'/>
                 Shiva Singh
            </div>
            <div className="p-2 bg-gradient-to-r from-[#00A793] to-[#1B8F62] rounded-md text-white font-normal text-[10px] leading-[14px] md:text-[18px] md:leading-[22px]">
                Machine ID of this device is LKF5SJ9H. Contact to local vendor to activate this device.
            </div>
        </div>
    )
}
