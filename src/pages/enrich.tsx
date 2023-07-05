import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressDemo from "~/components/atoms/Progress";
import { api } from "~/utils/api";

const Enrich: NextPage = () => {
  const [loadingFinished, setLoadingFinished] = useState<boolean>(false);
  const user = useUser();
  const router = useRouter();
  const { mutate, isLoading: isPosting } = api.userProfile.create.useMutation({
    onSuccess: (x) => {
      console.log("SUCCESS", x);
      setLoadingFinished(true);
    },
    onError: (e) => {
      console.log("ERROR: ", e.message);
    },
  });

  useEffect(() => {
    if (user.isLoaded && user.isSignedIn) {
      console.log("user: ", user);
      mutate();
    }
  }, [user.isLoaded]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center space-y-12 bg-zinc-50">
      <h2 className="text-center text-3xl">
        One moment while we construct a personalized plan{" "}
        <span className="text-6xl">👷</span>
      </h2>
      <ProgressDemo finished={loadingFinished} />
      {/* 
      {user.isLoaded && user.isSignedIn && (
        <button
          className="border-2 border-solid bg-red-200"
          onClick={() => mutate()}
        >
          ENRICH
        </button>
      )} */}
    </main>
  );
};

export default Enrich;
