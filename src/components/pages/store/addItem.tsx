import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { addProductApi } from "@/clientApi/auth";
import { enqueueSnackbar } from "notistack";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { useUser } from "@/providers/UserProvider";

const AddItem = ({ show, setter, fetchProducts }: any) => {
  const { user }: any = useUser();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResendDisable, setIsResendDisable] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [storeImage, setStoreImage] = useState();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("user : ", user);
    // // data.preventDefault();
    setIsLoading(true);

    if (storeImage) {
      const formData = new FormData();
      formData.append("file", storeImage);
      formData.append("name", data.productName);
      formData.append("price", data.price);
      formData.append("des", data.des);
      formData.append("storeId", user.store.id);

      try {
        const regResponse = await addProductApi(formData);
        if (regResponse) {
          console.log("uploaded resukt : ", regResponse);
          // handleAuthentication();
          fetchProducts();
          enqueueSnackbar(`Successfully added item`, {
            variant: "success",
          });
          setter();
        }
      } catch (error: any) {
        if (error?.response?.data) {
          enqueueSnackbar(error?.response?.data, {
            variant: "error",
          });
        } else {
          enqueueSnackbar(`Couldn't Add Item`, {
            variant: "error",
          });
        }
      }
    }

    setIsLoading(false);
  };

  const handleImg = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      setStoreImage(file);
    }
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-[99]" onClose={setter}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl rounded-2xl">
                <div className="sm:flex sm:items-center w-full justify-center pb-5">
                  <div className="flex items-center justify-center flex-col w-full">
                    <div className="flex items-center justify-center py-4 bg-[#FF4C00] w-full text-white gap-x-3 px-5">
                      {/* <Image
                          src={"/assets/images/dialogs/mail.png"}
                          alt="img"
                          width={500}
                          height={500}
                          className="max-w-[2rem] w-full h-auto"
                        /> */}
                      <Dialog.Title
                        as="h3"
                        className="text-xl capitalize font-bold"
                      >
                        Add Item
                      </Dialog.Title>
                      <button
                        onClick={setter}
                        className="px-2 py-2 absolute right-3 flex items-center justify-center"
                      >
                        <XMarkIcon className=" w-[1.5rem] text-white " />
                      </button>
                    </div>

                    <div className="px-[3rem] py-[2rem] ">
                      <form className="flex flex-col gap-4">
                        <input
                          type="text"
                          {...register("productName", { required: true })}
                          placeholder="Product Name"
                          className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                        />

                        <input
                          type="text"
                          {...register("des", { required: true })}
                          placeholder="Product Description"
                          className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                        />

                        <input
                          type="text"
                          {...register("price", { required: true })}
                          placeholder="Product Price"
                          className="border rounded-xl w-full h-16 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                        />

                        <input
                          id="nic"
                          type="file"
                          accept="image/*"
                          placeholder="Drag and drop file here"
                          className="rounded-xl w-full mt-5 pl-10 pr-4 text-xs text-[#323232]  font-light bg-[#c4cddf10] placeholder:text-black/40 placeholder:text-xs placeholder:font-extralight outline-none"
                          onChange={handleImg}
                        />
                      </form>
                      <button
                        // disabled={!isChecked}
                        type="submit"
                        onClick={handleSubmit((d) => onSubmit(d))}
                        // onClick={handleSubmit((d) => onSubmit(d))}
                        className={`py-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider mt-10  hover:opacity-90`}
                      >
                        <span className="text-xs font-semibold text-white items-center">
                          {isloading ? <ButtonLoader /> : "Add Item"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddItem;
