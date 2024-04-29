import MainHeader from '@/components/headers/mainHeader/mainHeader'
import NewsContent from '@/components/pages/news/newsContent'
import React from 'react'

const News = () => {
  return (
   
         <div className="flex h-screen flex-col overflow-y-scroll relative">
         <MainHeader title="News"  />
         <NewsContent />
       </div>
  )
}

export default News
