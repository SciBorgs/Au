import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { BiMenu, BiLogOut } from "react-icons/bi";
import { IoMdBuild } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdNightlight } from "react-icons/md";
import { signOut } from "next-auth/react";

export const Nav: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session && (
        <div className="flex items-center justify-start px-6 py-3 text-xl border-b-2 border-zinc-700 bg-zinc-800 ">
          <h1 className="mr-auto">{session?.user.name}</h1>

          <div className="text-right">
            <Menu as="div" className="relative text-left">
              <div>
                <Menu.Button className="justify-center w-full text-sm font-medium text-white duration-200 rounded-full hover:cursor-pointer hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <Image
                    className="rounded-full"
                    src={session?.user.image as string}
                    alt={`${session?.user.name} profile picture`}
                    width={40}
                    height={40}
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg bg-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-900">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="flex items-center w-full px-2 py-2 text-sm text-black duration-200 rounded-md group hover:bg-black hover:text-white dark:text-white"
                        onClick={() => router.push("/scout")}
                      >
                        {/* git clone https://github.com/SciBorgs/eScout */}
                        <IoMdBuild className="mr-2" /> Match Scout
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="flex items-center w-full px-2 py-2 text-sm text-yellow-500 duration-200 rounded-md group hover:bg-yellow-600 hover:text-white"
                        onClick={() => router.push("/scout/pit")}
                      >
                        <CgNotes className="mr-2" /> Pit Scout
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className="flex items-center w-full px-2 py-2 text-sm text-red-500 duration-200 rounded-md group hover:bg-red-400 hover:text-white"
                      >
                        <BiLogOut className="mr-2 duration-200" /> Log out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      )}
    </>
  );
};
