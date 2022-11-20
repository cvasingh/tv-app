import React from 'react'

export default function Card({ data }) {
    return (
        <div className='font-Poppins min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-xl bg-gradient-to-b from-[#00A793] to-[#1B8F62] mirrorImg flex flex-col p-3'>
            <div className='text-white font-medium text-center'>
                {data.icon}
            </div>
            <div className='text-white font-medium text-center'>
                {data.name}
            </div>
        </div>
    )
}
