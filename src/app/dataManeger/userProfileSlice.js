import { createSlice } from "@reduxjs/toolkit"
const initialState={userId:123,userName:"Anas Magdy",friendsNum:500,notificationNum:10,profilePicture:"profile-pic.jpg"}
const userProileSlice=createSlice({
    name: "userProfile",
    initialState: initialState,
    reducers:{
        changeName: (name)=>{
             initialState.userName=name
        },
        incrementFriends: ()=>{
            initialState.friendsNum=initialState.friendsNum+1
        },
        decrementFriends: ()=>{
             initialState.friendsNum=initialState.friendsNum-1
        }, 
        incrementNotifiction: ()=>{
            initialState.friendsNum=initialState.friendsNum+1
        },
        decrementNotifiction: ()=>{
             initialState.friendsNum=initialState.friendsNum-1
        },
        changeProfilePicture: (picture)=>{
             initialState.userName=picture
        },
    }
})
export default userProileSlice