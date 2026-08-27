import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar';
import Footer from '../Footer';

import '../../index.css'

const MainLayout = () => {
  return (
    <div className='vanlife-app'>
      <div className='main-layout'>
        <NavBar />
        <main className='content'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout