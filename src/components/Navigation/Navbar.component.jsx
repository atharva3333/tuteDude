import './Navbar.styles.scss'
import Logo from '../../Assets/logo.svg'
import Profile from '../../Assets/Profile.svg'


import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo'><img src={Logo} alt='logo'/></div>
        <div className='nav-links'>
            <div>
                <ul>
                    <li>My Assignments</li>
                    <li>Chat With Mentors</li>
                </ul>
            </div>
            <div className='profile'>
                <i><img src={Profile} alt='profile-icon'/></i>
                <h2>Profile Name</h2>
                <i className='down-arrow'><img src="https://img.icons8.com/ios-glyphs/30/800080/expand-arrow--v1.png" alt='dropdown'/></i>
                <i className='down-arrow-in-mobile'><img src="https://img.icons8.com/ios-glyphs/30/ffffff/expand-arrow--v1.png" alt='dropwdown-in-mobile'/></i>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar