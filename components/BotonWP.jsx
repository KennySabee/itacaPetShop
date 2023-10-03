import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const BotonWP = () => {
  return (
    <div >
      <Link href={"https://www.youtube.com"} target="_blank" className="fixed z-50">
        <div className="rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-700  shadow-red-400 p-6 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
          <BsWhatsapp size={28} />
        </div>
      </Link>
    </div>
  );
};

export default BotonWP;
