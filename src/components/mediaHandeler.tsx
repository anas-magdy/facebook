import React from 'react'

const MediaHandeler = ({url,handleDoubleClick}) => {
    const imageRegex = new RegExp("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$")
    const videoRegex = /\.(mp4|avi|mov|wmv|flv|mkv|webm|m4v|mpg|mpeg|3gp)$/i;
    const isVideo = videoRegex.test(url)
    const isImage = imageRegex.test(url)

  return (
  <>
      {
        isImage == true ?
            (<>
            <img
                src={url}
                style={{ width: '100%', height: 'auto' }}
            />
            </>):
            isVideo == true ?
            // ref={el => (videoRefs.current[index] = el)}
                (<video  controls={true} autoPlay={false} loop={true} style={{ width: '100%', height: 'auto' }} onDoubleClick={handleDoubleClick}>
                    <source src={url}/>
                </video>) :
                <></>
    }
  </>

  )
}

export default MediaHandeler