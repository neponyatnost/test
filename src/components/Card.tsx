import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { transactions } from '../api/transactions.api'

interface CardProps {
  heading: string
  text: string
  buttonText: string
  counter: boolean
  width: string
  tab: number
}

const Card: FC<CardProps> = ({
  heading,
  text,
  buttonText,
  counter,
  width,
  tab,
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={`mb-3 max-w-${width} w-full text-center mx-auto pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <h5 className='mb-2 max-w text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {heading}
      </h5>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {text}
      </p>
      <button
        onClick={() => navigate(`navigator?tab=${tab}`)}
        className='inline-flex items-center px-9 py-2 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        {buttonText}
      </button>
      {counter && (
        <>
          <hr />
          <p className='p-2 font-normal text-gray-700 dark:text-gray-400 bg-gray-100 w-full h-full'>
            You have {transactions.length} transactions
          </p>
        </>
      )}
    </div>
  )
}

export default Card
