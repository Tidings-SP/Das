import React from 'react'

function StockCards(props) {
  return (
    <div className='relative flex gap-8 '>
      <div className='w-full h-full  scroll whitespace-nowrap scroll-smooth'>
        {
          props.items.map((item) => {
            return (
              <div className='inline-block p-3'>
                <Cards item={item} />
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

function Cards(props) {
  return (
    <div className='inline-block p-4 bg-[#26221f] rounded-3xl w-60'>
      {/* Header */}
      <div>
        <h1 className='font-bold text-lg'>{props.item.title}</h1>
        <p className='font-thin text-sm opacity-75 mb-2'>{props.item.date}</p>
      </div>

      {/* Footer */}
      <div className='flex gap-4 justify-between'>
        <div className={`${props.item.color === 'green' ? 'text-green-300' : 'text-red-300'}`}>
          <h1>{props.item.price1}</h1>
          <p className='text-xs font-thin opacity-75'>{props.item.price2}</p>
        </div>

        <div className={`flex p-2  rounded-2xl items-center ${props.item.color === 'green' ? 'bg-green-300' : 'bg-red-300'} text-black`}>
          {props.item.percent}
        </div>
      </div>
    </div>
  )
}

export default StockCards