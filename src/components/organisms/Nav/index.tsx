import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-[100] w-full bg-white shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="ml-16 text-[2.5rem] font-bold text-gray-800 md:ml-16 lg:ml-0"
            >
              portalthing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
