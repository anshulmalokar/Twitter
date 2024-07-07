"use client"
import React from "react";
import Image from "next/image";
import { sideBarMenuItems } from "@/utils/SideBarComponents";
import { SlSocialTwitter } from "react-icons/sl";
import GoogleLoginComponent from "@/Components/GoogleLoginComponent";
import { useCurrentUser } from "@/hooks/user";

type Props = {
  children: React.ReactNode;
};

export default function TwitterLayout({ children }: Props) {
  const { user } = useCurrentUser();
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen overflow-x-hidden">
        {/* Left container */}
        <div className="col-span-3 h-full">
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 fixed top-0 ml-12">
              <div className="mt-5 hover:cursor-pointer">
                <SlSocialTwitter size={30} />
              </div>
              {sideBarMenuItems.map((ele) => {
                return (
                  <>
                    <div key={ele?.title.toString()} className="text-white">
                      <div className="flex justify-start items-center text-2xl hover:cursor-pointer">
                        <span>{ele.icon}</span>
                        <span className="ml-4">{ele.title}</span>
                      </div>
                    </div>
                  </>
                );
              })}
              <button className="p-5 bg-blue-700 rounded-full">Post</button>
              {user && (
                <>
                  <div className="flex sticky bottom-0 justify-start items-center">
                    <Image
                      className="rounded-full"
                      src={user.profileImageUrl || ""}
                      alt="image-user"
                      height={50}
                      width={50}
                    />
                    <div className="items-start ml-4 flex flex-col text-md">
                      <div>
                        <span>
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Middle Container */}
        <div className="col-span-6 border-r-[0.2px] border-r-slate-700 border-l-[0.2px] border-l-slate-700">
          {children}
        </div>
        {/* Right Container */}
        {!user && (
          <div className="col-span-3 ">
            <div className=" m-6 p-7 bg-slate-700 rounded-2xl sticky top-6">
              <h1>Are you new to twitter?</h1>
              <GoogleLoginComponent />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
