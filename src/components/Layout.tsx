import { FC } from 'react'
import { transactions } from '../api/transactions.api'
import Card from './Card'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
  const income = transactions.filter((t) => t.type === 'income')
  const investment = transactions.filter((t) => t.type === 'investment')
  const outcome = transactions.filter((t) => t.type === 'outcome')
  const loan = transactions.filter((t) => t.type === 'loan')
  return (
    <div className='container max-w-4xl mx-auto mt-5'>
      <Card
        heading='Welcome'
        text='With supporting text below as a natural lead-in to additional content.'
        buttonText='See Transactions'
        counter
        width={'4xl'}
        tab={0}
      />
      <div className='grid grid-cols-2 w-full gap-4'>
        <Card
          heading={income.length.toString()}
          text='Income'
          buttonText='See all'
          counter={false}
          width={'sm'}
          tab={0}
        />
        <Card
          heading={investment.length.toString()}
          text='Investments'
          buttonText='See all'
          counter={false}
          width={'sm'}
          tab={1}
        />
        <Card
          heading={outcome.length.toString()}
          text='Outcome'
          buttonText='See all'
          counter={false}
          width={'sm'}
          tab={2}
        />
        <Card
          heading={loan.length.toString()}
          text='Loans'
          buttonText='See all'
          counter={false}
          width={'sm'}
          tab={3}
        />
      </div>
    </div>
  )
}

export default Layout
