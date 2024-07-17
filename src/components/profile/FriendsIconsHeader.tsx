import Image from "next/image";
import React from "react";

const FriendsIconsHeader = () => {
  return (
    <div className="flex ">
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user1.jfif"}
      />
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user2.jfif"}
      />
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user3.jfif"}
      />
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user4.jfif"}
      />
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user5.jfif"}
      />
      <Image
        alt="User Profile Pic"
        width={70}
        height={70}
        className="rounded-full object-cover h-7 w-7 border -ml-1"
        src={"/fake-users/user6.jfif"}
      />
    </div>
  );
};

export default FriendsIconsHeader;
