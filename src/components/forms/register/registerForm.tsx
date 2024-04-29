"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { enqueueSnackbar } from "notistack";
import { set, useForm } from "react-hook-form";

import RegisterMembership from "./registermembership";
import { CheckIcon } from "@heroicons/react/20/solid";
import RegisterOtp from "@/components/dialogs/registerOtp";
import { registerUserApi, sendOTPApi } from "@/clientApi/auth";
import { useMembership } from "@/providers/membershipProvider";
import ButtonLoader from "@/components/loader/ButtonLoader";

interface IRegister {
  fullName: string;
  email: string;
  password: string;
  confimPassword: string;
  tel: number;
  affiliateid: string;
}

function RegisterForm() {
  const { selectedPlan, durationType }: any = useMembership();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegister>();
  const onSubmit = async (data: any) => {
    // data.preventDefault();

    setIsLoading(true);

    if (Object.keys(selectedPlan).length !== 0) {
      if (!isOtpSent) {
        try {
          const otpRes = await sendOTPApi({ email: data.email });
          if (otpRes) {
            setOpen(true);
            setIsOtpSent(true);
          }
        } catch (error) {
          enqueueSnackbar(`Couldn't send OTP`, {
            variant: "error",
          });
        }
      } else {
        const payload = {
          fullName: data.fullName,
          teleNo: data.tel,
          password: data.password,
          email: data.email,
          affiliateId: data.affiliateid,
          durationType: durationType,
          subId: selectedPlan.id,
        };

        try {
          const regResponse = await registerUserApi(payload);
          if (regResponse) {
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
      }
    } else {
      enqueueSnackbar(`Please select a plan!`, {
        variant: "error",
      });
    }

    setIsLoading(false);
  };

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-12 h-full">
        <div className="flex flex-col items-center justify-between w-full gap-12 px-10 py-9">
          <div className="flex flex-col lg:flex-row items-center w-full h-full gap-[3rem]">
            {/* user info */}

            <form
              // id="reg-form"
              // onSubmit={onSubmit}
              className="flex flex-col items-start justify-center w-full gap-4 lg:basis-[33%]"
            >
              <h3 className="text-sm font-bold">User Info</h3>
              <div className="relative items-start justify-center w-full">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Please Enter Full Name"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
                {errors.fullName?.type === "required" && (
                  <p role="alert">Full Name is required</p>
                )}
                <Image
                  src={"/assets/images/register/fName.svg"}
                  width={18}
                  height={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                  alt="notify"
                />
              </div>
              <div className="relative items-start justify-center w-full">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Please Enter Email Address"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
                <Image
                  src={"/assets/images/register/email.svg"}
                  width={18}
                  height={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                  alt="notify"
                />
              </div>
              <div className="relative items-start justify-center w-full">
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
              </div>
              <div className="relative items-start justify-center w-full">
                <input
                  type="password"
                  {...register("confimPassword", { required: true })}
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
              </div>
              <div className="relative items-start justify-center w-full">
                <input
                  type="tel"
                  {...register("tel", { required: true })}
                  aria-invalid={errors.tel ? "true" : "false"}
                  placeholder="+61"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
                <Image
                  src={"/assets/images/register/flag.svg"}
                  width={18}
                  height={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                  alt="notify"
                />
              </div>
              <div className="relative items-start justify-center w-full">
                <input
                  type="text"
                  {...register("affiliateid", { required: true })}
                  aria-invalid={errors.affiliateid ? "true" : "false"}
                  placeholder="Affiliate ID (Optional)"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
                <Image
                  src={"/assets/images/register/Id.svg"}
                  width={18}
                  height={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4"
                  alt="notify"
                />
              </div>
            </form>
            <hr className="w-[0.0625rem] h-full bg-black/15" />

            <div className="flex items-center w-full lg:basis-[64%]">
              <RegisterMembership />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center w-full gap-y-[1.8rem] lg:gap-[1.88rem]">
            <hr className="w-full" />

            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-y-5">
              <div className="relative items-start justify-center w-full lg:basis-[33%]">
                <input
                  id="agree"
                  type="checkbox"
                  name="agree"
                  className="sr-only z-[1]"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label
                  htmlFor="agree"
                  className=" absolute inset-0 w-full h-full z-[99] cursor-pointer"
                ></label>

                <span className=" absolute flex items-center justify-center border-[1.5px] border-black/10 rounded-[0.25rem] z-[5] transition-colors  agree p-[0.25rem]">
                  <CheckIcon className="text-white w-[0.875rem] h-[0.875rem]" />
                </span>
                <span className="ml-8 text-xs font-medium  mt-0.5">
                  By checking the box you agree to our Terms of use
                </span>
              </div>

              <button
                disabled={!isChecked}
                type="submit"
                onClick={handleSubmit((d) => onSubmit(d))}
                className={`py-5 border rounded-2xl bg-[#FF4C00] ${
                  !isChecked && "bg-[#a0aec0]"
                } w-full lg:basis-[64%]`}
              >
                <span className="text-xs font-semibold text-white items-center">
                  {isloading ? (
                    <ButtonLoader />
                  ) : isOtpSent ? (
                    "Register"
                  ) : (
                    "Get OTP"
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex item-center justify-center w-full h-[65px] border bg-[#c4cddf10] bg-opacity-25">
          <h3 className="py-5 text-sm font-normal flex items-center gap-1">
            Already a member ?
            <Link href={"/login"} className="text-sm font-bold text-[#FF4C00]">
              login now
            </Link>
          </h3>
        </div>
      </div>
      <RegisterOtp show={open} setter={onClose} />
    </>
  );
}

export default RegisterForm;
