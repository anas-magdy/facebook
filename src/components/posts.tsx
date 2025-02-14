'use client'
import React from 'react';
import Post from './post';
const Posts = () => {
    const data = [
        {   
            postID:"affwregjrtk",
            media:"anas.jpg",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        },   {   
            postID:"00114410",
            media:"video8.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        },   
        {
            postID:"fafdsndokad",
            media:"profile-pic.jpg",  
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
        }, 
        {
            postID:"001144fohi",
            media:"video1.mp4",  
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
        }, 
        {
            postID:"0011dnsadkn44faf0",
            media:"video2.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
        , 
        {
            postID:"0011dns98hgregfosiadkn44faf0",
            media:"belal1.jpg",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
        , 
        {
            postID:"0011dnsadkdwdrgreboiugon44faf0",
            media:"belal2.jpg",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
 

        {
            postID:"00a1nagerterf4faf0",
            media:"video3.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
        },
        {
            postID:"00a1gewgvnafkbik0",
            media: "video4.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
        , 
        {
            postID:"0011dnsxvfvadkn44faf0",
            media:"video2.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
        {
            postID:"egeeergregv",
            media:"video5.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
        },
        , 
        {
            postID:"sgrtgregerg",
            media:"belal3.jpg",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
    
        }, 
        {
            postID:"4tewtafetreta",
            media:"video6.mp4",
            discriptionSharer :"if it works it works",
            sharerId :"132",
            sharer : "Anas Magdy",
            creatorID : "123",
            creator: "Ahmed Ragab",
            discriptionCreator : "عايز اخلص جيش حالا",
            creatingTime : "10 h",
            sharingTime :"6 h",
        }]
return (
    <>
    {
        data.map((data)=>{
            return(
                <Post props={data} key={data.postID}></Post>
            )
        })
    }
    </>
)}

export default Posts