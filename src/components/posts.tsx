'use client'
<<<<<<< HEAD
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
=======
import React from 'react'
import { border, borderRadius, Box, padding } from '@mui/system';
import Image from 'next/image'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
 import { useRef ,useEffect} from 'react';

const Posts = () => {

    const sharer = "Anas Magdy";
    const sharingTime = "10 h";
    const discriptionSharer = "if it works it works"
    const sharerId = "132"

    const creatorID = "123"
    const creator = "Ahmed Ragab"
    const discriptionCreator = "عايز اخلص جيش حالا"
    const creatingTime = "10 h"

    const regex = new RegExp('^[\u0621-\u064A ]+$');
    const firstChar = discriptionSharer.charAt(0)
    const isArabic = regex.test(discriptionSharer)

    const firstCharCreator = discriptionCreator.charAt(0)
    const isArabicCreator = regex.test(discriptionCreator)

    const media = "/video1.mp4"
    const imageRegex = new RegExp("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$")
    const videoRegex = /\.(mp4|avi|mov|wmv|flv|mkv|webm|m4v|mpg|mpeg|3gp)$/i;
    const isVideo = videoRegex.test(media)
    const isImage = imageRegex.test(media)
    const videos = ["video8.mp4","video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"]
    const videoRefs = useRef([]);

    useEffect(() => {
        const observers = [];

        const handlePlayPause = (entries, observer) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        };

        videos.forEach((_, index) => {
            const observer = new IntersectionObserver(handlePlayPause, {
                threshold: 1.0, // Play/pause video when 25% of it is visible
            });

            observer.observe(videoRefs.current[index]);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (<>
{
    videos.map((video, index)=>{
        return(
            <Box sx={{ padding: "15px", backgroundColor: "#242526", width: "100%", marginBottom: "5px", borderRadius: "13px" }} key={video}>
            <Box display={"flex"} flexDirection={"row"} sx={{ width: "100%" }} >
                <Image
                    src="/imageTest.jpg"
                    alt="owner"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%", clipPath: "circle()", marginRight: "15px" }}
                    quality={100}
                />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <p style={{ fontWeight: "bold" }} className='underLine'>{sharer}</p>
                    <p>{sharingTime}</p>
                </Box>
                <Box display={"flex"} justifyContent={"center"} marginLeft={"auto"}>
                    <button className={"mainIcon"} style={{width:"35px",height:"35px",borderRadius:"100%"}}>
                        <MoreVertIcon sx={{ fontSize: 25 }}></MoreVertIcon>
                    </button>
                    <button className={"mainIcon"} style={{width:"35px",height:"35px",borderRadius:"100%"}}>
                        <CloseIcon sx={{ fontSize: 25 }}></CloseIcon>
                    </button>
                </Box>
            </Box>
            {
                isArabic ? <p dir='rtl'>{discriptionSharer}</p> : <p dir='ltr'>{discriptionSharer}</p>
            }

            {
                isImage == true ?
                    (<>
                    <img
                        src={media}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    </>):
                    isVideo == true ?
                        (<video ref={el => (videoRefs.current[index] = el)} controls={true} autoPlay={false} loop={true} style={{ width: '100%', height: 'auto' }}>
                            <source src={video}/>
                        </video>) :
                        <></>
            }
            <Box display={"flex"} flexDirection={"row"}>
                <Image
                    src="/imageTest.jpg"
                    alt="owner"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%", clipPath: "circle()", marginRight: "15px" }}
                    quality={100}
                />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <p style={{ fontWeight: "bold" }}>{creator}</p>
                    <p>{creatingTime}</p>
                </Box>
            </Box>
            {
                isArabicCreator ? <p dir='rtl'>{discriptionCreator}</p> : <p dir='ltr'>{discriptionCreator}</p>
            }
            <hr></hr>
            <Box display={"flex"} justifyContent={"space-between"} sx={{ marginTop: "7px" }} >
                <Box className={"mainIcon"} style={{padding:"10px 20px" ,borderRadius:"10px"}}> <ThumbUpOffAltIcon sx={{ fontSize: 35, marginLeft: "15px", marginRight: "10px" }}></ThumbUpOffAltIcon>Like</Box>
                <Box className={"mainIcon"} style={{padding:"10px 20px" ,borderRadius:"10px"}}><MapsUgcIcon sx={{ fontSize: 35, marginRight: "10px" }}> </MapsUgcIcon>Comment</Box>
                <Box className={"mainIcon"} style={{padding:"10px 20px" ,borderRadius:"10px"}}><ReplyAllIcon sx={{ fontSize: 35, marginRight: "10px" }}></ReplyAllIcon>Share</Box>
            </Box>
        </Box>
        )
    })
}
</>)
}
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263

export default Posts