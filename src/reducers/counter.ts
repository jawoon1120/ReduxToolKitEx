import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increase: state => {
      state.value += 1
    },
    decrease: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    increaseBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increase, decrease, increaseBy } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter
export const countSelector = createSelector(selectCount, (state) => state.value)

export default counterSlice.reducer