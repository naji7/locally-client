import Image from "next/image";

const HomeEffect = () => {
  return (
    <>
      <Image
        src={"/assets/images/home/effect.svg"}
        alt="effect"
        className="w-[10rem] sm:w-auto h-auto absolute top-0 left-[30%]"
        width={1000}
        height={1000}
      />
    </>
  );
};

export default HomeEffect;
