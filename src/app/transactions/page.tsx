import MainHeader from "@/components/headers/mainHeader/mainHeader";
import TransactionsContent from "@/components/pages/transactions/transactionsContent";
import React from "react";

const Transactions = () => {
  return (
 
    <div className="flex h-screen flex-col overflow-y-scroll relative">
    <MainHeader title="Transaction"  />
    <TransactionsContent />
  </div>

    
  );
};

export default Transactions;
