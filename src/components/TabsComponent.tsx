import { FC } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Income from './Income'
import Investments from './Investments'
import Loans from './Loans'
import Outcome from './Outcome'
import './tabs.scss'

interface TabsProps {}

const TabsComponent: FC<TabsProps> = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Tabs defaultIndex={+location.search.replace(/[^0-9]/g, '')}>
      <TabList>
        <button
          onClick={() => navigate('/')}
          className='outline rounded-md p-2 m-2'
        >
          Go to main
        </button>
        <Tab>
          <Link to='?tab=0'>Income</Link>
        </Tab>
        <Tab>
          <Link to='?tab=1'>Investments</Link>
        </Tab>
        <Tab>
          <Link to='?tab=2'>Outcome</Link>
        </Tab>
        <Tab>
          <Link to='?tab=3'>Loans</Link>
        </Tab>
      </TabList>

      <TabPanel>
        <Income />
      </TabPanel>
      <TabPanel>
        <Investments />
      </TabPanel>
      <TabPanel>
        <Outcome />
      </TabPanel>
      <TabPanel>
        <Loans />
      </TabPanel>
    </Tabs>
  )
}

export default TabsComponent
