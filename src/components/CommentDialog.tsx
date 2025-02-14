"use client"
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent } from '@mui/material';
import FormComment from './formComment';
import Post from './post';

import Comment from './comment';

const CommentDialog = ({postProp, open ,onClose}:any) => {
const insserComment=(commentObj)=>{
  console.log(commentObj)
  setComments([
    ...comments,
    commentObj
  ])
}
  const [comments,setComments]=useState([
    {
      "anas":"comment",
      "comments": [
        {
           "anas":"reply 1",
           "comments":[
            {"mohamed": "reply 1 on reply 1"},
            {"mohamed": "reply 2 on reply 1"}
           ]
        },
        {
          "omnia":"reply 2"
        },
        {
          "esraa":"reply 3"
        },
        {
          "ahmed":"reply 4"
        }
       
      ]
    },{
      "anas":"vjavcdjhva",
      "comments": [
        {
           "anas":"vjavcdjhva",
        },
        {
          "omnia":"kvdhvajjabb"
        },
        {
          "esraa":"nbowbdiudoqid"
        },
        {
          "ahmed":"mjpoiin;oiho"
        }
       
      ]
    }
  ]
)

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     const emojiDiv = document.getElementById("emoji");
  //     if (emojiDiv && emojiDiv.contains(e.target as Node)) {
  //       console.log("in div");
  //     } else {
  //       console.log("out div")
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
  <>
    <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={onClose} PaperProps={{
          sx: { backgroundColor: "#18191a", color:"white", display:'flex', alignItems:"center",position:"relative" }, // Change background color here
        }}
      >
        <DialogTitle>{postProp.sharer}</DialogTitle>
        <DialogContent dividers={scroll = 'paper'}>
          <Post props={postProp} ></Post>
          {
            comments.map((reply, index)=>{
              return(
                <Comment com={reply} key={index}></Comment>
              )
            })
          }
          </DialogContent>
          <DialogActions style={{width:"100%"}}>
              <FormComment insserComment={insserComment}></FormComment>
          </DialogActions>
      </Dialog>

  </>

  )
}

export default CommentDialog