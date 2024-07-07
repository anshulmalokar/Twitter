"use client";
import { useCurrentUser } from "@/hooks/user";
import { IoArrowBackSharp } from "react-icons/io5";
import Image from "next/image";
import React, { use } from "react";
import FeedCard from "@/Components/FeedCard";

type Props = {};

export default function page({}: Props) {
  const { user } = useCurrentUser();
  return (
    <div>
      <nav className="grid grid-cols-12 m-2">
        <div className="col-span-1">
          <IoArrowBackSharp size={20} />
        </div>
        <div className="col-span-11 flex flex-col">
          <h2>
            {user?.firstName} {user?.lastName}
          </h2>
          <h1>100 Tweets</h1>
        </div>
      </nav>
      <div className="p-4">
        {user && (
          <>
            <Image
              src={user.profileImageUrl || ""}
              alt="user-image"
              height={100}
              width={100}
              className="rounded-full"
            />
            <h2>
              {user?.firstName} {user?.lastName}
            </h2>
          </>
        )}
      </div>
      <div className="border-b border-b-slate-900">
        {
          user?.tweets?.map(tweet => <><FeedCard key={tweet?.id} tweet={tweet}/></>)
        }
      </div>
    </div>
  );
}
