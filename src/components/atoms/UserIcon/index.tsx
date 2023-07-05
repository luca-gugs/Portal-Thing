import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

const UserIcon = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" height={50} width={50} alt="logo" />
      <UserButton
        appearance={{
          elements: {
            rootBox: "absolute",
            avatarBox: "h-[50px] w-[50px] bg-transparent",
            userButtonAvatarImage: "opacity-0",
          },
        }}
        afterSignOutUrl="/signin"
      />
    </div>
  );
};

export default UserIcon;
