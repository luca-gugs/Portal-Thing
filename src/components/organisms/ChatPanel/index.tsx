import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fakeUsers } from "~/utils/helpers";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "~/utils/api";
const ChatPanel = ({ isHome = false }) => {
  const user = useUser();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const { data: usersData, isLoading: usersLoading } =
    api.userProfile.getAll.useQuery();
  return (
    <div>
      {/* Side nav */}
      <nav
        className={`fixed left-0 top-0 z-40 h-screen w-[300px] transform border-r-2 bg-white p-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[75px] w-full border-b-2 bg-white p-2">
          <Link className="" href="/">
            Back To Dashboard
          </Link>
        </div>

        {/* Nav content */}
        <ul className="h-[calc(100vh-64px)] overflow-scroll text-slate-800">
          {usersData?.map((elm) => {
            return (
              <>
                <li className="flex w-full cursor-pointer items-center border-b-2 p-6 hover:bg-slate-50">
                  <Image
                    src="/logo.png"
                    alt="userIcon"
                    height={30}
                    width={30}
                    className="mr-2"
                  />
                  <div>
                    <h1>
                      {elm.firstName} {elm.lastName}
                    </h1>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ChatPanel;
