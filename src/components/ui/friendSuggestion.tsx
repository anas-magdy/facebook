"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardActions from '@mui/material/CardActions'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:"absolute", right:"0", zIndex:"100000"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute", left:"0", zIndex:"100000"}}
      onClick={onClick}
    />
  );
}
const FriendSuggestion = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4.5,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3.5,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2.5,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 100,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };
    const videos = [
        "video1.mp4",
        "video2.mp4",
        "video3.mp4",
        "video4.mp4",
        "video5.mp4",
        "video6.mp4",
        "video7.mp4",
      ];
  return (
  <div className="slider-container" style={{ width: "100%" }}>
    <Slider {...settings} style={{ display: "grid" }}>
      {videos.map((video, index) => (
        <div className="rounded-md" key={index}>
            <Card style={{backgroundColor:"#242526", color:"white"}}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/test.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     Anas Magdy
                  </Typography>
                  <Typography variant="body2">
                      30  mutual friend 
                  </Typography>
                  <CardActions>
                    {/* endIcon={<PeopleAltIcon /> } */}
                    <Button variant="contained">
                      Add Friend
                    </Button>
                  </CardActions>
                </CardContent>
            </Card>
        </div>
      ))}
    </Slider>
  </div>
)}

export default FriendSuggestion