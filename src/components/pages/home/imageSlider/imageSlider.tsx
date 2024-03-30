"use client";
import { motion } from "framer-motion";
import React from "react";
import { SliderContent } from "./sliderContent";

export function ImagesSlider() {
  const images = [
    "/assets/images/home/slider/banner1.png",
    "/assets/images/home/slider/banner2.png",
    "/assets/images/home/slider/banner3.png",
    "/assets/images/home/slider/banner4.png",
  ];
  return (
    <SliderContent className="min-h-[28rem] rounded-[1rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-end h-full items-center"
      >

      </motion.div>
    </SliderContent>
  );
}
