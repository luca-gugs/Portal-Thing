import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { Comme } from "next/font/google";

const comme = Comme({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>EasyPortal</title>
        <meta
          name="description"
          content="Gideon: a new way to handle requests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className={comme.className}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
