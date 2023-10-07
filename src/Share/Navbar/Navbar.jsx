import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <nav className="flex justify-between p-4 lg:p-10 bg-slate-200">
      <div>
        <h2 className="hover:bg-slate-100 p-1 rounded">Logo</h2>
      </div>
      <div className="space-x-5 flex flex-col lg:flex-row">
        <Link className="hover:bg-slate-100 p-1 rounded" to="/">
          Home
        </Link>
        <Link className="hover:bg-slate-100 p-1 rounded" to="/allJewelry">
          All Jewelry
        </Link>
        <Link className="hover:bg-slate-100 p-1 rounded" to="/myJewelry">
          My Jewelry
        </Link>
        <Link className="hover:bg-slate-100 p-1 rounded" to="/addJewelry">
          Add Jewelry
        </Link>
        <Link className="hover:bg-slate-100 p-1 rounded" to="/blogs">
          Blogs
        </Link>
        <Link className="hover:bg-slate-100 p-1 rounded" to="/login">
          Login
        </Link>
        {user && (
          <Link className="hover:bg-slate-100 p-1 rounded">Profile</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
