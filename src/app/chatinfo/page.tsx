
import MainHeader from '@/components/headers/mainHeader/mainHeader'
import Navbar from '@/components/navbar/navbar'
import ChatContent from '@/components/pages/chat/chatContent'
import Groupinfo from '@/components/pages/chat/groupinfo'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

function groupInfo() {
  return (
    
        <div className="flex h-screen flex-col overflow-y-scroll relative">
        <MainHeader title="Chat Room"  />
        <Groupinfo />
      </div>
  )
}

export default groupInfo