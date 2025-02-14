"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from '@/components/profileImage'
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

function Storys() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 3.5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3.5,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3.5,
            }
          },   
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 100,
            settings: {
              slidesToShow: 2.5,
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
          <div style={{position:"relative", overflow:"hidden",borderRadius: "15px",}}>
              <video
                style={{
                  objectFit: "cover",
                  height:"250px"
                }}
                className='story'>
                <source src={video} />
              </video>
              <div style={{position:"absolute", top:"10px", left:"10px"}}>
                <ProfileImage></ProfileImage>          
              </div>
              <h6 style={{position:"absolute", bottom:"10px", left:"10px"}}>
                Anas Magdy
              </h6>
          </div>
        </div>
          
      ))}
    </Slider>
  </div>
  )
}

export default Storys