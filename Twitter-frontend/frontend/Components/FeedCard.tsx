import React from "react";
import Image from "next/image";
import { TiMessage } from "react-icons/ti";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";
type Props = {};

export default function FeedCard({}: Props) {
  return (
    <div className="w-full h-fit grid grid-cols-12 border-t-2 border-t-slate-600 mt-1 ml-1">
      {/* First Container */}
      <div className="col-span-1 mt-1">
        {/* Bring Avatar here */}
        <Image
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/78919378?v=4"
          alt="image-user"
          height={50}
          width={50}
        />
      </div>
      {/* Second Container */}
      <div className="col-span-11">
        {/* Name and id */}
        <div className="flex">
          <span>Anshul Malokar</span>{" "}
          <span className="ml-2 text-slate-500">anshulmalokar@gmail.com</span>
        </div>
        {/* Post Data */}
        <div>
          <p>
            Fanbase (in India, Pakistan, Bangladesh) are destroying Gentleman's
            Game 🤐 Now, in T20 World Cup 2024, Umpires will be dragged on
            Social Media, some will favour us and many with abuse us😶
          </p>
        </div>
        <div className="flex pr-10 justify-between mt-5 text-xl items-center w-[90%]">
          <div>
            <TiMessage />
          </div>
          <div>
            <LiaRetweetSolid />
          </div>
          <div>
            <CiHeart />
          </div>
          <div>
            <LuUpload />
          </div>
        </div>
      </div>
    </div>
  );
}
