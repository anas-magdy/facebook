import React from 'react'
import { Box } from '@mui/system';
import Image from 'next/image'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const Post = () => {

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
    return (

        <Box sx={{ padding: "15px", backgroundColor: "#242526", width: "100%", marginBottom: "10px", borderRadius: "13px" }}>
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

            {
                isImage == true ?
                    (<>
                    <img
                        src={media}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    </>):
                    isVideo == true ?
                        (<video controls="true" autoplay="false" loop="true">
                            <source 
                                style={{ width: '100%', height: 'auto' }}
                                src={media}
                            />
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
                <Box> <ThumbUpOffAltIcon sx={{ fontSize: 35, marginLeft: "15px", marginRight: "10px" }}></ThumbUpOffAltIcon>Like</Box>
                <Box><MapsUgcIcon sx={{ fontSize: 35, marginRight: "10px" }}> </MapsUgcIcon>Comment</Box>
                <Box><ReplyAllIcon sx={{ fontSize: 35, marginRight: "10px" }}></ReplyAllIcon>Share</Box>
            </Box>


        </Box>
    )
}

export default Post