import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Link from "next/link";
const MainPagesLinks = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full">
      <Link href={"/"}>
        {" "}
        <HomeRoundedIcon className="text-5xl" />
      </Link>

      <Link href={"/"}>
        <OndemandVideoRoundedIcon className="text-[40px]" />
      </Link>
      <Link href={"/"}>
        <GroupsRoundedIcon className="text-5xl" />
      </Link>
    </div>
  );
};

export default MainPagesLinks;
