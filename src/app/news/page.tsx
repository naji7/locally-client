import Navbar from '@/components/navbar/navbar'
import NewsContent from '@/components/pages/news/newsContent'
import SettingsContent from '@/components/pages/settings/settingsContent'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

const News = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="News" subtitle="" />
        <NewsContent/>
      </div>
    </div>
  )
}

export default News
