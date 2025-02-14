import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Link from "next/link";
import { Box } from "@mui/material";
const MainPagesLinks = () => {
  return (
<<<<<<< HEAD
    <Box className="flex items-center justify-center gap-10 w-full" sx={{display:{xs:"none",md:"flex"}}}>
=======
    <Box className="flex items-center justify-center gap-10 w-full" sx={{display:{xs:"none",sm:"flex"}}}>
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
      <Link href={"/"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        {" "}
        <HomeRoundedIcon style={{fontSize:"35px"}} />
      </Link>

      <Link href={"/watch"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        <OndemandVideoRoundedIcon style={{fontSize:"35px"}} />
      </Link>
      <Link href={"/"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        <GroupsRoundedIcon style={{fontSize:"35px"}} />
      </Link>
    </Box>
  );
};

export default MainPagesLinks;
