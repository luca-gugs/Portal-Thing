import { SignUp } from "@clerk/nextjs";
import Nav from "~/components/organisms/Nav";

export default function Page() {
  return (
    <main className="flex h-screen min-h-[600px] w-full justify-center pt-[120px] md:items-center md:pt-[80px]">
      <Nav />
      <SignUp
        redirectUrl="enrich"
        afterSignUpUrl="enrich"
        afterSignInUrl="enrich"
      />
    </main>
  );
}
