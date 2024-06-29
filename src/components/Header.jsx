import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { ModeToggle } from "./Mode";

const Header = () => {
  return (
    <div className="bg-[rgb(88,16,172)]">
      <div className="px-4 py-3 md:px-12 md:py-3  flex justify-between ">
        <div>
          <h1 className=" font-bold text-white flex items-center md:items-start justify-center md:justify-start text-2xl ">
            Quick-<span className="text-[#d8c2f1]">Beep</span>
            <IoChatbubblesOutline size={35} />
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <RxAvatar size={40} color="white" />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
