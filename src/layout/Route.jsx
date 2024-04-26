import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Route = () => {
  return (
    <>
    <Navbar></Navbar>
    <main className='mb-6'>
     <Outlet />
    </main>
    </>
  )
}

export default Route