import React from 'react'

function CampaignsCard(props) {
  return (
    <div className='flex flex-col flex-wrap bg-[#bab6c1] text-black p-6 rounded-2xl w-full'>
      <h1 className='text-3xl font-bold mb-2'>Highest ACoS campaigns</h1>
      <div className='flex flex-col ml-3 gap-2'>
        <table className='space-y-2'>
          <tr className='text-sm font-light'>
            <th className='font-light text-sm text-[#38373a]'>Campaign</th>
            <th className='font-light text-sm text-[#38373a]'>Spend</th>
            <th className='font-light text-sm text-[#38373a]'>Sales</th>
            <th className='font-light text-sm text-[#38373a]'>ACoS</th>
          </tr>

          {
            props.items.map((item, index) => {
              return (
                <tr key={index} className=''>
                  <td>{item.campaigns}</td>
                  <td className='text-sm text-[#38373a]'>{item.spend}</td>
                  <td className='text-sm text-[#38373a]'>{item.sales}</td>
                  <td>{item.acos}</td>
                </tr>
              )
            })
          }
        </table>


      </div>


    </div>
  )
}

export default CampaignsCard