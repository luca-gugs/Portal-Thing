import { SignUp } from "@clerk/nextjs";
import Nav from "~/components/organisms/Nav";

export default function Page() {
  return (
    <main className="flex h-screen min-h-[600px] w-full items-center justify-center pt-[80px]">
      <Nav />
      <SignUp redirectUrl="/dashboard" />
    </main>
  );
}
