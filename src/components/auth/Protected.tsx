import React from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export const Protected: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { status } = useSession();
  if (status === "unauthenticated") signIn("google");
  if (status === "authenticated") return <>{children}</>;

  return null;
};
