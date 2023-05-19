import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { SignIn } from "~/components/SignIn";
import { Logo } from "~/components/ui/Logo";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <div className="min-h-screen">
      {status === "unauthenticated" ? (
        <div className="flex flex-col items-center justify-center text-xl">
          <SignIn />
        </div>
      ) : (
        <div className="p-10">
          <div className="mb-4">
            <Logo className="mb-2 text-5xl font-semibold" />
            <h1 className="text-2xl">Welcome back!</h1>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Home;
