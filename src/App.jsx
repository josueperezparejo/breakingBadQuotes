import React from 'react'
import {useDispatch} from 'react-redux'
import { getQuotes } from './slice/thunks'

export const App = () => {

  const dispatch = useDispatch()

  const handleFetch = () => {
    dispatch(getQuotes())
  }

  return (
    <div className=''>
      <h1 className='text-center mt-4'>Breaking Bad Quotes</h1>
      <button onClick={handleFetch} className='btn btn-primary'>New Quote</button>
    </div>
  )
}
