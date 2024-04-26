import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Route = () => {
  return (
    <>
    <Navbar  />
    <main className='mb-6'>
     <Outlet sx={{ p: 3 }}/>
    </main>
    </>
  )
}

export default Route