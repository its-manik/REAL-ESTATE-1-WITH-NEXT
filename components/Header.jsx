"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./header.css"
import {MdCloseFullscreen, MdKeyboardArrowDown,MdKeyboardArrowRight, MdOutlineClose, MdOutlineMenu} from "react-icons/md"

export default function Header() {

  useEffect(() => {
    fetch("https://services.cullinan.co.za/tspromoapi/get_all?format=json").then((response) => {
      console.log(response);
    })
  }, []);

  const [isActiveM, setIsActiveM] = useState(false)
  return (
    <header className="flex items-center justify-between w-[90%] md:w-[85%] lg:w-[75%] m-auto z-50 py-2">
      <div className="logo">
        <Image
          src="/logo.png"
          width={200}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <nav className="">
        <div className={` ${!isActiveM ? "flex" : "hidden"} md:flex flex-col md:gap-10 gap-4 md:flex-row w-[300px] h-screen md:w-auto md:h-auto absolute md:static top-0 right-0 bg-white p-5 ${!isActiveM ? "right[-300px]" : ""}`}>
        <Link className="navLink font-semibold text-lg" href={"/about"}>
          About
        </Link>
        <Link className="navLink font-semibold text-lg" href={"/contact"}>
          Contact
        </Link>
        <div className="navDestiny group relative">
          <Link
            className="navLink text-my_primary font-semibold text-lg flex gap-1 items-center"
            href={"/"}
          >
            <span>Destinations</span> <MdKeyboardArrowDown className="" size={25}/>
          </Link>
          <ul className="navSub absolute bg-white shadow-lg w-[250px] right-0 p-4 rounded-md hidden group-hover:flex flex-col z-50">
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
            <li><Link href={"/"} className="text-lg">link 1</Link> <MdKeyboardArrowRight size={20}/></li>
        
          </ul>
        </div>
        <MdOutlineClose onClick={() => setIsActiveM(!isActiveM)}  className={`absolute top-6 right-2 cursor-pointer w-20 flex md:hidden ${isActiveM & "hidden"}`} size={35}/>
        </div>
      </nav>
      <MdOutlineMenu onClick={() => setIsActiveM(!isActiveM)} className={`flex cursor-pointer md:hidden ${!isActiveM & "hidden"}`} size={40}/>
      
    </header>
  );
}
