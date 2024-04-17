import React from 'react'
import Groups from './groups'
import GroupForm from './groupForm'
import GroupBody from './groupBody'

function Groupinfo() {
  return (
    <div className="flex   items-center justify-center w-full  xl:pl-[15.5rem]  py-[2rem] ">
    <div className="flex items-center justify-center w-1/4 h-screen border-r relative">
      <Groups />
    </div>
    <div className="flex flex-col items-center justify-center w-3/4 h-screen  border-r relative">
      <GroupForm />
      {/* <GroupBody/> */}

      
    </div>
  </div>
  )
}

export default Groupinfo
