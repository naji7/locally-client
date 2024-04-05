import Image from "next/image";

const ActiveEntry = ({
  className,
  url,
  title,
  entries,
}: {
  title: string;
  url: string;
  entries: string;
  className: string;
}) => {
  return (
    <div className="flex flex-col ">
      <span className="h-[5.65rem]"></span>
      <div
        className="flex flex-col gap-[1.44rem] justify-end h-[11.1875rem] rounded-[1rem] relative py-[1.5rem] px-[1.6rem]"
        style={{ backgroundColor: className }}
      >
        <Image
          src={url}
          alt="activentry"
          width={2000}
          height={2000}
          className="w-[calc(100%-1rem)] h-[11.3125rem] object-cover absolute inset-0 mx-auto rounded-[0.875rem] -translate-y-[50%]"
        />

        <div className="flex flex-col">
          <h3 className="text-base leading-[1.625rem] capitalize font-semibold">
            {title}
          </h3>
          <h5 className="text-xs font-thin capitalize opacity-75 gap-1 flex items-center">
            My Entries :<span>{entries}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ActiveEntry;
