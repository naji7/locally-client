"use client";

import HomeEffect from "@/components/effects/homeEffect";
import AddItem from "./addItem";
import { useEffect, useState } from "react";
import { useUser } from "@/providers/UserProvider";
import { getStoreProductsApi } from "@/clientApi/auth";

const StoreContent = () => {
  const { handleAuthentication, user }: any = useUser();
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const onClose = () => {
    setOpen(!open);
  };

  const fetchProducts = async () => {
    const payload = {
      storeId: user.store.id,
    };

    try {
      const productsRes = await getStoreProductsApi(payload);
      if (productsRes) {
        setProducts(productsRes?.data?.products);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, [user]);

  return (
    <div className="flex flex-col items-start  pl-[2.5rem]  xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full gap-[3rem]">
      <HomeEffect />

      <div className="col-span-1 h-full w-full h-full rounded-[1.5rem] px-[3rem] py-[2rem] ">
        <div className="flex justify-between items-center ">
          <h5 className="text-lg font-bold capitalize mb-10">
            {user && user?.store?.storeName}
          </h5>
          <button
            type="submit"
            onClick={() => setOpen(true)}
            className={`py-3 px-5 border rounded-2xl bg-[#FF4C00] hover:bg-[#FF4C00] hover:opacity-90 tracking-wider`}
          >
            <span className="text-xs font-semibold text-white items-center">
              Add Item
            </span>
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem] pt-5 pb-5">
          {products && products.length > 0 ? (
            products.map((item: any, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md overflow-hidden shadow-md hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      className="w-full"
                      // src={require(`./images/${item?.image}`)}
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
            })
          ) : (
            <div className="flex justify-center w-full">
              <span className="text-xs font-semibold items-center">
                No Item to show
              </span>
            </div>
          )}
        </div>
      </div>

      <AddItem
        show={open}
        setter={onClose}
        email={"email"}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default StoreContent;
