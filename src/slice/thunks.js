import { loadingQuotes, setError, setQuotes } from "./breakingSlice"

export const getQuotes = () => {
    return async (dispatch) => {
        const url = 'https://api.breakingbadquotes.xyz/v1/quotes'

        dispatch(loadingQuotes())

        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch(setQuotes(data[0]))
        } catch (error) {
            console.log(error)
            dispatch(setError(true))
        }
    }
}