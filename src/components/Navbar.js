import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-white md:sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-b border-gray-200 firefox:bg-opacity-90">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl text-gray-900 ">
            Arjun Dadhwal
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-700 flex flex-wrap items-center text-base justify-center ">
        <Link to="/Blog" className = "p-2 mr-4 inline-flex px-3 py-2 rounded-lg border-white text-gray-700 border rounded-full hover:bg-gray-200 duration-300 transition-colors" >
          Blog
        </Link>
        <Link to="/Blog" className = "p-2 mr-4 inline-flex px-3 py-2 rounded-lg border-white text-gray-700 border rounded-full hover:bg-gray-200 duration-300 transition-colors" >
          Coding Prep
        </Link>
        </nav>
      </div>
    </header>
  );
}

