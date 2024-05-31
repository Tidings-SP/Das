import React from 'react'
import SummaryCard from '../../components/cards/SummaryCard'
import LeadCard from '../../components/cards/LeadCard'
import CampaignsCard from '../../components/cards/CampaignsCard'
import StockCards from '../../components/cards/StockCards'
import CostsCard from '../../components/cards/CostsCard'
import CompareCard from '../../components/cards/CompareCard'

function DashboardContent() {
  // items contain color, text, number
  const SummaryItems = [
    {
      color: 'bg-[#D3E1F8]',
      text: 'Overview',
      number: '1,552'
    },
    {
      color: 'bg-[#D2F3F8]',
      text: 'Campaigns',
      number: '1,552'
    },
    {
      color: 'bg-[#D2F8E9]',
      text: 'Ad Group',
      number: '1,552'
    },
    {
      color: 'bg-[#F6F9D3]',
      text: 'Keywords',
      number: '1,552'
    }
  ]

  const LeadCardItems = {
    total: '2,985',
    spend: '$1,955.67',
    product: 'B07MCGRV7M'
  }

  const campaignItems = [
    {
      campaigns: 'BOFEVSDGH',
      spend: '$30.25',
      sales: '$149.85',
      acos: '$149.85'
    },
    {
      campaigns: 'HKFDBDH',
      spend: '$40.25',
      sales: '$139.85',
      acos: '$149.85'
    },
    {
      campaigns: 'Research-Ac..',
      spend: '$43.25',
      sales: '$129.85',
      acos: '$125.85'
    },
    {
      campaigns: 'Campaign-3',
      spend: '$46.25',
      sales: '$154.85',
      acos: '$133.85'
    },
    {
      campaigns: 'House Number..',
      spend: '$48.25',
      sales: '$129.85',
      acos: '$125.85'
    },
    {
      campaigns: 'GBRFEBRR',
      spend: '$56.25',
      sales: '$129.85',
      acos: '$145.85'
    },

  ]

  const stockItems = [
    {
      title: "Orders Created",
      date: "Oct 16 / 21 - Nov 14 / 21",
      color: "green",
      price1: "$134,970",
      price2: "$128,451",
      percent: "+12.98% ↑"
    }, {
      title: "PPC Sales",
      date: "Oct 16 / 21 - Nov 14 / 21",
      color: "green",
      price1: "$890,00",
      price2: "$872,00",
      percent: "+0.17% ↑"
    }, {
      title: "Total Sales",
      date: "Oct 16 / 21 - Nov 14 / 21",
      color: "red",
      price1: "$2,145,132.80",
      price2: "$2,141,564.20",
      percent: "-4.9% ↓"
    },
  
    {
      title: "PPC Sales",
      date: "Oct 16 / 21 - Nov 14 / 21",
      color: "green",
      price1: "$890,00",
      price2: "$872,00",
      percent: "+0.17% ↑"
    },
    {
      title: "PPC Sales",
      date: "Oct 16 / 21 - Nov 14 / 21",
      color: "green",
      price1: "$890,00",
      price2: "$872,00",
      percent: "+0.17% ↑"
    }

  ]

  const costsItems = {
    x: ['24 Aug', '27 Aug', '2 Sep', '24 Sep', '27 Sep'],
    y: [30, 40, 35, 40, 49]
  }

  return (
    <div className='flex flex-col p-6 gap-10'>
      <div className='flex gap-6'>
        <SummaryCard items={SummaryItems} />
        <LeadCard items={LeadCardItems} />
        <CampaignsCard items={campaignItems} />

      </div>

      <div className=''>

        <StockCards items={stockItems} />
      </div>

      <div className='flex gap-6'>
        <CostsCard items={costsItems} />
        <CompareCard />
      </div>
    </div>
  )
}

export default DashboardContent