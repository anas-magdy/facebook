import Image from "next/image";
import React from "react";

interface UserProfilePicProps {
  link?: string;
}

const UserProfilePic: React.FC<UserProfilePicProps> = ({ link }) => {
  return (
    <Image
      alt="User Profile Pic"
      width={70}
      height={70}
      className="rounded-full object-cover h-10 w-10"
      src={link ?? "/user-avatar-placeholder.jpg"}
    />
  );
};

export default UserProfilePic;
