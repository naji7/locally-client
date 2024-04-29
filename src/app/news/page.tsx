import MainHeader from '@/components/headers/mainHeader/mainHeader'
import NewsContent from '@/components/pages/news/newsContent'
import React from 'react'

function news() {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="News" subtitle="" />
    //     <NewsContent/>
    //   </div>
    // </div>
         <div className="flex h-screen flex-col overflow-y-scroll relative">
         <MainHeader title="News"  />
         <NewsContent />
       </div>
  )
}

export default news
