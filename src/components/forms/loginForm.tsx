"use client";

import {
  AtSymbolIcon,
  EyeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface ILogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col items-center max-w-[31.875rem] mx-auto justify-center w-full">
      <div className="flex self-start mb-10 sm:mb-16">
        <h3 className="text-[1.2rem] md:text-[1.625rem] text-black font-black capitalize leading-[2.145rem]">
          Sign in to access your account
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start flex-col w-full"
      >
        <div className="w-full flex items-start flex-col gap-[1.2rem]">
          <div className="relative w-full">
            <AtSymbolIcon className="absolute left-3 w-[1.3rem] h-auto top-[22px]" />

            <input
              type="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Email Address"
              className=" bg-[#C4CDDF1A] py-[1.35rem] px-[1.3rem] outline-none rounded-[1rem] w-full placeholder:text-[0.75rem] placeholder:font-light placeholder:text-black/70 pl-[2.5rem] text-sm"
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </div>
          <div className="relative w-full">
            <LockClosedIcon className="absolute left-3 w-[1.3rem] h-auto top-[20px]" />

            <input
              type="password"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Please Enter Password"
              className="bg-[#C4CDDF1A] py-[1.35rem] px-[1.3rem] outline-none rounded-[1rem] w-full placeholder:text-[0.75rem] placeholder:font-light placeholder:text-black/70  pl-[2.5rem] text-sm"
            />
            {errors.password?.type === "required" && (
              <p role="alert">Password is required</p>
            )}
            <EyeIcon className="right-4 w-[1.3rem] absolute top-[20px] cursor-pointer" />
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center bg-[#FF4C00] rounded-[1rem] w-full py-[1.3125rem] justify-center text-white mt-[3rem] sm:mt-[4rem] text-sm sm:text-base"
        >
          Login
        </button>
      </form>
      <div className="flex items-center justify-center text-xs sm:text-sm gap-1 mt-[2rem]">
        New Member ?
        <Link href={"/auth/register"} className="text-[#FF4C00] font-bold ">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
