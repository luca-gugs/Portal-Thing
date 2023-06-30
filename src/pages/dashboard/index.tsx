import { type NextPage } from "next";
import { Card } from "~/components/atoms/Card";
import { ControlPanel } from "~/components/organisms/ControlPanel";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Dashboard: NextPage = () => {
  const user = useUser();

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-50 lg:flex-row">
      <ControlPanel />
      <div className="w-fill flex grow flex-col p-12">
        <div className="flex w-full flex-col justify-between lg:flex-row">
          <div className="flex w-full flex-col space-y-8 lg:w-1/2">
            <h3 className="text-2xl font-semibold text-emerald-500">
              CONGRATULATIONS
            </h3>
            <h2 className=" text-6xl">You&apos;ve Prequalified</h2>
            <h2 className="ml-2 text-4xl">
              {user?.user?.primaryEmailAddress?.emailAddress}
            </h2>
            <p className="ml-2 text-lg leading-loose text-gray-600">
              Pre-qualifying means that your home information you provided
              aligns with EasyKnockRequirements
            </p>
          </div>
          <Card className="h-fit min-w-[350px] lg:mt-0">
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
            <Card className="lg:w-1/2">a</Card>
            <Card className="lg:w-1/2">b</Card>
          </div>
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Card className="lg:w-1/2">c</Card>
            <Card className="lg:w-1/2">d</Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
