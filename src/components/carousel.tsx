"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MultipleItems() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1}
        const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4", "video7.mp4"]
  return (
    <div className="slider-container" style={{width:"97%"}}>
               <Slider {...settings} style={{display:"grid"}}>
                {
                    videos.map((video, index) => (
                        <div className='h-[50vh] rounded-md' >
                            <video style={{ height: "50vh",objectFit:"cover", borderRadius:"15px"}}>
                                <source src={video} />
                            </video>
                        </div>
                    )
                    )

                }
            </Slider>
    </div>
  );
}

export default MultipleItems;