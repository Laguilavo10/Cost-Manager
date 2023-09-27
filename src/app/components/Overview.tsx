'use client'
import { BarChart } from '@tremor/react'
// import { useState } from 'react'
// import DatePicker from './DatePicker'
const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
    uwu: 2212
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
    uwu: 2313
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
    uwu: 2311
  }
]
export default function Overview() {
  // const [date, setDate] = useState({
  //   from: new Date(2023, 0, 20),
  //   to: addDays(new Date(2023, 0, 20), 20),
  // })

  return (
    <>
      {/* <DatePicker/> */}
      <BarChart
        className='mt-6 text-tremor-content-inverted'
        id='bar-chart'
        data={chartdata}
        index='name'
        categories={['Number of threatened species', 'uwu']}
        colors={['green', 'red']}
        animationDuration={500}
        // valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  )
}
