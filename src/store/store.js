import {configureStore} from '@reduxjs/toolkit';
import breakingBad from '../slice/breakingSlice'

export const store = configureStore({
    reducer: {
        breakingBad: breakingBad
    }
})