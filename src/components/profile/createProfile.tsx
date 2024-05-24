"use client";

import Balance from "@/components/cards/balance";
import Image from "next/image";
import HomeEffect from "@/components/effects/homeEffect";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateProfile = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  return (
    <div className="flex flex-col items-start  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect />

      <div className="flex flex-col items-center justify-between w-full gap-12 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-[3rem]">
          <form className="flex flex-col items-start justify-center w-full gap-4 lg:basis-[50%]">
            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Full Name"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Contact Number"
                  className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Practices"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Organic"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Eco-Packaging"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Labels"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Company Mission"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <div className="relative items-start justify-center w-full">
              <div className="flex items-center relative">
                <textarea
                  {...register("confimPassword", {
                    required: "Confirm password is required",
                    // validate: validatePassword,
                  })}
                  aria-invalid={errors.confimPassword ? "true" : "false"}
                  placeholder="Inclusive"
                  className="border rounded-xl pt-6 w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                />
              </div>
            </div>

            <button
              // disabled={!isChecked}
              type="submit"
              // onClick={handleSubmit((d) => onSubmit(d))}
              className={`py-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider`}
            >
              <span className="text-xs font-semibold text-white items-center">
                Register
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
