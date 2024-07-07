import React from "react";
import Image from "next/image";
import { TiMessage } from "react-icons/ti";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";

type Props = {
  tweet: {
    __typename?: "Tweet";
    id: string;
    content: string;
    imageURL?: string | null;
    author?: {
        __typename?: "User";
        firstName: string;
        lastName?: string | null;
        profileImageUrl?: string | null;
        email?: string | null;
    } | null;
} | null
};

export default function FeedCard({tweet}: Props) {
  return (
    <div className="w-full h-fit grid grid-cols-12 border-t-2 border-t-slate-600 mt-1 ml-1">
      {/* First Container */}
      <div className="col-span-1 mt-1">
        {/* Bring Avatar here */}
        {tweet?.author?.profileImageUrl && <Image
          className="rounded-full"
          src= {tweet?.author?.profileImageUrl}
          alt="image-user"
          height={50}
          width={50}
        />}
      </div>
      {/* Second Container */}
      <div className="col-span-11">
        {/* Name and id */}
        <div className="flex">
          <span>{tweet?.author?.firstName} {tweet?.author?.lastName}</span>
          <span className="ml-2 text-slate-500">{tweet?.author?.email}</span>
        </div>
        {/* Post Data */}
        <div>
          <p>
            {tweet?.content}
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
