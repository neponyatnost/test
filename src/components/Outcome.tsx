import { FC } from 'react'
import { transactions } from '../api/transactions.api'

interface OutcomeProps {}

const Outcome: FC<OutcomeProps> = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-center text-sm font-light'>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr>
                  <th scope='col' className='px-6 py-4'>
                    #
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    First
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Last
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions
                  .filter((t) => t.type === 'outcome')
                  .map((t, index) => (
                    <tr
                      key={t._id}
                      className='border-b dark:border-neutral-500'
                    >
                      <td className='whitespace-nowrap px-6 py-4 font-medium'>
                        {index + 1}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        {t.name.first}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        {t.name.last}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>{t.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outcome
