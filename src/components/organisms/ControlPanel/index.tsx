import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const ControlPanel = () => {
  const router = useRouter();
  const user = useUser();
  const items = [
    { link: "/dashboard", name: "Pre-qualification" },
    { link: "#", name: "Track your progress" },
    { link: "#", name: "Your recomendations" },
    { link: "#", name: "Educational Resources" },
  ];
  return (
    <div className="flex h-screen flex-col items-center border-r-[2px] border-slate-300 bg-white px-6 py-10 md:w-[300px]">
      {/* <Image src="/logo.png" height={50} width={50} alt="logo" /> */}
      {!user.isLoaded ? (
        <Image src="/logo.png" height={35} width={35} alt="logo" />
      ) : (
        <UserButton afterSignOutUrl="/signin" />
      )}

      <h3 className="pt-8 text-center text-[18px] font-semibold">
        Welcome to EasyKnock
        <br />
        {user?.user?.primaryEmailAddress?.emailAddress || ""}
      </h3>
      <hr className="mb-8 mt-6 w-full bg-slate-600" />
      <div className="flex flex-col space-y-2">
        {items.map((item) => {
          const isActive = item.link === router.asPath;
          return (
            <Link
              href={item.link}
              className={`flex w-full items-center rounded-lg px-2 py-4 font-semibold ${
                isActive ? "bg-cyan-50" : ""
              }`}
            >
              <div
                className={`mr-4 h-8 w-8 rounded-full ${
                  isActive ? "bg-cyan-100" : "bg-zinc-100"
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
