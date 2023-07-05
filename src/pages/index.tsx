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

const Dashboard: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.userProfile.get.useQuery();

  const adrString = `${data?.streetAddressLine1 || "street"}, ${
    data?.city || "city"
  }, ${data?.state || "state"}, ${data?.zipCode || "zip"}`;

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-50 lg:flex-row">
      <div className="absolute right-4 top-4 flex lg:hidden">
        <UserIcon />
      </div>
      <ControlPanel first={data?.firstName} last={data?.lastName} />
      <div className="w-fill flex grow flex-col p-12">
        <div className="flex w-full flex-col justify-between lg:flex-row">
          <div className="flex w-full flex-col space-y-8 lg:w-1/2">
            <h3 className="text-2xl font-semibold text-emerald-500">
              CONGRATULATIONS
            </h3>
            <h2 className=" text-6xl">You&apos;ve Prequalified</h2>
            <h2 className="text-lg md:ml-2 md:text-4xl">
              {data?.firstName ? (
                `${data?.firstName} ${data?.lastName}`
              ) : (
                <Skeleton />
              )}
            </h2>
            <p className="text-lg leading-loose text-gray-600 md:ml-2">
              Pre-qualifying means that your home information you provided
              aligns with EasyKnock Requirements
            </p>
          </div>
          <Card className="mt-2 h-fit w-[100%] md:mt-0 lg:mt-0 lg:w-fit xl:min-w-[350px]">
            <p className="mb-4 text-xs font-bold text-gray-500">UPCOMING</p>
            <div className="flex items-center">
              <Image
                src="/calendar.svg"
                height={50}
                width={50}
                alt="calendar-icon"
              />
              <div className="ml-4 flex flex-col space-y-2">
                <p className="text-sm font-bold text-gray-700">
                  Onboarding call
                </p>
                <p className="text-sm text-gray-700">
                  Today, within the next 24 hours
                </p>
                <Link
                  href="#"
                  className="text-sm font-semibold text-emerald-700 underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div className="my-12 h-[2px] w-full bg-gray-200" />

        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Card className="space-y-2 p-0 lg:w-1/2">
              <div className="px-4 pt-4">
                <span className="text-sm font-semibold uppercase text-slate-600">
                  street address{" "}
                </span>
                <h3 className="text-lg font-bold">
                  {data?.streetAddressLine1 ? adrString : <Skeleton />}
                </h3>
              </div>
              <div className="h-[1px] w-full bg-slate-300" />
              <div className="flex items-center px-4 pb-4">
                <img
                  src="/logo.png"
                  className="mr-2 h-[30px] min-w-[30px]"
                  alt={""}
                />
                <p className="flex-grow">
                  This address helps us determine if your financials are right
                  for our product
                </p>
              </div>
            </Card>
            <Card className="space-y-2 p-0 lg:w-1/2">
              <div className="px-4 pt-4">
                <span className="text-sm font-semibold uppercase text-slate-600">
                  home type
                </span>
                <h3 className="text-lg font-bold capitalize">
                  {data?.propertyType ? data?.propertyType : <Skeleton />}
                </h3>
              </div>
              <div className="h-[1px] w-full bg-slate-300" />
              <div className="flex items-center px-4 pb-4">
                <img
                  src="/logo.png"
                  className="mr-2 h-[30px] min-w-[30px]"
                  alt={""}
                />
                <p className="flex-grow">
                  This address helps us determine if your financials are right
                  for our product
                </p>
              </div>
            </Card>
          </div>
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Card className="space-y-2 p-0 lg:w-1/2">
              <div className="px-4 pt-4">
                <span className="text-sm font-semibold uppercase text-slate-600">
                  estimate home value
                </span>
                <h3 className="text-lg font-bold">
                  {data?.estimatedHomeValue ? (
                    `$ ${addCommas(data?.estimatedHomeValue)}`
                  ) : (
                    <Skeleton />
                  )}
                </h3>
              </div>
              <div className="h-[1px] w-full bg-slate-300" />
              <div className="flex items-center px-4 pb-4">
                <img
                  src="/logo.png"
                  className="mr-2 h-[30px] min-w-[30px]"
                  alt={""}
                />
                <p className="flex-grow">
                  This address helps us determine if your financials are right
                  for our product
                </p>
              </div>
            </Card>
            <Card className="space-y-2 p-0 lg:w-1/2">
              <div className="px-4 pt-4">
                <span className="text-sm font-semibold uppercase text-slate-600">
                  mortgage balance{" "}
                </span>
                <h3 className="text-lg font-bold">
                  {data?.mortgageBalance ? (
                    `$ ${addCommas(data?.mortgageBalance)}`
                  ) : (
                    <Skeleton />
                  )}
                </h3>
              </div>
              <div className="h-[1px] w-full bg-slate-300" />
              <div className="flex items-center px-4 pb-4">
                <img
                  src="/logo.png"
                  className="mr-2 h-[30px] min-w-[30px]"
                  alt={""}
                />
                <p className="flex-grow">
                  This address helps us determine if your financials are right
                  for our product
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
