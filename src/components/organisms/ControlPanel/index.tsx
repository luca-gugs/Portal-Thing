import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const ControlPanel = () => {
  const router = useRouter();
  const user = useUser();

  const items = [
    { link: "/", name: "Pre-qualification" },
    { link: "/progress", name: "Track your progress" },
    { link: "/recs", name: "Your recomendations" },
    { link: "/edu", name: "Educational Resources" },
  ];
  return (
    <div className="hidden h-screen flex-col items-center border-r-[2px] border-slate-300 bg-white px-6 py-10 lg:flex lg:w-[300px] lg:min-w-[300px]">
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

      <h3 className="pt-8 text-center text-[18px] font-semibold">
        Welcome to EasyKnock
        <br />
        {user?.user?.primaryEmailAddress?.emailAddress}
      </h3>
      <hr className="mb-8 mt-6 w-full bg-slate-600" />
      <div className="flex flex-col space-y-2">
        {items.map((item) => {
          const isActive = item.link === router.pathname;
          return (
            <Link
              key={item.link}
              href={item.link}
              className={`flex w-full items-center rounded-lg px-2 py-4 font-semibold ${
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
