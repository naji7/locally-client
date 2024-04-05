import Balance from "@/components/cards/balance";
import Image from "next/image";
import TransactionHistory from "./transactionsHistory/transactionHistory";

const TransactionsContent = () => {
  return (
    <div className="flex flex-col items-start  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <Image
        src={"/assets/images/home/effect.svg"}
        alt="effect"
        className="w-auto h-auto absolute top-0 left-[30%]"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full ">
        <div className="col-span-1 flex flex-col items-center lg:items-start justify-center gap-8">
          <Balance
            url="/assets/images/cards/balance/purchase.svg"
            amount={160.35}
            name="Total Purchase"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={"/assets/images/settings/MainCar.svg"}
            width={492}
            height={357}
            className="w-full p-2"
            alt="mini car"
          />
        </div>
      </div>
      <TransactionHistory />
    </div>
  );
};

export default TransactionsContent;