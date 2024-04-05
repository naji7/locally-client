import React from "react";
import Image from "next/image";
import { newsData } from "@/constants/data";

function NewsCard() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-10">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center justify-between gap-8 sm:gap-14 w-full  "
        >
          <div className=" col-span-3 md:col-span-1 h-[14.6875rem] rounded-[1rem] relative">
            <Image
              src={news.url}
              width={1000}
              height={1000}
              className="rounded-[1rem] absolute inset-0 object-cover w-full h-full"
              alt="2023 MAZDA BT-50"
            />
          </div>

          <div className="flex flex-col col-span-3 md:col-span-2 items-start justify-between w-full gap-8">
            <div className="flex flex-col items-start justify-between w-full gap-2">
              <h2 className="sm:text-2xl text-xl font-semibold ">
                {news.title}
              </h2>
              <p className="text-sm font-normal text-justify text-[#000] opacity-[0.6]">
                {news.description}
              </p>
            </div>

            <div className=" flex items-center justify-between w-full ">
              <div className="flex items-start sm:items-center justify-center gap-3 sm:gap-6 flex-col sm:flex-row">
                <div className="flex items-center justify-center gap-1 opacity-[0.6]">
                  <Image
                    src={"/assets/icons/cards/news/clock.svg"}
                    width={18}
                    height={18}
                    className=""
                    alt="Date"
                  />
                  <h3 className="text-xs font-light text-[#000] mt-0.5">
                    Date : {news.date}
                  </h3>
                </div>
                <hr className="w-[0.0625rem] h-[0.6875rem] bg-black opacity-[0.14] hidden  sm:flex" />
                <div className="flex items-center justify-center gap-1 opacity-[0.6]">
                  <Image
                    src={"/assets/icons/cards/news/likes.svg"}
                    width={18}
                    height={18}
                    className=""
                    alt="Date"
                  />
                  <h3 className="text-xs font-light text-[#000]  mt-0.5">
                    Likes : {news.likes}
                  </h3>
                </div>
              </div>
              <button className="text-center  text-sm font-bold text-[#FF4C00]">
                See More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
