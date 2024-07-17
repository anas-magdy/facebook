import React from "react";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import UserProfilePic from "../ui/UserProfilePic";
import Link from "next/link";

const NavUserIcons = () => {
  return (
    <div className="w-[60%] flex items-center justify-end gap-3">
      <SendRoundedIcon className="text-4xl" />
      <CircleNotificationsRoundedIcon className="text-4xl" />
      <Link href={"/profile"}>
        <UserProfilePic />
      </Link>
    </div>
  );
};

export default NavUserIcons;
