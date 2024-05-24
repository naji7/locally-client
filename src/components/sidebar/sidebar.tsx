"use client";

import { useUser } from "@/providers/UserProvider";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SideBar({ show, setter }: any) {
  const router = useRouter();
  const { user }: any = useUser();
  const [showDropdown, setShowDropdown] = useState(true);
  const pathname = usePathname();

  const isActive = (path: any) => {
    return pathname === path;
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const ModalOverlay = () => (
    <div
      className={`flex xl:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-[98]`}
      onClick={() => {
        setter();
      }}
    />
  );

  const className =
    "flex flex-col py-7 w-[15.5rem] bg-black h-[100vh] items-center  fixed overflow-x-visible overflow-y-scroll z-[99]  transition-[margin-left] ease-in-out duration-500 ";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " -ml-[15.5rem] xl:ml-0";

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="flex flex-col gap-[3rem] items-center w-full">
          <div className="flex items-center justify-center flex-col gap-1.5">
            <div className="flex flex-col p-3 border border-white/[0.11] rounded-full w-[6.75rem] h-[6.75rem] bg-transparent">
              <div className="border border-white/[0.11] rounded-full w-full h-full p-3">
                <div className="relative w-full h-full rounded-full border border-white/[0.11]">
                  <Image
                    src={"/assets/images/sidebar/dashboard-profile.png"}
                    alt="profile"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover absolute inset-0 rounded-full"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-sm leading-6 font-semibold text-white capitalize">
              {user && user?.fullName}
            </h3>
          </div>
          <div className="w-full">
            <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
              <Link href={"/dashboard"}>
                <li
                  className={`navlist ${
                    isActive("/dashboard") ? "navActive" : ""
                  }`}
                >
                  <Image
                    src={"/assets/icons/sidebar/home.svg"}
                    alt="navlink"
                    width={200}
                    height={200}
                    className="w-[1.5rem] h-[1.5rem] object-cover"
                  />
                  <span className="navtext">Home</span>
                </li>
              </Link>
            </ul>
            <hr className="w-10/12 border-[#3A3A3A] my-[2.5rem] mx-auto" />
            <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
              <Link href={"/store"}>
                <li
                  className={`navlist ${isActive("/store") ? "navActive" : ""}`}
                >
                  <Image
                    src={"/assets/icons/sidebar/affliate.svg"}
                    alt="navlink"
                    width={200}
                    height={200}
                    className="w-[1.5rem] h-[1.5rem] object-cover"
                  />
                  <span className="navtext">Store</span>
                </li>
              </Link>
              <Link href={"/profile"}>
                <li
                  className={`navlist ${
                    isActive("/profile") ? "navActive" : ""
                  }`}
                >
                  <Image
                    src={"/assets/icons/sidebar/business.svg"}
                    alt="navlink"
                    width={200}
                    height={200}
                    className="w-[1.5rem] h-[1.5rem] object-cover"
                  />
                  <span className="navtext">Profile</span>
                </li>
              </Link>
            </ul>

            <hr className="w-10/12 border-[#3A3A3A] my-[2.5rem] mx-auto" />
            <ul
              className="flex flex-col gap-[1.5rem] w-full px-[1.8rem] cursor-pointer"
              onClick={async () => {
                localStorage.clear();
                router.push("/");
              }}
            >
              <li className={`navlist ${isActive("") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/signout.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">sign out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
