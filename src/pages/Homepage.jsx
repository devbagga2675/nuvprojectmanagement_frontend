import React, { use } from 'react'
import { useAuth } from '../context/AuthProvider'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
    const {isLoggedIn} = useAuth()
    const {logout} = useAuth();
    
  return (
    <div>
      This is Homepage
      <NavLink to={'/signin'}>Sign in</NavLink>
      <button type='button' onClick={(e)=> logout()}>Logout</button>
    </div>
  )
}
