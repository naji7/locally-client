"use client";

import { useForm } from "react-hook-form";

import HomeEffect from "@/components/effects/homeEffect";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { createStoreApi } from "@/clientApi/auth";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { useUser } from "@/providers/UserProvider";

function CreateStore() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleAuthentication }: any = useUser();
  const [storeImage, setStoreImage] = useState();
  const [isloading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    // data.preventDefault();
    setIsLoading(true);

    if (storeImage) {
      const formData = new FormData();
      formData.append("file", storeImage);
      formData.append("storeName", data.storeName);

      try {
        const regResponse = await createStoreApi(formData);
        if (regResponse) {
          handleAuthentication();
          enqueueSnackbar(`Successfully created store`, {
            variant: "success",
          });
        }
      } catch (error: any) {
        if (error?.response?.data) {
          enqueueSnackbar(error?.response?.data, {
            variant: "error",
          });
        } else {
          enqueueSnackbar(`Couldn't create store`, {
            variant: "error",
          });
        }
      }
    }

    setIsLoading(false);
  };

  const handleImg = (e: any) => {
    const file = e.target.files?.[0];

    console.log("file : ", file);

    if (file) {
      setStoreImage(file);
    }
  };

  return (
    <div className="flex flex-col items-start  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect />

      <div className="col-span-1 h-full w-full h-full rounded-[1.5rem] px-[3rem] py-[2rem] ">
        <form className="flex flex-col gap-4">
          <div className="relative items-start justify-center w-full">
            <div className="flex items-center relative">
              <input
                type="text"
                {...register("storeName", { required: true })}
                placeholder="Please Enter Store Name"
                className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
              />
            </div>
          </div>

          <div className="relative w-full">
            <div className="flex items-center relative">
              <input
                id="nic"
                type="file"
                accept="image/*"
                placeholder="Drag and drop file here"
                className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                onChange={handleImg}
              />
            </div>
          </div>
        </form>
        <button
          // disabled={!isChecked}
          type="submit"
          onClick={handleSubmit((d) => onSubmit(d))}
          className={`py-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider mt-10  hover:opacity-90`}
        >
          <span className="text-xs font-semibold text-white items-center">
            {isloading ? <ButtonLoader /> : "Create store"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default CreateStore;
