import axios from 'axios'
import {
  getTransactions,
  getTransactionsError,
  getTransactionsSuccess,
} from './reducers/transactionSlice'
import { AppDispatch } from './store'

export const fetchAllTransactions = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getTransactions())
    const response = await axios.get('http://localhost:3000/api.json')
    dispatch(getTransactionsSuccess(response.data))
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getTransactionsError(error.message))
    }
    return 'Error while loading transactions'
  }
}
