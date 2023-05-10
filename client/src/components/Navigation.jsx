import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="nav-con">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/alluser">All User</NavLink>
        <NavLink to="/adduser">Add User</NavLink>
      </div>
    </div>
  )
}

export default Navigation;