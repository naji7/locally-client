import Image from "next/image";
import React from "react";

function Member() {
  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="flex items-center justify-center w-full gap-4">
        <Image
          src={"/assets/images/businesscard/profile-1.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <h3 className="text-base font-medium">Farahzad</h3>
      </div>
      <div className="flex items-center justify-center w-full gap-4">
        <Image
          src={"/assets/images/businesscard/profile-2.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <h3 className="text-base font-medium">Adithya</h3>
      </div>
      <div className="flex items-center justify-center w-full gap-4">
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <h3 className="text-base font-medium">Nimsara</h3>
      </div>
      <div className="flex items-center justify-center w-full gap-4">
        <Image
          src={"/assets/images/businesscard/profile-4.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <h3 className="text-base font-medium">Dilruk</h3>
      </div>
    </div>
  );
}

export default Member;
