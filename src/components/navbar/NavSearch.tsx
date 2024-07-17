"use client";

import { useState } from "react";

const NavSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=" rounded-full md:w-[300px] px-4 py-2.5 bg-[#2d2e30] focus:outline-none"
        placeholder="Search Facebook"
      />
    </form>
  );
};

export default NavSearch;
