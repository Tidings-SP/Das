import React from 'react'
import Chart from 'react-apexcharts';

function CostsCard(props) {

  const chartOptions = {
    // Define your chart options here
    chart: {
      type: 'line',
      height: 200
    },
   
    stroke: {
      curve: 'smooth'
    },
    colors: ['#000000'],
    series: [
      {
        name: 'Costs',
        data: props.items.y,
      },
    ],
    xaxis: {
      categories: props.items.x,
    },
    // toolbar: {
    //   show: false
    // },

  };


 

  return (
    <div className='flex flex-col rounded-3xl p-6 w-1/2 bg-[#bfb293]'>

      <div className='flex gap-6 justify-between text-black items-center'>
        <div className='text-3xl font-bold mb-2'>Costs</div>
        <div className='opacity-75'>Aug 21 - Sep 21</div>
        <div>⨀  Coast</div>
      </div>

      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={200}
      />
    </div>
  )
}

export default CostsCard