import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    quotes: [{"quote":"I hide in plain sight, same as you.","author":"Gustavo Fring"}],
    hasError: false
}

export const breakingSlice = createSlice({
    name: 'breakingBad',
    initialState,
    reducers: {
        loadingQuotes: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        setQuotes: (state, {payload}) => {
            state.quotes.push(payload)
            state.isLoading = false
            state.hasError = false
            
        },
        setError: (state, {payload}) => {
            state.hasError = payload
            state.isLoading = false
            state.quotes = []
        }
    }
})
export const {loadingQuotes, setQuotes, setError} = breakingSlice.actions
export default breakingSlice.reducer