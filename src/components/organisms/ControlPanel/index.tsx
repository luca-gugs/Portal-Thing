import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import UserIcon from "~/components/atoms/UserIcon";

export type ControlPanel = {
  first?: string;
  last?: string;
};

export const ControlPanel = ({ first, last }: ControlPanel) => {
  const router = useRouter();

  const items = [
    { link: "/", name: "Pre-Qualify" },
    { link: "/calendar", name: "EasyCal 🚧" },
    { link: "/docs", name: "EasyDoc 🚧" },
    { link: "/progress", name: "Track Process 🔒" },
    { link: "/recs", name: "Recomendations 🔒" },
    { link: "/edu", name: "Home Edu 🔒" },
  ];
  return (
    <div className="hidden h-screen flex-col items-center overflow-scroll border-r-[2px] border-slate-300 bg-white px-6 py-10 lg:flex lg:w-[300px] lg:min-w-[300px]">
      <UserIcon />

      <h3 className="pt-8 text-center text-[18px] font-semibold">
        Welcome to EasyLife
        <br />
        {first && last ? `${first} ${last}` : <Skeleton />}{" "}
      </h3>
      <hr className="mb-8 mt-6 w-full bg-slate-600" />
      <div className="flex flex-col space-y-2">
        {items.map((item) => {
          const isActive = item.link === router.pathname;

          return (
            <Link
              key={item.link}
              href={item.name.includes("🔒") ? "#" : item.link}
              className={`flex w-full items-center rounded-lg px-2 py-4 text-lg font-semibold ${
                isActive ? "bg-emerald-50" : ""
              }`}
            >
              <div
                className={`mr-4 h-8 w-8 rounded-full ${
                  isActive ? "bg-emerald-100" : "bg-zinc-100"
                }`}
              />{" "}
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
