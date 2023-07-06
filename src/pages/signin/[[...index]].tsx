import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Nav from "~/components/organisms/Nav";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    void router.replace("/signin", undefined, { shallow: true });
  }, []);

  return (
    <main className="flex h-screen min-h-[600px] w-full justify-center pt-[120px] md:items-center md:pt-[80px]">
      <Nav />
      <SignIn
        appearance={{
          elements: {
            rootBox: "max-width: calc(100vw - 5rem)",
          },
        }}
        redirectUrl="/"
      />
    </main>
  );
}
