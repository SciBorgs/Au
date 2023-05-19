import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Nav: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex items-center justify-start px-4 py-2 border-b-2 border-zinc-700 bg-zinc-800 ">
      <h1>Warren</h1>
    </div>
  );
}