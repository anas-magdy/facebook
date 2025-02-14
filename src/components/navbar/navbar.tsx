"use client";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import React from "react";
import Link from "next/link";
import NavSearch from "./NavSearch";
import MainPagesLinks from "./MainPagesLinks";
import NavUserIcons from "./NavUserIcons";
import { Box } from "@mui/material";
function Navbar() {
  return (
    <nav className='w-full pos"w-full z-[700] sticky top-0 bg-[#242526] flex  items-center' style={{height:"55px"}}>
      <div className=" mx-5 w-full flex justify-between h-full">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <FacebookRoundedIcon style={{ color: '#0866ff', fontSize:"40px" }}/>
          </Link>
          <NavSearch />
        </div>
        
<<<<<<< HEAD
         
=======
        
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
        <MainPagesLinks />
      
     
        <NavUserIcons />
      </div>
    </nav>
  );
};

export default Navbar;
