import { configureStore } from "@reduxjs/toolkit"
import userProfileSlice from "./userProfileSlice"
const store =configureStore({
    reducer:{
       userProfileData: userProfileSlice.reducer
    }
})
export default store