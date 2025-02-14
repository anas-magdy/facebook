import React from 'react'
import Image from 'next/image';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EmojiPicker from 'emoji-picker-react';
import Grid from '@mui/material/Grid2';
import { useState, useRef } from 'react';
import { Box } from '@mui/material';
const FormComment = ({insserComment}) => {
    const [emojiOpen,setEmojiOpen]=useState(false)
    const [commentValue, setComment] = useState<string>("");
    const emojeRef = useRef<HTMLDivElement | null>(null);
    const handlechange = (e) => {
      setComment(e.target.value); 
    };
    const handleEmojiClick = (emojiData) => {
      setComment((commentValue)=> commentValue + emojiData.emoji);
      emojiData.emoji="";
    };
    const handelSendComment=()=>{
      if(!(commentValue ===""))  {
        insserComment({anas:commentValue});
        setComment("")
      }
    }
  return (
    <Grid container width={"100%"}>
    <Grid size={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Image
              alt="User Profile Pic"
              width={"50"}
              height={"50"}
              className="rounded-full object-cover h-10 w-10"
              src={"/user-avatar-placeholder.jpg"}
          />
      </Grid>
    <Grid  size={11}>

      <input type='text' 
             style={{
                      width:"100%",
                      backgroundColor:"#333334",
                      borderRadius:"20px", 
                      padding:"10px"
                    }} placeholder='Anas Magdy Comment'
              value={commentValue}
              onChange={handlechange}>
      </input>
      <span style={{position:"relative", }}>
        <span style={{right:"10px",bottom:"0px", position:"absolute", display:"flex", flexDirection:"row"}}>
            <div>
            <div style={{zIndex:"5", position:"absolute", right:"0px",bottom:"35px"}}>
                <EmojiPicker ref={emojeRef} id={"emoji"} open={emojiOpen} onEmojiClick={handleEmojiClick} theme={'dark'} searchDisabled={true} skinTonesDisabled={true} emojiStyle={"apple"}/>
            </div>
          </div>
          <Box sx={{display:{xs:"none",sm:"flex"}}}>
               <TagFacesOutlinedIcon id={"iconEmoji"} style={{fontSize:"25px" , color:"#707070", marginRight:"10px"}} onClick={()=>{setEmojiOpen(!emojiOpen)}}></TagFacesOutlinedIcon>
          </Box>
          <SendOutlinedIcon style={{fontSize:"25px" , color:"#707070"}} onClick={handelSendComment}></SendOutlinedIcon>
        </span>
      </span>
      </Grid>
    </Grid>
  )
}

export default FormComment