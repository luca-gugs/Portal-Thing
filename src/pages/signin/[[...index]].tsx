import { SignIn } from "@clerk/nextjs";
import Nav from "~/components/organisms/Nav";

export default function Page() {
  return (
    <main className="flex h-screen min-h-[600px] w-full items-center justify-center pt-[80px]">
      <Nav />
      <SignIn redirectUrl="/dashboard" />
    </main>
  );
}
