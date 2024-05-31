import React from 'react'
import TopNavBar from '../../components/nav/TopNavBar'
import SideNavBar from '../../components/nav/SideNavBar'
import DashboardContent from './DashboardContent'

function Dashboard() {
  return (
    <div className='flex w-full justify-between'>
      <div className=''>
        <SideNavBar />
      </div>
      <div className='w-[92%]'>
        <TopNavBar />

        <DashboardContent />

      </div>
    </div>
  )
}

export default Dashboard