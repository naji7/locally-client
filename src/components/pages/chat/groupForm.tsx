import React from 'react'
import Image from 'next/image'

function GroupForm() {
  return (
    <div className="flex items-center justify-center w-full  ">
    <div className="flex items-center justify-start border-y w-full h-20 bg-[#C4CDDF] bg-opacity-15 absolute top-0 gap-5 px-5">
      <Image
        src={"/assets/images/chat/arrow.svg"}
        width={32}
        height={32}
        className=" "
        alt="windland global chat icon"
      />
     
        <h3 className="text-xl font-extrabold">Groups Info</h3>
       
    </div>

  </div>
  )
}

export default GroupForm
