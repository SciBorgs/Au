import { signIn, useSession } from "next-auth/react";
import { Logo } from "./ui/Logo";

export const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl">
      <Logo className="font-semibold text-7xl" />
      <h2 className="mt-4 mb-8 text-3xl">The Sciborgs Scouting App</h2>
      <button
        className="px-6 py-3 text-xl text-black duration-150 bg-yellow-500 rounded-lg hover:bg-yellow-600"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
};
