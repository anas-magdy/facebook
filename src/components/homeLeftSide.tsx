import Grid from '@mui/material/Grid2';
import Image from 'next/image'
import React from 'react'
import {Box} from '@mui/material'

const HomeLeftSide = () => {
  return (

  <Box sx={{color:"white"}}>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src={"/user-avatar-placeholder.jpg"}
        />
      </Grid>
      <Grid  size={10}>user Name</Grid>
    </Grid>

    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/friend.png"
        />
      </Grid>
      <Grid size={10}>Friends</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/memories.png"
        />
      </Grid>
      <Grid size={10}>Memories</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/save.png"
        />
      </Grid>
      <Grid size={10}>Saved</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/groups.png"
        />
      </Grid>
      <Grid size={10}>Groups</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/video.png"
        />
      </Grid>
      <Grid size={10}>Video</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/bar-chart.png"
        />
      </Grid>
      <Grid size={10}>Ads maneger</Grid>
    </Grid>
    <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
      <Grid size={2}>
        <Image
          alt="User Profile Pic"
          width={"100"}
          height={"100"}
          className="rounded-full object-cover h-10 w-10"
          src="/pngIcons/calendar.png"
        />
      </Grid>
      <Grid size={10}>Events</Grid>
    </Grid>

  <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
  <Grid size={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/feed.png"
      />
    </Grid>
    <Grid size={10}>Feeds</Grid>
  </Grid>
  <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
    <Grid size={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/shop.png"
      />
    </Grid>
    <Grid size={10}>Marketplace</Grid>
  </Grid>
  <Grid container className={"mainIcon"} margin={"2px"} padding={"5px"} borderRadius={"15px"}>
    <Grid size={2}>
      <Image
        alt="User Profile Pic"
        width={"100"}
        height={"100"}
        className="rounded-full object-cover h-10 w-10"
        src="/pngIcons/social-media.png"
      />
    </Grid>
    <Grid size={10}>Messenger</Grid>
  </Grid>
 

  </Box>
  )
}

export default HomeLeftSide