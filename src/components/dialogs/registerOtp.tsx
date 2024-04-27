import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const RegisterOtp = ({ show, setter }: any) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setter}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white pb-5">
                  <div className="sm:flex sm:items-center w-full justify-center">
                    <div className="flex items-center justify-center flex-col w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl capitalize font-bold py-4 bg-black w-full text-white flex items-center justify-center"
                      >
                        Verify Email
                      </Dialog.Title>
                      <div className="mt-2 flex flex-col p-2 justify-center w-full items-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4 gap-4">
                        <h2 className="text-[0.875rem] font-bold">
                          Please confirm your email address.
                        </h2>
                        <p className="text-[0.875rem] text-center font-light">
                          You will receive a confirmation email within the next
                          couple of minutes. Please also check your spam folder.
                        </p>
                        <Image
                          src={"/assets/images/dialogs/mail.png"}
                          alt="img"
                          width={500}
                          height={500}
                          className="max-w-[4rem] w-full h-auto"
                        />
                        <span className="text-xs font-light">Didn&apos;t receive an email?</span>
                        <button className="bg-[#78DCF8] text-sm py-2 px-4 rounded-2xl min-w-[7rem]">Resend</button>
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
