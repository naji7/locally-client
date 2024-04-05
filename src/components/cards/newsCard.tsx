import React from "react";
import Image from "next/image";

function NewsCard() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-14 w-full  ">
        <Image
          src={"/assets/images/news/mazda.svg"}
          width={333}
          height={235}
          className=" p-2 rounded-2xl py-2  "
          alt="2023 MAZDA BT-50"
        />
        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start justify-between w-full gap-2">
            <h2 className="sm:text-2xl text-xl font-semibold ">2023 MAZDA BT-50</h2>
            <p className="text-sm font-normal text-justify text-[#000] opacity-[0.6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry standard
              dummy text ever since the 1500s, when an unknown printer
              <br /> took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>

          <div className=" flex items-center justify-between w-full ">
            <div className="flex items-center justify-center gap-3 sm:gap-6 ">
              <div className="flex items-center justify-center gap-1  ">
                <Image
                  src={"/assets/images/news/time.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Date : 2023-05-02
                </h3>
              </div>
              <hr className="w-[0.0625rem] h-[0.6875rem] bg-black opacity-[0.14]  " />
              <div className="flex items-center justify-center gap-1 ">
                <Image
                  src={"/assets/images/news/like.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Likes : 51
                </h3>
              </div>
            </div>
            <h3 className="text-center  text-sm font-bold text-[#FF4C00]  ">See More</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-14 w-full">
        <Image
          src={"/assets/images/news/Drop.svg"}
          width={333}
          height={235}
          className=" p-2 rounded-2xl"
          alt="2023 MAZDA BT-50"
        />
        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start justify-between w-full gap-2">
            <h2 className="sm:text-2xl text-xl font-semibold ">Daily Drop Cars</h2>
            <p className="text-sm font-normal text-justify text-[#000] opacity-[0.6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry standard
              dummy text ever since the 1500s, when an unknown printer
              <br /> took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>

          <div className="flex  items-center justify-between w-full ">
            <div className="flex items-center justify-center gap-3 sm:gap-6 ">
              <div className="flex items-center justify-center gap-1  ">
                <Image
                  src={"/assets/images/news/time.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Date : 2023-05-02
                </h3>
              </div>
              <hr className="w-[0.0625rem] h-[0.6875rem] bg-black opacity-[0.14]  " />
              <div className="flex items-center justify-center gap-1 ">
                <Image
                  src={"/assets/images/news/like.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Likes : 51
                </h3>
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#FF4C00] ">See More</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-14 w-full">
        <Image
          src={"/assets/images/news/Benz.svg"}
          width={333}
          height={235}
          className=" p-2 rounded-2xl"
          alt="2023 MAZDA BT-50"
        />
        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start justify-between w-full gap-2">
            <h2 className="sm:text-2xl text-xl font-semibold ">2024 Benz E-Class</h2>
            <p className=" text-sm font-normal text-justify text-[#000] opacity-[0.6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry standard
              dummy text ever since the 1500s, when an unknown printer
              <br /> took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>

          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-center gap-3 sm:gap-6 ">
              <div className="flex items-center justify-center gap-1  ">
                <Image
                  src={"/assets/images/news/time.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Date : 2023-05-02
                </h3>
              </div>
              <hr className="w-[0.0625rem] h-[0.6875rem] bg-black opacity-[0.14]  " />
              <div className="flex items-center justify-center gap-1 ">
                <Image
                  src={"/assets/images/news/like.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Likes : 51
                </h3>
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#FF4C00] ">See More</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-14 w-full">
        <Image
          src={"/assets/images/news/mazda.svg"}
          width={333}
          height={235}
          className=" p-2 rounded-2xl"
          alt="2023 MAZDA BT-50"
        />
        <div className="flex flex-col items-start justify-between w-full gap-8">
          <div className="flex flex-col items-start justify-between w-full gap-2">
            <h2 className="sm:text-2xl text-xl font-semibold ">2023 MAZDA BT-50</h2>
            <p className="text-sm font-normal text-justify text-[#000] opacity-[0.6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry standard
              dummy text ever since the 1500s, when an unknown printer
              <br /> took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>

          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-center gap-3 sm:gap-6 ">
              <div className="flex items-center justify-center gap-1  ">
                <Image
                  src={"/assets/images/news/time.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Date : 2023-05-02
                </h3>
              </div>
              <hr className="w-[0.0625rem] h-[0.6875rem] bg-black opacity-[0.14]  " />
              <div className="flex items-center justify-center gap-1 ">
                <Image
                  src={"/assets/images/news/like.svg"}
                  width={18}
                  height={18}
                  className=""
                  alt="Date"
                />
                <h3 className="text-xs font-light text-[#000] opacity-[0.6]">
                  Likes : 51
                </h3>
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#FF4C00] ">See More</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
