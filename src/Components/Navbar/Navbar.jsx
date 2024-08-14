import React from "react";
import { IoSearch } from "react-icons/io5";
import navbar_logo from "../../assets/navbar-logo.png"
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-between flex-col sm:flex-row items-center text-sm mx-5 md:mx-8 mt-5">
      <p className="me-auto md:hidden text-white">
        <img src={navbar_logo} alt="" />
      </p>
      <ul className=" hidden md:block text-white ">
        <li className="inline me-3 lg:me-4 font-semibold">Music</li>
        <li className="inline mx-3 lg:mx-4">Podcast</li>
        <li className="inline mx-3 lg:mx-4">Live</li>
        <li className="inline mx-3 lg:mx-4">Radio</li>
      </ul>
      <form
        // onSubmit={handleSearch}
        className="rounded-3xl bg-[#2c0000] flex justify-between w-full sm:w-auto my-4 sm:my-0 px-4 py-2"
      >
        <input
          type="text"
          //   value={query}
          //   onChange={handleChange}
          className="bg-transparent border-0 outline-none w-[200px] xl:w-[300px] text-white placeholder:text-white"
          placeholder="Search track , artist, album"
        />
        <button type="submit" className="inline-block text-lg text-white">
        <RiSearchLine />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
