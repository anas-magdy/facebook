'use client'
import React, { useState } from 'react'
import {Box} from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { useRef} from 'react';
import CommentDialog from './CommentDialog';
import TextDirectionHandeler from './textDirectionHandeler';
import MediaHandeler from './mediaHandeler';
import ProfileImage from './profileImage';


const Post = ({props}:any) => {
    const [hidden, setHidden] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [open, setOpen] = React.useState(false);
    const postRef=useRef(null);
    const handleChildClick = (event: React.MouseEvent<HTMLImageElement>) => {
        setSelectedImage(event.currentTarget.src);
        setHidden(false)
    };
    const handleDoubleClick = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedImage("./gifs/Love.gif");
    };

    const toggleIcon= ()=>{
        if(selectedImage)
        {
            setSelectedImage(null)
        }
        else{
            setSelectedImage("/gifs/like.gif")
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
// const videoRefs = useRef([]);
// useEffect(() => {
//     const observers = [];

//     const handlePlayPause = (entries, observer) => {
//         entries.forEach(entry => {
//             const video = entry.target;
//             if (entry.isIntersecting) {
//                 video.play();
//             } else {
//                 video.pause();
//             }
//         });
//     };

//     videos.forEach((_, index) => {
//         const observer = new IntersectionObserver(handlePlayPause, {
//             threshold: 1.0, // Play/pause video when 25% of it is visible
//         });

//         observer.observe(videoRefs.current[index]);
//         observers.push(observer);
//     });

//     return () => {
//         observers.forEach(observer => observer.disconnect());
//     };
// }, []);


return (
    <>
        <Box sx={{ padding: "15px", backgroundColor: "#242526", width: "100%", marginBottom: "5px", borderRadius: "13px" }} ref={postRef}>
            <Box display={"flex"} flexDirection={"row"} sx={{ width: "100%" }} >
                <ProfileImage></ProfileImage>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <p style={{ fontWeight: "bold" }} className='underLine'>{props.sharer}</p>
                    <p>{props.sharingTime}</p>
                </Box>
                <Box display={"flex"} justifyContent={"center"} marginLeft={"auto"}>
                    <button className={"mainIcon"} style={{width:"35px",height:"35px",borderRadius:"100%"}}>
                        <MoreVertIcon sx={{ fontSize: 25 }}></MoreVertIcon>
                    </button>
                    <button className={"mainIcon"} style={{width:"35px",height:"35px",borderRadius:"100%"}}>
                        <CloseIcon sx={{ fontSize: 25 }} onClick={()=>postRef.current.style.display="none"}></CloseIcon>
                    </button>
                </Box>
            </Box>
            <TextDirectionHandeler text={props.discriptionSharer}></TextDirectionHandeler>
            <MediaHandeler url={props.media} handleDoubleClick={handleDoubleClick}></MediaHandeler>
            <Box display={"flex"} flexDirection={"row"} marginTop={"5px"}>
                <ProfileImage></ProfileImage>  
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <p style={{ fontWeight: "bold" }}>{props.creator}</p>
                    <p>{props.creatingTime}</p>
                </Box>
            </Box>
            <TextDirectionHandeler text={props.discriptionCreator}></TextDirectionHandeler>
            <hr></hr>
            <Box display={"flex"} justifyContent={"space-between"} sx={{ marginTop: "7px" }} >
                <Box className={"mainIcon"} style={{ borderRadius:"10px", position: "relative"}}  onMouseEnter={() => setHidden(true)} onMouseLeave={() => setTimeout(()=>{setHidden(false)} ,2000)} > 
                {selectedImage ? (<div style={{width:"100%", height:"100%",padding:"10px 20px"}} onClick={() => toggleIcon()}><img src={selectedImage} alt="Selected Reaction" width="35px" height="35px"/></div>) :
                                (<div style={{width:"100%", height:"100%",padding:"10px 20px"}} onClick={() => toggleIcon()}><ThumbUpOffAltIcon sx={{ fontSize: 35, }}>Like</ThumbUpOffAltIcon ></div>)}

                {hidden&&
                <Box style={{position:"absolute", top:"-50px"}} display={"flex"} flexDirection={"row"} >
                       {["like.gif", "love.gif", "laugh.gif", "sad.gif", "angry-review.gif"].map((gif) => (
                            <img
                            key={gif}
                            src={`/gifs/${gif}`}
                            alt={gif}
                            width="50px"
                            height="50px"
                            className="react"
                            onClick={handleChildClick}
                            style={{ cursor: "pointer" }}
                        />
                        ))}
                    </Box>
                }
                </Box>
                <Box className={"mainIcon "} style={{padding:"10px 20px" ,borderRadius:"10px"}} onClick={handleClickOpen}><MapsUgcIcon sx={{ fontSize: 35, marginRight: "10px" }}> </MapsUgcIcon>Comment</Box>
                <CommentDialog postProp={props} open={open} onClose={handleClose}></CommentDialog>
                <Box className={"mainIcon"} style={{padding:"10px 20px" ,borderRadius:"10px"}}><ReplyAllIcon sx={{ fontSize: 35, marginRight: "10px" }}></ReplyAllIcon>Share</Box>
            </Box>
        </Box>
    </>
  )
}
export default Post