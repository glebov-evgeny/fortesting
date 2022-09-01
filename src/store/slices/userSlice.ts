import { createSlice } from '@reduxjs/toolkit'

interface IUser {
    username: string | null
}

const initialState:IUser = {
    username: localStorage.getItem('username') || null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username;
        },
        removeUser(state) {
            state.username = null;
            localStorage.clear()
        },
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;