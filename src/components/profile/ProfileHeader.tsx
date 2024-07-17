import Image from "next/image";
import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FriendsIconsHeader from "./FriendsIconsHeader";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
const ProfileHeader = () => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={500}
        className="w-full md:h-[500px] object-cover rounded-b-md"
        alt="cover pic"
        src="/cover-pic.jpg"
      />
      <div className="flex justify-between mx-3">
        <div className="flex gap-4 ">
          <div className="relative -mt-20 border-2 rounded-full">
            <Image
              src={"/profile-pic.jpg"}
              alt="pp"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
            <button className="bg-gray-500 hover:bg-gray-400 duration-150  absolute right-2 bottom-5 p-2 rounded-full">
              <CameraAltOutlinedIcon className="text-2xl" />
            </button>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Abdelrahman mostafa</h1>
            <p className=" text-sm text-gray-400">Friends 881</p>
            <FriendsIconsHeader />
          </div>
        </div>
        <div className="flex items-end pb-5 justify-end gap-3">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 duration-150 rounded-lg flex justify-center items-center gap-1">
            <AddIcon />
            Add to story
          </button>
          <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 duration-150 rounded-lg flex justify-center items-center gap-1">
            <EditIcon />
            Edit profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
