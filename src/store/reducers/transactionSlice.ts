import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITransaction } from '../../models'

export interface ITransactionState {
  transactions: ITransaction[]
  isLoading: boolean
  error: string
}

const initialState: ITransactionState = {
  transactions: [],
  isLoading: false,
  error: '',
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactions(state) {
      state.isLoading = true
    },
    getTransactionsSuccess(state, action: PayloadAction<ITransaction[]>) {
      state.isLoading = false
      state.error = ''
      state.transactions = action.payload
    },
    getTransactionsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { getTransactions, getTransactionsSuccess, getTransactionsError } =
  transactionSlice.actions
export default transactionSlice.reducer
