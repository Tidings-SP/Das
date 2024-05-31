import React from 'react'
import { Circle } from 'lucide-react';

function SummaryCard(props) {
  return (
    <div className='flex flex-col flex-wrap bg-[#B9C0B7] text-black p-6 rounded-2xl w-full'>
      <h1 className='text-3xl font-bold mb-2'>Summary</h1>
      <div className='flex flex-col ml-3 gap-2'>
        {
          props.items.map((item, index) => {
            return (
              <Tab key={index} color={item.color} text={item.text} number={item.number}></Tab>
            )
          })
        }
        

      </div>

      
    </div>
  )
}

function Tab(props) {
  return (
    <div className={`flex items-center justify-between gap-2 p-2 rounded-lg text-black ${props.color}`}>
      <div className='flex w-[250px] items-center gap-1'>
      <Circle size={6} strokeWidth={4}/>
        <span>{props.text}</span>
      </div>

      <div>
        <span className='border rounded-full px-1 bg-[#E4EdFB] bg-opacity-70 border-none'>{props.number}</span>
      </div>
    </div>
  )
}

export default SummaryCard