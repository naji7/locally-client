import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import OtpInputs from "./otpInputs";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { verifyOTPApi } from "@/clientApi/auth";
import { enqueueSnackbar } from "notistack";

const RegisterOtp = ({ show, setter, email, setIsOtpVerified }: any) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const handleVerify = async (pin: any) => {
    setIsVerifying(true);
    try {
      const payload = {
        email,
        otp: pin,
      };
      const res = await verifyOTPApi(payload);
      if (res?.status === 200) {
        enqueueSnackbar(`OTP verified`, {
          variant: "success",
        });
        setIsOtpVerified(true);
        setter();
      }
    } catch (error: any) {
      enqueueSnackbar(`${error.response.data.message}`, {
        variant: "error",
      });
    }

    setIsVerifying(false);
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
                    <div className="flex items-center justify-center py-4 bg-black w-full text-white gap-x-3 px-5">
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
                        Verify Email
                      </Dialog.Title>
                      <button
                        onClick={setter}
                        className="px-2 py-2 absolute right-3 flex items-center justify-center"
                      >
                        <XMarkIcon className=" w-[1.5rem] text-white " />
                      </button>
                    </div>

                    <div className="mt-2 flex flex-col p-2 justify-center w-full items-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4 gap-4">
                      <Image
                        src={"/assets/images/dialogs/mail.png"}
                        alt="img"
                        width={500}
                        height={500}
                        className="max-w-[2rem] w-full h-auto"
                      />
                      <h2 className="text-[0.875rem] font-bold flex items-center gap-1">
                        Please confirm your email address.
                      </h2>

                      <p className="text-[0.875rem] text-center font-light opacity-65">
                        You will receive a confirmation email within the next
                        couple of minutes. Please also check your spam folder.
                      </p>

                      <OtpInputs
                        handleVerify={handleVerify}
                        isVerifying={isVerifying}
                      />
                      <div className="flex items-center justify-around gap-2">
                        <span className="text-xs font-light">
                          Didn&apos;t receive an email?
                        </span>
                        <button className="text-[#78DCF8] text-sm py-1 rounded-2xl font-medium">
                          Resend
                        </button>
                      </div>
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

export default RegisterOtp;
