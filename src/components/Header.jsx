import { UserButton, UserProfile } from '@clerk/clerk-react'
import React from 'react'

const Header = () => {
  return (
    <div className=' bg-slate-200 container mx-auto px-4 sm:px-12 h-20 w-full border border-b-2 shadow-md flex items-center justify-between  '>
        <div className=' text-2xl font-bold border-b-2 rounded-md p-1 border-black '>Timer App</div>
        <div className=' flex items-center gap-3 capitalize font-semibold'>
          <span>User Profile</span>
           <UserButton/>
        </div>
    </div>
  )
}

export default Header