'use client'
import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/system';
import Image from 'next/image'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useSelector,useDispatch } from 'react-redux';

const watch = () => {
    const profileData=useSelector((state)=>state.userProfileData);
    const sharer = "Anas Magdy";
    const sharingTime = "10 h";
    const discriptionSharer = "if it works it works"
    const regex = new RegExp('^[\u0621-\u064A ]+$');
    const isArabic = regex.test(discriptionSharer)

    const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"]
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


    return (
        <Grid container>
            <Grid md={2.5}>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </Grid>
            <Grid md={9.5} container
                sx={{
                    padding: "15px",
                    height: "100vh",
                    backgroundColor: "#18191a",
                    marginBottom: "10px",
                    borderRadius: "13px",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "auto"
                }} >
                {
                    videos.map((video, index) => {

                        return (

                            <Box sx={{ width: { s: "100%", md: "70%" }, margin: "5px", borderRadius: "15px", padding: "10px" }} flexDirection={"column"} bgcolor={"#242526"}>
                                <Box display={"flex"} flexDirection={"row"} sx={{ width: "100%" }}>
                                    <Image
                                        src="/imageTest.jpg"
                                        alt="owner"
                                        width={50}
                                        height={50}
                                        style={{ borderRadius: "50%", clipPath: "circle()", marginRight: "15px" }}
                                        quality={100}
                                    />

                                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                        <p style={{ fontWeight: "bold" }}>{sharer}</p>
                                        <p>{sharingTime}</p>
                                    </Box>
                                    <Box display={"flex"} justifyContent={"center"} marginLeft={"auto"}>
                                        <button>
                                            <MoreVertIcon sx={{ fontSize: 35 }}></MoreVertIcon>
                                        </button>
                                        <button>
                                            <CloseIcon sx={{ fontSize: 35 }}></CloseIcon>
                                        </button>
                                    </Box>
                                </Box>
                                {
                                    isArabic ? <p dir='rtl'>{discriptionSharer}</p> : <p dir='ltr'>{discriptionSharer}</p>
                                }
                                <video ref={el => (videoRefs.current[index] = el)} controls="true" autoplay="false" loop="true" style={{ width: '100%', height: 'auto' }}>
                                    <source src={video} />
                                </video>
                                <Box display={"flex"} justifyContent={"space-between"} sx={{ marginTop: "7px" }} >
                                    <Box> <ThumbUpOffAltIcon sx={{ fontSize: 35, marginLeft: "15px", marginRight: "10px" }}></ThumbUpOffAltIcon>Like</Box>
                                    <Box><MapsUgcIcon sx={{ fontSize: 35, marginRight: "10px" }}> </MapsUgcIcon>Comment</Box>
                                    <Box><ReplyAllIcon sx={{ fontSize: 35, marginRight: "10px" }}></ReplyAllIcon>Share</Box>
                                </Box>
                            </Box>
                        )

                    })
                }

                {/* ############################################## */}

                <div style={{ width: "100%", height: "60px" }}></div>
            </Grid>
        </Grid>


    )
}

export default watch