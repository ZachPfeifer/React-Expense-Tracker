import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Charts = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  let amounts = transactions.map(transaction => transaction.amount)
  let text = transactions.map(transaction => transaction.text)
  console.log(transactions, text, amounts);

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="m-4">
      {/*FIXME  Construction */}
      <Tabs>
        <TabList>
          <Tab>Bar Chart</Tab>
          <Tab>Pie Chart</Tab>
          <Tab>Line Chart</Tab>
        </TabList>
        <TabPanel>
          <BarChart text={text} amount={amounts} />
        </TabPanel>
        <TabPanel>
          <PieChart text={text} amount={amounts} />
        </TabPanel>
        <TabPanel>
          <LineChart text={text} amount={amounts} />
        </TabPanel>
      </Tabs>
      {/* END OF CON */}

    </div>
  )
}

export default Charts

