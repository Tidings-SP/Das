import React from 'react'
import {
  Aperture
} from 'lucide-react';
import { iconComponents } from './Icon'

function SideNavBar(props) {
  return (
    <div className='flex fixed top-0 left-0 flex-col p-6 items-center h-screen justify-between '>

      <div className='flex flex-col items-center gap-8'>
        <div className='p-4 px-6 rounded-full border '>
          <h1 className='text-3xl font-bold'>S</h1>
        </div>

        
         {/* Map over the icons array to render each icon */}
         {iconComponents.map((Icon, index) => (
          <div key={index} className='p-2 rounded-full w-fit cursor-pointer hover:bg-[#EEE097] hover:text-black'>
            {Icon}
          </div>
        ))}

      </div>


      <div className='flex items-center justify-items-end rounded-full p-2 cursor-pointer hover:bg-[#EEE097] hover:text-black'>
        <Aperture />
      </div>

    </div>
  )
}

export default SideNavBar