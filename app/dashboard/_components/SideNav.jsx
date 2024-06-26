import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {

  const menuList = [
    {
      id : 1,
      name : 'Dashboard',
      icon : LayoutIcon,
      path : "/dashboard"
    },
    {
      id : 2,
      name : 'Students',
      icon : GraduationCap,
      path : "/dashboard/students"
    },
    {
      id : 3,
      name : 'Attendence',
      icon : Hand,
      path : "/dashboard/attendence"
    },
    {
      id : 4,
      name : 'Settings',
      icon : Settings,
      path : "/dashboard/settings"
    },
    
  ]
  return (
    <div className='border h-screen p-5 shadow-md'>
       <Image
       src={'/logo.svg'}
       width={180}
       height={50}
       alt='logo'/>

       <hr className='my-5'></hr>
       {menuList.map((menu,index)=>(
        <h2 key={index} className='flex items-center gap-3 p-4 text-slate-500 hover:text-white hover:bg-primary cursor-pointer rounded-lg my-2 '>
          <menu.icon/>
          {menu.name}
        </h2>

       ))}
    </div>
  )
}

export default SideNav