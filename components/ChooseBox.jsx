import React from "react";
import { MdOutlineAddHomeWork } from "react-icons/md";
export default function () {
  return (
    <div className="choose_box py-14 px-10 bg-white text-center rounded-lg hover:shadow-2xl transition-all delay-150">
      <div className="icon_box m-auto bg-[#FF5A5F] rounded-full w-32 h-32 grid place-items-center">
        <MdOutlineAddHomeWork className="p-3" fill="#FF5A5F" size={100} />
      </div>
      <h3 className="text-xl mt-12 mb-1 font-bold">Trusted By Thousands</h3>
      <p className="text-[#8C778C]">
        Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim
        donec vel lectus vel felis.
      </p>
    </div>
  );
}
