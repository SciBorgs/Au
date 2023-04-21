import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center text-xl text-red-400">
      <h1>BOO</h1>
    </div>
  );
};

export default Home;

