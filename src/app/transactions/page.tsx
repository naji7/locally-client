import Navbar from "@/components/navbar/navbar";
import TransactionsContent from "@/components/pages/transactions/transactionsContent";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

const Transactions = () => {
  return (
    <div className="flex h-screen overflow-y-scroll">
      <SideBar />
      <div className="flex flex-col h-full justify-start w-full relative">
        <Navbar title="transactions" subtitle="" />
        <TransactionsContent />
      </div>
    </div>
  );
};

export default Transactions;
