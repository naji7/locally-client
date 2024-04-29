
import MainHeader from "@/components/headers/mainHeader/mainHeader";
import UpcomingContent from "@/components/pages/giveaway/upcoming/upcomingContent";


const Upcoming = () => {
    return (
        // <div className="flex h-screen overflow-y-scroll">
        //   <SideBar />
        //   <div className="flex flex-col h-full justify-start w-full relative">
        //     <HomeEffect/>
        //     <Navbar title="upcoming giveaways" subtitle="" />
        //     <UpcomingContent/>
        //   </div>
        // </div>
        <div className="flex h-screen flex-col overflow-y-scroll relative">
        <MainHeader title="active giveaways" subtitle=""/>
    
        <UpcomingContent />
      </div>
      );
}

export default Upcoming