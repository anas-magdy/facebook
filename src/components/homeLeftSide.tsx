import Grid from '@mui/system/Unstable_Grid/Grid'
import Image from 'next/image'
import React from 'react'

const HomeLeftSide = () => {
  return (
    <Grid container spacing={2} margin={"2px"} padding={"5px"} borderRadius={"15px"} className={"mainIcon"}>
    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src={"/user-avatar-placeholder.jpg"}
      />
    </Grid>
    <Grid item xs={10}>user Name</Grid>
    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/friend.png"
      />
    </Grid>
    <Grid item xs={10}>Friends</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/memories.png"
      />
    </Grid>
    <Grid item xs={10}>Memories</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/save.png"
      />
    </Grid>
    <Grid item xs={10}>Saved</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/groups.png"
      />
    </Grid>
    <Grid item xs={10}>Groups</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/video.png"
      />
    </Grid>
    <Grid item xs={10}>Video</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/bar-chart.png"
      />
    </Grid>
    <Grid item xs={10}>Ads maneger</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/calendar.png"
      />
    </Grid>
    <Grid item xs={10}>Events</Grid>
    
    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/feed.png"
      />
    </Grid>
    <Grid item xs={10}>Feeds</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/shop.png"
      />
    </Grid>
    <Grid item xs={10}>Marketplace</Grid>

    <Grid item xs={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/social-media.png"
      />
    </Grid>
    <Grid item xs={10}>Messenger</Grid>
 

  </Grid>
  )
}

export default HomeLeftSide