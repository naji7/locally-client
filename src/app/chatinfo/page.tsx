
import Navbar from '@/components/navbar/navbar'
import ChatContent from '@/components/pages/chat/chatContent'
import Groupinfo from '@/components/pages/chat/groupinfo'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

function groupInfo() {
  return (
    <div className="flex h-screen overflow-y-scroll">
    <SideBar />
    <div className="flex flex-col h-full justify-start w-full relative">
      <Navbar title="Chat Room" subtitle="" />
      <Groupinfo />
    </div>
  </div>
  )
}

export default groupInfo