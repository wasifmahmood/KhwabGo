"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../../assests/images/logo.jpg'
import { useRouter } from 'next/navigation'

const header = () => {
    const router = useRouter();

    const loginClick = () => {
        router.push('/login');  
    }

    return (
        <>
            <div className='d-flex justify-between px-5 bg-gray-600 text-white'>
                <span>
                    <Image src={logo} style={{ width: '56px', height: 'auto' }} />
                </span>
                <span>
                    <button onClick={loginClick} className="text-white  px-4 pt-3 rounded-md">
                        Login
                    </button>
                </span>
            </div>
        </>
    )
}

export default header;