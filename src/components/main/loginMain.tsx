import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { loginApi } from "@/clientApi/auth";
import { enqueueSnackbar } from "notistack";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AUTH_TOKEN } from "@/constants";
import { useRouter } from "next/navigation";
import { useUser } from "@/providers/UserProvider";
import ButtonLoader from "../loader/ButtonLoader";

const LoginMain = ({ show, setter }: any) => {
  const { handleAuthentication }: any = useUser();
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isResendDisable, setIsResendDisable] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("data : ", data);
    // data.preventDefault();
    setIsLoading(true);

    const payload = {
      password: data.password,
      email: data.email,
    };
    try {
      const regResponse = await loginApi(payload);
      if (regResponse) {
        console.log("ress : ", regResponse);
        const tk = regResponse?.data?.token;
        const role = regResponse?.data?.role;
        localStorage.setItem(AUTH_TOKEN, tk);
        if (role === "CONSUMER") {
          router.push("/");
        } else {
          router.push("/dashboard");
        }
        handleAuthentication();
        enqueueSnackbar(`User successfully log in`, {
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
        enqueueSnackbar(`Couldn't login`, {
          variant: "error",
        });
      }
    }
    setIsLoading(false);
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
            <div className="min-h-screen flex justify-center items-center">
              <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <button onClick={setter} className="flex float-end">
                  <XMarkIcon className=" w-[1.5rem]" />
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Hello Again
                  </h1>
                  <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Welcome Back
                  </p>
                </div>
                <div className="space-y-4">
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
                    </div>
                    {errors.email && (
                      <p
                        role="alert"
                        className="text-xs font-light text-red-600 mt-2.5 pl-1"
                      >
                        {errors?.email?.message as any}
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
                    </div>{" "}
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
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit((d) => onSubmit(d))}
                    className={`py-3 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider text-white hover:opacity-90`}
                  >
                    {isloading ? <ButtonLoader /> : "Login"}
                  </button>
                  <p className="mt-4 text-sm">
                    {`Don't have an account yet?`}{" "}
                    <Link
                      href={"/register"}
                      className="underline  cursor-pointer"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginMain;
