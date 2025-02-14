import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import Image from 'next/image'
import FormComment from './formComment';
const Comment = ({com}) => {

const [displayReply,setDisplayReply]=useState(false)
const commentKeys = Object.keys(com).filter((key) => key !== "comments");
const commentKeyyyyys = Object.keys(com).filter((key) => key === "comments");
const commentText = commentKeys.length > 0 ? com[commentKeys[0]] : "No comment text";
const [showMore, setShowMore]=useState(false)
const [reply, setReply]=useState()
const handelReply=(replyObj)=>{
  console.log(replyObj)
  setReply(replyObj)
  console.log(reply)
}

  return (
    <>
        <Grid container spacing={1} margin={"2px"} padding={"5px"} borderRadius={"15px"} style={{backgroundColor: "#3a3b3c", alignItems:"center"}}>
                <Grid  size={1}  >
                    <Image
                        alt="User Profile Pic"
                        width={"50"}
                        height={"50"}
                        className="rounded-full object-cover h-10 w-10"
                        src={"/user-avatar-placeholder.jpg"}
                    />
                </Grid>
                <Grid size={9}> {commentText}</Grid>
        </Grid>
        <Grid container>
            <Grid size={1}></Grid>
            <Grid size={11} style={{fontSize:"15px"}}>
                <span style={{marginRight:"10px"}} className='underLine'>like</span>
                <span style={{marginRight:"10px"}} className='underLine' onClick={()=>{setDisplayReply(!displayReply)}}>Reply</span>
                <span className='underLine' onClick={()=>{setShowMore(!showMore)}}>show more</span> 
              {
                 displayReply &&
                <FormComment insserComment={handelReply} ></FormComment>
              }
              {/* {
                reply.map((item, index)=>{() })
              } */}
              {
                reply ? <Comment com={reply}></Comment>:""
              }
             
              {
                showMore && com.comments && Array.isArray(com.comments) && com.comments.map((child, index) => (
                <Comment key={index} com={child} />
              ))}

            </Grid>
        </Grid>

    </>

  )
}

export default Comment