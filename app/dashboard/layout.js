import React from 'react'
import SideNav from './_components/SideNav'

const layout = ({children}) => {
  return (
    <div>
      <div className='w-64 fixed  md:block'>
        <SideNav/>
      </div>
      <div className='md:ml-64 '>
      {children}
      </div>
      
      </div>
  )
}

export default layout
