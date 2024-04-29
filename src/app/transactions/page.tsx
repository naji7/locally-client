import MainHeader from "@/components/headers/mainHeader/mainHeader";
import TransactionsContent from "@/components/pages/transactions/transactionsContent";
import React from "react";

const Transactions = () => {
  return (
    // <div className="flex h-screen overflow-y-scroll">
    //   <SideBar />
    //   <div className="flex flex-col h-full justify-start w-full relative">
    //     <Navbar title="transactions" subtitle="" />
    //     <TransactionsContent />
    //   </div>
    // </div>
    <div className="flex h-screen flex-col overflow-y-scroll relative">
    <MainHeader title="Transaction"  />
    <TransactionsContent />
  </div>

    
  );
};

export default Transactions;
