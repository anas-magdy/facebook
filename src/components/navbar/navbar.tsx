"use client";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Link from "next/link";
import NavSearch from "./NavSearch";
import MainPagesLinks from "./MainPagesLinks";
import NavUserIcons from "./NavUserIcons";
const Navbar = () => {
  return (
    <nav className='w-full pos"w-full z-[700] sticky top-0 bg-[#242526] h-20 flex  items-center'>
      <div className=" mx-5 w-full flex justify-between h-full">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <FacebookRoundedIcon className="text-5xl " style={{ color: '#0866ff' }}/>
          </Link>
          <NavSearch />
        </div>
        <MainPagesLinks />
        <NavUserIcons />
      </div>
    </nav>
  );
};

export default Navbar;
