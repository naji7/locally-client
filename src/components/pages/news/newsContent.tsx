import NewsCard from "@/components/cards/newsCard";
import React from "react";

function NewsContent() {
  return (
    <div className="flex flex-col items-center  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem]  sm:pr-[6.9rem]  py-[2rem] w-full gap-[3rem]">
      <NewsCard />
    </div>
  );
}

export default NewsContent;
