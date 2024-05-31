import React from 'react'

function LeadCard(props) {
  return (
    <div className='flex flex-col flex-wrap bg-[#B1D2C0] text-black  px-6 pt-6 rounded-2xl w-full '>
      <h1 className='text-3xl font-bold mb-2'>Top 5 products by spend</h1>
      <div className='flex flex-col ml-3 gap-2 items-center justify-center'>
        <h1 className='text-sm'>Total score</h1>
        <h1 className='text-4xl font-bold '>{props.items.total}</h1>
        
        <div className='flex flex-grow  bg-[#B5EA96] px-16 py-8 h-[132px] rounded-t-full '>
          <div className='flex flex-col items-center bg-[#D2F2C0] p-2 rounded-lg'>
            <h1 className=' font-bold '>{props.items.spend}</h1>
            <h1 className='text-sm'>{props.items.product}</h1>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default LeadCard