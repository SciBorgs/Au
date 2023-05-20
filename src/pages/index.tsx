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
        <SignIn />
      ) : (
        <div className="p-10">
          <div className="mb-4">
            <Logo className="mb-2 text-5xl font-semibold" />
            <h1 className="mb-12 text-2xl">Welcome back!</h1>
            <div className="grid grid-cols-2 gap-16">
              <div className="relative text-xl">
                <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 blur " />
                <div className="relative px-6 py-6 text-2xl rounded-2xl bg-zinc-800">
                  Match Scout
                </div>
              </div>
              <div className="relative text-xl">
                <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 blur " />
                <div className="relative px-6 py-6 text-2xl rounded-2xl bg-zinc-800">
                  Pit Scout
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
