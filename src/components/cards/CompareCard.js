import React from 'react'
import Chart from 'react-apexcharts';

function CompareCard() {
  const Data = [
    { time: '21 Aug', value: 900, type: 'Coasts' },
    { time: '21 Sep', value: 300, type: 'Coasts' },
    { time: '21 Aug', value: 300, type: 'Sell' },
    { time: '21 Sep', value: 250, type: 'Sell' },
  ];

  const transformData = [
    { time: '21 Aug', Sell: 600 },
    { time: '21 Sep', Sell: 400 },
  ];

  const chartOptions = {
    chart: {
      type: 'bar',
      stacked: true
    },
    series: [{
      name: 'Coasts',
      data: [44, 55],
      color: "#FFD78E"
      
    }, {
      name: 'Sell',
      data: [13, 23],
      color: "#FEC38E"
    },
    
  
  ],
    plotOptions: {
      bar: {
        borderRadius: 20,
        columnWidth: '50%',
       
      }
    },
    // toolbar: {
    //   show: false
    // },
    
  }


  return (
    <div className='flex flex-col rounded-3xl p-6 w-1/2 bg-[#C5C2AA]'>

      <div className='flex gap-6 justify-between text-black items-center'>
        <div className='text-3xl font-bold mb-2'>ACoS vs TACoS</div>
        <div className='opacity-75'>Aug 21 - Sep 21</div>
        <div className='flex gap-4'>
          <div><span className='text-[#FFD78E]'>⨀</span> Coasts</div>
          <div><span className='text-[#FEC38E]'>⨀</span> Sell</div>

        </div>
      </div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        stacked
        type="bar"
        height={200}
      />
    </div>
  )
}

export default CompareCard