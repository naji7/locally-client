import { transactionsHistory } from "@/constants/data";

const TransactionHistory = () => {
  return (
    <div className="flex flex-col items-start gap-[2rem] w-full">
      <h3 className="text-[1.5rem] font-extrabold capitalize">transactions</h3>
      <div className="w-full">
        <ul className="sm:pl-[1.75rem] flex flex-col gap-[1.5rem] w-full">
          {transactionsHistory.map((transaction, index) => (
            <li
              key={index}
              className="flex items-center justify-between w-full transactionList relative"
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-sm sm:text-base capitalize">
                  {transaction.name}
                </h4>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-light capitalize text-[#A9B1BB]">
                  <span>{transaction.date}</span>
                  <span>{transaction.time}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <h4 className="font-semibold text-sm sm:text-base capitalize">
                  $ {transaction.price}
                </h4>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-light capitalize text-[#A9B1BB]">
                  {transaction.method}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
