import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name : "sidebar",
    initialState : {
        isMenuOpen : true 
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeSideBar : (state) => {
            state.isMenuOpen = null
        },
        openSideBar : (state) => {
            state.isMenuOpen = true
        },
    }
})

export const {toggleSideBar , closeSideBar , openSideBar} = sidebarSlice.actions

export default sidebarSlice.reducer