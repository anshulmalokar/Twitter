import React, { useCallback } from "react";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/user";
import { CiImageOn } from "react-icons/ci";

type Props = {};

export default function InputCard({}: Props) {
  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const { user } = useCurrentUser();
  return (
    <div className="grid grid-cols-12 m-1">
      <div className="col-span-1 mt-2">
        <Image
          className="rounded-full"
          src={user?.profileImageUrl || ""}
          alt="image-user"
          height={50}
          width={50}
        />
      </div>
      <div className="col-span-11 mt-2">
        <div className="flex flex-col">
          <textarea
            className="bg-transparent overflow-y-hidden"
            name=""
            id=""
            rows={4}
            placeholder="What's Happening"
          ></textarea>
          <div className="border-b-2 border-b-slate-900"></div>
          <div className="flex justify-between items-center">
            <CiImageOn
              className="hover:cursor-pointer"
              size={30}
              onClick={handleSelectImage}
            />
            <button className="p-3 rounded-full bg-blue-600">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}