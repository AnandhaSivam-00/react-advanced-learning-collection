import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'

import BrandLogo from '../assets/Images/vanlife-logo.png'

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem('isLoggedIn'))
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, [location]);

  const fakeLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/vanslife/login');
  }

  return (
    <header>
      <nav className='navbar fixed-top py-3'>
        <div className='container-fluid'>
          <div className='col-4 col-md-4 col-lg-3 d-flex justify-content-start'>
            <Link to="/vanslife" className='navbar-brand'>
              <img 
                src={BrandLogo} 
                alt="brand-logo" 
                height="44"
                width="100%" 
              />
            </Link>
          </div>
          <div className='col-8 col-md-5 col-lg-5 d-flex justify-content-end align-items-baseline'>
            <NavLink 
              to="host" 
              className={({ isActive }) => isActive ? 'nav-active mx-auto' : 'mx-auto'}
            >
              Host
            </NavLink>
            <NavLink 
              to="about" 
              className={({ isActive }) => isActive ? 'nav-active mx-auto' : 'mx-auto'}
            >
              About
            </NavLink>
            <NavLink 
              to="vans" 
              className={({ isActive }) => isActive ? 'nav-active mx-auto' : 'mx-auto'}
            >
              Vans
            </NavLink>
            {isLoggedIn ? (
              <button onClick={fakeLogout} className='btn btn-outline-light mx-auto'>Logout</button>
            ) : (
              <NavLink 
                to="login" 
                className={({ isActive }) => isActive ? 'nav-active mx-auto' : 'mx-auto'}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar