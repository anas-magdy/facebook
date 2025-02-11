import React from "react";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import UserProfilePic from "../ui/UserProfilePic";
import Link from "next/link";

const NavUserIcons = () => {
  return (
    <div className="w-[60%] flex items-center justify-end gap-3">
      <div style={{borderRadius:"50%",backgroundColor:"#4e4f50",padding:"5px"}}>
        <SendRoundedIcon style={{fontSize:"30px"}} />
      </div>
      <CircleNotificationsRoundedIcon style={{fontSize:"35px"}} />
      <Link href={"/profile"}>
        <UserProfilePic />
      </Link>
    </div>
  );
};

export default NavUserIcons;
