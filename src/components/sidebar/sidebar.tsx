"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SideBar() {
  const [showDropdown, setShowDropdown] = useState(true);
  const pathname = usePathname();

  const isActive = (path: any) => {
    return pathname === path;
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="-translate-x-full xl:translate-x-0   flex flex-col py-7 w-[15.5rem] bg-black h-[100vh] items-center  fixed overflow-x-visible overflow-y-scroll z-[99]">
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
          <h3 className="text-sm leading-6 font-semibold text-white">
            Mohammad Reza
          </h3>
        </div>
        <div className="w-full ">
          <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
            <Link href={"/"}>
              <li className={`navlist ${isActive("/") ? "navActive" : ""}`}>
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
            <div className="flex flex-col">
              <button onClick={handleDropdownClick}>
                <li className="navlist">
                  <Image
                    src={"/assets/icons/sidebar/giveaway.svg"}
                    alt="navlink"
                    width={200}
                    height={200}
                    className="w-[1.5rem] h-[1.5rem] object-cover"
                  />
                  <span className="navtext flex items-center w-full justify-between">
                    giveaways
                    {!showDropdown ? (
                      <ChevronDownIcon className="w-4 text-white gap-[1.5rem]" />
                    ) : (
                      <ChevronUpIcon className="w-4 text-white gap-[1.5rem]" />
                    )}
                  </span>
                </li>
              </button>
            </div>
            {showDropdown && (
              <ul
                className={`flex pl-[1.5rem]  pb-[2.25rem]  flex-col gap-[1rem] w-full border-b border-[#3A3A3A]`}
              >
                <Link href={"/giveaway/active"}>
                  <li
                    className={`navlistGiveaway ${isActive("/giveaway/active") ? "navActive" : ""} `}
                  >
                    <Image
                      src={"/assets/icons/sidebar/giveawayActive.svg"}
                      alt="navlink"
                      width={200}
                      height={200}
                      className="w-[1.5rem] h-[1.5rem] object-cover"
                    />
                    <span className="navtext">active</span>
                  </li>
                </Link>
                <Link href={"/giveaway/upcoming"}>
                  <li
                    className={`navlistGiveaway ${isActive("/giveaway/upcoming") ? "navActive" : ""} `}
                  >
                    <Image
                      src={"/assets/icons/sidebar/giveawayUpcoming.svg"}
                      alt="navlink"
                      width={200}
                      height={200}
                      className="w-[1.5rem] h-[1.5rem] object-cover"
                    />
                    <span className="navtext">Upcoming</span>
                  </li>
                </Link>
                <Link href={"/giveaway/past"}>
                  <li
                    className={`navlistGiveaway ${isActive("/giveaway/past") ? "navActive" : ""} `}
                  >
                    <Image
                      src={"/assets/icons/sidebar/giveawayPast.svg"}
                      alt="navlink"
                      width={200}
                      height={200}
                      className="w-[1.5rem] h-[1.5rem] object-cover"
                    />
                    <span className="navtext">Past</span>
                  </li>
                </Link>
              </ul>
            )}

            <Link href={"/subscription"}>
              <li
                className={`navlist ${
                  isActive("/subscription") ? "navActive" : ""
                }`}
              >
                <Image
                  src={"/assets/icons/sidebar/subscription.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">subscription</span>
              </li>
            </Link>
            <Link href={"/entries"}>
              <li className={`navlist ${isActive("/entries") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/entries.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">my entries</span>
              </li>
            </Link>
            <Link href={"/transactions"}>
              <li className={`navlist ${isActive("/transactions") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/transaction.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">transactions</span>
              </li>
            </Link>
          </ul>
          <hr className="w-10/12 border-[#3A3A3A] my-[2.5rem] mx-auto" />
          <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
            <Link href={"/affiliate"}>
              <li className={`navlist ${isActive("/affiliate") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/affliate.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">affiliate</span>
              </li>
            </Link>
            <Link href={"#"}>
              <li className={`navlist ${isActive("") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/promo.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">promo tools</span>
              </li>
            </Link>
            <Link href={"/businessCard"}>
              <li className={`navlist ${isActive("/businessCard") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/business.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">business card</span>
              </li>
            </Link>
          </ul>
          <hr className="w-10/12 border-[#3A3A3A] my-[2.5rem] mx-auto" />
          <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
            <Link href={"/news"}>
              <li className={`navlist ${isActive("/news") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/news.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">news</span>
              </li>
            </Link>
            <Link href={"/chat"}>
              <li className={`navlist ${isActive("/chat") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/chat.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">chat room</span>
              </li>
            </Link>
            <Link href={"#"}>
              <li className={`navlist ${isActive("") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/support.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">support</span>
              </li>
            </Link>
          </ul>
          <hr className="w-10/12 border-[#3A3A3A] my-[2.5rem] mx-auto" />
          <ul className="flex flex-col gap-[1.5rem] w-full px-[1.8rem]">
            <Link href={"/settings"}>
              <li className={`navlist ${isActive("/settings") ? "navActive" : ""}`}>
                <Image
                  src={"/assets/icons/sidebar/setting.svg"}
                  alt="navlink"
                  width={200}
                  height={200}
                  className="w-[1.5rem] h-[1.5rem] object-cover"
                />
                <span className="navtext">settings</span>
              </li>
            </Link>
            <Link href={"#"}>
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
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
