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
import DocStatusCard from "~/components/organisms/DocStatusCard";

const Dashboard: NextPage = () => {
  const user = useUser();

  const { data, isLoading } = api.userProfile.get.useQuery();

  console.log("DATA: ", data);
  const {
    data: userDoc,
    error,
    isLoading: docLoading,
  } = api.docs.getByUser.useQuery({
    email: data?.email as string,
  });
  console.log("test: ", userDoc);
  //   const adrString = `${data?.streetAddressLine1 || "street"}, ${
  //     data?.city || "city"
  //   }, ${data?.state || "state"}, ${data?.zipCode || "zip"}`;

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-50 lg:flex-row">
      <div className="absolute right-4 top-4 flex lg:hidden">
        <UserIcon />
      </div>
      <ControlPanel first={data?.firstName} last={data?.lastName} />
      <div className="w-fill flex h-screen grow flex-col justify-center overflow-scroll p-12">
        {userDoc && <DocStatusCard userDoc={userDoc} />}
      </div>
    </main>
  );
};

export default Dashboard;
