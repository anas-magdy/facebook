import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import Link from "next/link";
const MainPagesLinks = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full p-[10px]">
      <Link href={"/"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        {" "}
        <HomeRoundedIcon className="text-5xl" />
      </Link>

      <Link href={"/watch"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        <OndemandVideoRoundedIcon className="text-[40px]" />
      </Link>
      <Link href={"/"} className="mainIcon" style={{width:"100px",display:"flex",justifyContent:"center" ,height:"100%",alignItems:"center",borderRadius:"10px"}}>
        <GroupsRoundedIcon className="text-5xl" />
      </Link>
    </div>
  );
};

export default MainPagesLinks;
