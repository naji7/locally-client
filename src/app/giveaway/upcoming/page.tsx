
import MainHeader from "@/components/headers/mainHeader/mainHeader";
import UpcomingContent from "@/components/pages/giveaway/upcoming/upcomingContent";


const Upcoming = () => {
    return (
      
        <div className="flex h-screen flex-col overflow-y-scroll relative">
        <MainHeader title="active giveaways" subtitle=""/>
    
        <UpcomingContent />
      </div>
      );
}

export default Upcoming