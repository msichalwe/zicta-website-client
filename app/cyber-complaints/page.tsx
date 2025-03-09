'use client'

import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const CyberComplaints = () => {
    return (
        <>

            <div className="flex gap-10 w-full flex-col">
                <iframe
                    src="http://estorage.zicta.zm:8000/"
                    title="Cyber Complaints"
                    className="w-full h-screen"
                ></iframe>
            </div>

        </>
    )
}

export default CyberComplaints
