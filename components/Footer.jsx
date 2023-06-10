import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
Link;
export default function Footer() {
  return (
    <footer className="bg-[#24324A] text-[#8a99b3]">
      <div className="container w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col items-center m-auto">
        <div className="top_footer py-10 w-[100%] flex justify-between flex-wrap gap-6 md:gap-8">
          <div className="contact flex flex-col gap-2">
            <h2 className=" text-2xl font-semibold mb-2 text-white">Contact Us</h2>
            <p>267 West Ave, Die Hoewes, Centurion, 0157, South Africa</p>
            <p className=" flex gap-2 items-center">
              <MdPhone /> <span>+27 (0)12 942 1000</span>
            </p>
            <p className=" flex gap-2 items-center">
              <MdEmail /> <span>hello@holidaycorp.co.za</span>
            </p>
            <div className="cards flex gap-2">
              <Image
                src="/MasterCard.png"
                width={70}
                height={70}
                alt="card image"
              />
              <Image
                src="/MasterCard.png"
                width={70}
                height={70}
                alt="card image"
              />
            </div>
          </div>
          <div className="about_us flex flex-col gap-1">
            <h2 className=" text-2xl font-semibold mb-2 text-white">About Us</h2>
            <Link href={"/agents"}>Our Agents</Link>
            <Link href={"/partners"}>Our Partners</Link>
            <Link href={"/live-experience"}>Live Experience</Link>
            <Link href={"/visa-free"}>Where to travel visa free</Link>
          </div>
          <div className="infos flex flex-col gap-1">
            <h2 className="text-white text-2xl font-semibold mb-2">Informations</h2>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/terms"}>Terms & Conditions</Link>
            <Link href={"/policy"}>Privacy Policy</Link>
            <Link href={"/contact"}>Cotanct Us</Link>
            <Link href={"/travel-with-kids"}>Traveling with kids</Link>
            <Link href={"/news"}>Important News</Link>
          </div>
          <div className="social flex flex-col gap-3">
            <h2 className="text-2xl font-semibold mb-2 text-white">Follow Us</h2>
            <Link
              href={"https://facebook.com"}
              className="fb flex gap-2 items-center"
            >
              <BsFacebook /> <span>Facebook</span>
            </Link>
            <Link
              href={"https://facebook.com"}
              className="fb flex gap-2 items-center"
            >
              <BsTwitter /> <span>Twitter</span>
            </Link>
            <Link
              href={"https://facebook.com"}
              className="fb flex gap-1 items-center"
            >
              <AiOutlineInstagram /> <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bottom_footer w-[100%] text-center
      py-6"
      >
        © 2023 by Holydaycorp. All rights reserved.
      </div>
    </footer>
  );
}
