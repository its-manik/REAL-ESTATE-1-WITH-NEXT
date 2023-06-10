import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { MdStarRate } from "react-icons/md";

export default function FeaturdBox() {
  return (
    <div className="featured_box  bg-white rounded-md transition ease-linear delay-150">
              <div className="img-area w-[100%] h-auto p-2">
                <div className="img relative overflow-hidden rounded-md">
                  <Image
                    className="w-[100%] object-fill  bg-no-repeat rounded-md"
                    src="/1.jpg"
                    width={200}
                    height={100}
                    alt="Picture of the author"
                  />
                  <div className="overley absolute left-0 top-0 w-[100%] bg-[#1d293e] h-[100%] opacity-40"></div>
                  <Link className="bg-none absolute top-5 left-5 bg-[#3E4C66] text-white rounded-lg py-1 px-2 text-sm font-semibold" href={"/"}>Featured</Link>
                  <span className="absolute bottom-6 left-8 bg-balck font-bold text-white text-lg sm:text-sm md:text-md lg:text-xl">
                    $17000<sub>/mon</sub>
                  </span>
                </div>
              </div>
              <div className="featured_content py-2 px-5">
                <div className="ratings flex pb-2">
                  <MdStarRate size={25} fill="orange"/>
                  <MdStarRate size={25} fill="orange"/>
                  <MdStarRate size={25} fill="orange"/>
                  <MdStarRate size={25} fill="orange"/>
                  <MdStarRate size={25} fill="orange"/>
                </div>
                <h3 className="text-xl sm:text-md md:text-lg lg:text-xl font-semibold mb-1 ">Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet, consectetu</h3>
                <p className="sm:text-md text-md lg:text-md text-[#8C778C] py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  ab voluptates obcaecati quidem!
                </p>
              </div>
                <Link href={"#"} className=" learn_more w-[100%] block text-center py-3" >Learn more</Link>
            </div>
  )
}
