import React from 'react'
import {
  Video,
  CircleHelp,
  Search,
  Bell,
  MessageSquare,
  UserRound,
  CalendarDays,
  FolderClosed,
  Plus
} from 'lucide-react';

function TopNavBar() {
  return (
    <nav className='flex flex-col p-6  '>
      <div className='flex items-center justify-between'>
        {/* Start Part */}
        <div className='flex items-center  gap-2'>
          <h1 className='text-3xl font-medium pr-2'>Dashboard</h1>
          <Video />
          <CircleHelp />
        </div>
        {/* Search Bar */}
        <div className='flex p-2 px-3 rounded-full items-center gap-2 bg-[#27231f]'>
          <Search />
          <input
            className='bg-transparent border-none outline-none'
            placeholder='Search for anything'></input>
        </div>

        {/* End Part */}
        <div className='flex gap-4 items-center'>
          <Bell />
          <MessageSquare />
          <div className='flex w-14 h-14 mx-2 bg-[#27231f] rounded-full items-center justify-center'>
            <UserRound size={42} />
          </div>
        </div>
      </div>
      {/* Second Column */}
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center gap-4'>
          <Tab number="01" text="Overview" />
          <Tab number="02" text="PCC" />
          <Tab number="03" text="Year to year..." />
          <Tab number="04" text="Customize" />
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex p-2 px-4 mr-2 rounded-full items-center gap-2 bg-[#27231f]'>
            <CalendarDays />
            <input
              type='date'
              value="2024-07-22"
              className='bg-transparent border-none outline-none'
              placeholder='Pick a date'></input>
          </div>

          <FolderClosed />
          <div className='flex w-12 h-12 bg-[#E0D28F] rounded-full items-center justify-center'>
            <Plus size={32} color="#000000"/>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Tab(props) {
  return (
    <div className='flex items-center gap-2'>
      <span className='border rounded-full px-[3px]'>{props.number}</span>
      <span className=''>{props.text}</span>
    </div>
  )
}

export default TopNavBar