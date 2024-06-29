"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import '@/styles/embla.css'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const slides=["video1.mp4","video2.mp4","video3.mp4","video4.mp4","video5.mp4","video6.mp4","video7.mp4"]
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((video,index) => (
            <div className="embla__slide" key={index}>
                
                <video className='h-[400px] w-[200px] object-cover rounded-md'>
                    <source src={video}/>
                </video>
                
              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
