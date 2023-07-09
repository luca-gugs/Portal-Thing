import { type NextPage } from "next";
import { Card } from "~/components/atoms/Card";
import { ControlPanel } from "~/components/organisms/ControlPanel";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import UserIcon from "~/components/atoms/UserIcon";
import { api } from "~/utils/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addCommas } from "~/utils/helpers";
import { useEffect } from "react";
import SideNav from "~/components/organisms/ChatPanel";
import { ChatProvider } from "~/contexts/chatContext";
import ChatPanel from "~/components/organisms/ChatPanel";

const Chat: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.userProfile.get.useQuery();

  const { data: usersData, isLoading: usersLoading } =
    api.userProfile.getAll.useQuery();

  (" ");

  return (
    <ChatProvider>
      <main className="relative flex min-h-screen flex-col bg-zinc-50 lg:flex-row">
        <div className="absolute right-4 top-4 flex lg:hidden">
          <UserIcon />
        </div>
        <ControlPanel first={data?.firstName} last={data?.lastName} />
        <ChatPanel />
        <div className="w-fill flex h-screen grow flex-col-reverse space-y-4 overflow-scroll p-12">
          <input
            type="text"
            className="mt-4 rounded-md bg-gray-100 p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Example chat I send */}
          <div className="flex w-full flex-row-reverse">
            <div className="max imessage mb-4 w-fit min-w-[300px] rounded-lg p-4">
              <div className="mb-2 flex justify-between">
                <div className="font-bold text-white">sender</div>
                <div className="text-sm text-white">timestamp</div>
              </div>
              <div className="text-white">Lets Party</div>
            </div>
          </div>

          {/* Example chat I receive */}
          <div className="flex w-full flex-row">
            <div className="max mb-4 w-fit min-w-[300px] rounded-lg bg-stone-200 p-4 text-black">
              <div className="mb-2 flex justify-between">
                <div className="font-bold">sender</div>
                <div className="text-sm">timestamp</div>
              </div>
              <div className="">Lets Party</div>
            </div>
          </div>
        </div>
      </main>
    </ChatProvider>
  );
};

export default Chat;
