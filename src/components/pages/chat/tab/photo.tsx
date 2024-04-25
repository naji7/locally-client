import Image from 'next/image'
import React from 'react'

function Photo() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-start justify-start w-full gap-1">
        <h3>JANUARY 2024</h3>
        <div className="flex items-start justify-start w-full">
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-1">
        <h3>FEBRUARY 2024</h3>
        <div className="flex items-start justify-start w-full">
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        <Image
          src={"/assets/images/businesscard/profile-3.svg"}
          width={42}
          height={42}
          className=" max-w-[2.625rem] h-auto "
          alt="member"
        />
        </div>
      </div>
    </div>
  )
}

export default Photo
