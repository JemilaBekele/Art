import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";

const Navbar = () => {
 

  return (
    <header className="full-width content-grid">
      <nav className="flex items-center justify-between border-b border-shade-800">
        <h1 className="relative text-2xl font-bold">
          {/* BLOB */}
          {/* <span className='w-12 aspect-video absolute -z-20 left-20 blur-3xl bg-primary-500 rounded-full'></span> */}

          <NavLink to={`/`}>Art Gallery </NavLink>
        </h1>

       
      </nav>
    </header>
  );
};

export default Navbar;
