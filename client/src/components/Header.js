import React from "react";
import fav from "../images/fav1.png"; // Corrected import path
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="p-5 bg-primary flex justify-between items-center">
      <div className="flex items-center">
        <img src={fav} alt="Favicon" className="w-6 h-6 mr-2" />
        <h1 className="text-fivth text-4xl font font-semibold">
          Deeksha Mandal
        </h1>
      </div>
      <div className="flex text-fivth text-xl font font-semibold gap-8">
        <Link to="/">Home</Link>
        <Link to="/resume">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

        {/* <h1>Logo</h1>
        <h1>Logo</h1> */}
      </div>
    </div>
  );
};
