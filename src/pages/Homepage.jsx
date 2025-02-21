import React from 'react'
import { useAuth } from '../context/AuthProvider'

export default function Homepage() {
    const {isLoggedIn} = useAuth()

    
  return (
    <div>
      This is Homepage
    </div>
  )
}
