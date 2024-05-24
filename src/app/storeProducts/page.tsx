"use client";

import { useUser } from "@/providers/UserProvider";
import { useEffect, useState } from "react";
import LoginMain from "@/components/main/loginMain";
import Link from "next/link";
import { getAllProductsApi, getStoreProductsApi } from "@/clientApi/auth";
import { STORE_DETAILS } from "@/constants";

const StoreProducts = () => {
  const { user, isMainLoading }: any = useUser();

  console.log("user : ", user);

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState<any>();

  const onClose = () => {
    setOpen(!open);
  };

  const fetchProducts = async (data: any) => {
    const payload = {
      storeId: data?.id,
    };

    console.log("payload : ", payload);
    try {
      const prodRes = await getStoreProductsApi(payload);
      console.log("prodRes : ", prodRes);
      if (prodRes) {
        setProducts(prodRes?.data?.products);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const storeDetails: any = JSON.parse(
      localStorage.getItem(STORE_DETAILS) || ""
    );
    console.log("storeDetails : ", storeDetails);
    if (storeDetails) {
      setStore(storeDetails);
      fetchProducts(storeDetails);
    }
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-y-scroll relative p-10 pt-10">
      <div className="flex-1 flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2 overflow-hidden">
          <ul className="flex items-center">
            <li className="h-24 w-24">
              <img
                className="h-full w-full mx-auto h-30 w-30"
                src={"/assets/images/register/locallySvg.svg"}
                alt="svelte logo"
              />
            </li>
          </ul>

          {user ? (
            <ul className="flex items-center">
              <li className="pr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </li>
              <li className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full mx-auto"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="profile woman"
                />
              </li>
            </ul>
          ) : (
            <ul className="flex items-center gap-2">
              <button
                // disabled={!isChecked}
                type="submit"
                onClick={() => setOpen(true)}
                className={`py-2 px-5 border border-[#FF4C00] rounded-2xl w-full lg:basis-[64%] tracking-wider`}
              >
                <span className="text-xs font-semibold text-[#FF4C00] items-center">
                  Login
                </span>
              </button>

              <button
                // disabled={!isChecked}
                type="submit"
                // onClick={handleSubmit((d) => onSubmit(d))}
                className={`py-2 px-5 border rounded-2xl bg-[#FF4C00] w-full lg:basis-[64%] tracking-wider`}
              >
                <Link
                  href={"/register"}
                  className="text-xs font-semibold text-white items-center"
                >
                  Register
                </Link>
              </button>
            </ul>
          )}
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-xl">
        <div
          x-data="{ openSettings: false }"
          className="absolute right-12 rounded"
        ></div>
        <div className="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            src={`http://localhost:5000/Images/${store?.image}`}
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">{store?.storeName}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">
            Senior Software Engineer at Tailwind CSS
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] pt-5 pb-5 mt-5">
        {products &&
          products.length > 0 &&
          products.map((item: any, index) => {
            return (
              <div
                key={index}
                className="rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
              >
                <div className="relative">
                  <img
                    className="w-full"
                    src={`http://localhost:5000/Images/${item?.image}`}
                    alt="Product Image"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{item?.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item?.des}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{`$${item?.price}`}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <LoginMain show={open} setter={onClose} email={"email"} />
    </div>
  );
};

export default StoreProducts;
