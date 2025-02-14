import React from 'react'
import Image from 'next/image'
const ProfileImage = ({url="/user-avatar-placeholder.jpg", isActive=true, hasStory=true}) => {
  return (
    <div style={{position:"relative" }}>
        <img src={url}
            className="rounded-full object-cover h-10 w-10" 
            style={{
                border: hasStory ? "3px solid #26b2f3":"none",
                 marginRight: "15px"
                }}
        />
        {isActive &&
            <div style={{backgroundColor:"green", width:"10px", height:"10px", borderRadius:"100%" , position:"absolute", bottom:"5px", right:"15px"}}/>
        }
    </div>
  )
}
export default ProfileImage