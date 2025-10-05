import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-400 h-10 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-white"> 🏢 EM Service</h1>
      <div className="space-x-4 ml-auto">
        <a className="hover:text-blue-700" href='/'>Home</a>
        <a className="hover:text-blue-700" href='/'>Profile</a>
        <a className="hover:text-blue-700" href='/'>Log Out</a>
      </div>
    </div>
  );
};

export default Navbar;