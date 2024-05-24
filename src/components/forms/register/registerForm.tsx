"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import { registerUserApi } from "@/clientApi/auth";
import { useMembership } from "@/providers/membershipProvider";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { AUTH_TOKEN } from "@/constants";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useUser } from "@/providers/UserProvider";

interface IRegister {
  fullName: string;
  email: string;
  password: string;
  confimPassword: string;
  tel: number;
  affiliateid: string;
}

function RegisterForm() {
  const { handleAuthentication }: any = useUser();
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("usertype");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IRegister>();
  const onSubmit = async (data: any) => {
    // data.preventDefault();
    setIsLoading(true);

    const payload = {
      fullName: data.fullName,
      password: data.password,
      email: data.email,
      role: selectedValue,
    };
    try {
      const regResponse = await registerUserApi(payload);
      if (regResponse) {
        const tk = regResponse?.data?.data?.token;
        const role = regResponse?.data?.data?.role;
        localStorage.setItem(AUTH_TOKEN, tk);
        if (role === "CONSUMER") {
          router.push("/");
        } else {
          router.push("/dashboard");
        }
        handleAuthentication();
        enqueueSnackbar(`User register successfully`, {
          variant: "success",
        });
      }
    } catch (error: any) {
      if (error?.response?.data) {
        enqueueSnackbar(error?.response?.data, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(`Couldn't register user`, {
          variant: "error",
        });
      }
    }
    setIsLoading(false);
  };

  const password = watch("password");

  const validatePassword = (value: string) => {
    return value === password || "Passwords does't match";
  };

  const options = [
    { value: "USERTYPE", label: "USER TYPE" },
    { value: "CONSUMER", label: "CONSUMER" },
    { value: "FARMER", label: "FARMER" },
    { value: "ARTISAN", label: "ARTISAN" },
    { value: "OTHER", label: "OTHER" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-12 h-full">
        <div className="flex flex-col items-center justify-between w-full gap-12 px-10 py-9">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-[3rem]">
            <form className="flex flex-col items-start justify-center w-full gap-4 lg:basis-[33%]">
              <div className="relative items-start justify-center w-full">
                <div className="flex items-center relative">
                  <Image
                    src={"/assets/images/register/fName.svg"}
                    width={18}
                    height={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                    alt="notify"
                  />
                  <input
                    type="text"
                    {...register("fullName", { required: true })}
                    placeholder="Please Enter Full Name"
                    className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                  />
                </div>
                {errors.fullName?.type === "required" && (
                  <p
                    role="alert"
                    className="text-xs font-light text-red-600 mt-2.5 pl-1"
                  >
                    Full name is required
                  </p>
                )}
              </div>

              <div className="relative items-start justify-center w-full">
                <div className="flex items-center relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Please Enter Email Address"
                    className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                  />

                  <Image
                    src={"/assets/images/register/email.svg"}
                    width={18}
                    height={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                    alt="notify"
                  />
                </div>
                {errors.email && (
                  <p
                    role="alert"
                    className="text-xs font-light text-red-600 mt-2.5 pl-1"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative items-start justify-center w-full">
                <div className="flex items-center relative">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                    placeholder="Please Enter Password"
                    className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                  />
                  <Image
                    src={"/assets/images/register/pw.svg"}
                    width={18}
                    height={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                    alt="notify"
                  />
                  <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 cursor-pointer text-black" />
                </div>
                {errors.password?.type === "required" && (
                  <p
                    role="alert"
                    className="text-xs font-light text-red-600 mt-2.5 pl-1"
                  >
                    Password is required
                  </p>
                )}
              </div>

              <div className="relative items-start justify-center w-full">
                <div className="flex items-center relative">
                  <input
                    type="password"
                    {...register("confimPassword", {
                      required: "Confirm password is required",
                      validate: validatePassword,
                    })}
                    aria-invalid={errors.confimPassword ? "true" : "false"}
                    placeholder="Please Enter Confirm Password"
                    className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                  />
                  <Image
                    src={"/assets/images/register/pw.svg"}
                    width={18}
                    height={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                    alt="notify"
                  />
                  <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 cursor-pointer text-black" />
                </div>
                {errors.confimPassword && (
                  <p
                    role="alert"
                    className="text-xs font-light text-red-600 mt-2.5 pl-1"
                  >
                    {errors.confimPassword.message}
                  </p>
                )}
              </div>

              <select
                className="border rounded-xl w-full h-16 bg-[#c4cddf10] outline-none pl-6 pr-4 text-xs text-[#323232]"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <button
                // disabled={!isChecked}
                type="submit"
                onClick={handleSubmit((d) => onSubmit(d))}
                className={`py-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider`}
              >
                <span className="text-xs font-semibold text-white items-center">
                  {isloading ? <ButtonLoader /> : "Register"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex item-center justify-center w-full h-[65px] border bg-[#c4cddf10] bg-opacity-25">
        <h3 className="py-5 text-sm font-normal flex items-center gap-1">
          Already a member ?
          <Link href={"/"} className="text-sm font-bold text-[#FF4C00]">
            login now
          </Link>
        </h3>
      </div>
    </>
  );
}

export default RegisterForm;
