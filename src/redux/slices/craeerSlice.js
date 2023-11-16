import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    careers: [],
}

export const careerSlice = createSlice({
    name: 'careers',
    initialState,
    reducers: {
        careerData: (state, action) => {
            state.careers = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { careerData } = careerSlice.actions

export default careerSlice.reducer