'use client'
import { Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import React from 'react'

const Navbar = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
      }));
    return (

        <Grid container height={"70px"} bgcolor={"#242526"} position={"fixed"} width={"100%"} zIndex={100}>
            <Grid md={3.5} display={'flex'} flexDirection={"row"} justifyContent={"start"} >
                <Box width={"50px"} justifyContent={"center"} display={'flex'}><FacebookRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></FacebookRoundedIcon></Box>
                <Box width={"50x"} justifyContent={"center"} display={'flex'}><SearchRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></SearchRoundedIcon></Box>
            </Grid>
            <Grid md={5} display={'flex'} flexDirection={"row"} justifyContent={"center"} >
                <Box width={"100px"} justifyContent={"center"} display={'flex'} ><HomeRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></HomeRoundedIcon></Box>
                <Box width={"100px"} justifyContent={"center"} display={'flex'} ><OndemandVideoRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></OndemandVideoRoundedIcon></Box>
                <Box width={"100px"} justifyContent={"center"} display={'flex'} ><GroupsRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></GroupsRoundedIcon></Box>
            </Grid>
            <Grid md={3.5} display={'flex'} flexDirection={"row"} justifyContent={"end"} >
                <Box width={"50px"} justifyContent={"center"} display={'flex'}><SendRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></SendRoundedIcon></Box>
                <Box width={"50px"} justifyContent={"center"} display={'flex'}><CircleNotificationsRoundedIcon fontSize='large' sx={{ marginTop: "20px" }}></CircleNotificationsRoundedIcon></Box>
                <Box marginRight={"10px"} sx={{ marginTop: "20px" }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src="/test.jpg" />
                    </StyledBadge>
                    
                </Box>
            </Grid>
        </Grid>

    )
}

export default Navbar