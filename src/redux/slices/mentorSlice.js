import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected_mentor: {},
}

export const mentorSlice = createSlice({
    name: 'selected_mentor',
    initialState,
    reducers: {
        selectedMentor: (state, action) => {
            state.selected_mentor = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { selectedMentor} = mentorSlice.actions

export default mentorSlice.reducer