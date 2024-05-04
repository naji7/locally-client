"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

export const SliderContent = ({
  images,
  children,
  overlay = false,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [loadedBtns, setLoadedBtns] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoadedBtns(true);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 10000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
    leftExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children} (
      <div
        className={cn(
          "absolute inset-0 bg-black/20 backdrop-blur-md",
          overlayClassName
        )}
      />
      )
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/5 z-40", overlayClassName)}
        />
      )}
      {areImagesLoaded && (
        <AnimatePresence>
          <div className="flex items-center justify-end">
            <div className="flex flex-col">
              <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="initial"
                animate="visible"
                exit={direction === "up" ? "leftExit" : "leftExit"}
                variants={slideVariants}
                className="image h-full w-full absolute inset-0 object-cover object-center"
              />
              {/* <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="initial"
                animate="visible"
                exit={direction === "up" ? "leftExit" : "leftExit"}
                variants={slideVariants}
                className="image h-full w-full absolute inset-0 object-contain object-center backdrop-blur-lg bg-black/10"
              /> */}
            </div>
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="flex flex-col sm:flex-row items-center justify-center mt-auto absolute bottom-4 left-0 right-0 gap-[0.85rem] px-[1.25rem]"
            >
              <button className="py-[1rem] px-[2.75rem] flex items-center justify-center backdrop-blur-sm  bg-[#fff]  text-center rounded-[0.5rem] relative w-full">
                <span className="text-sm capitalize font-semibold">
                  get 5x entries
                </span>
              </button>

              <div className="py-[1rem] px-[2.75rem] flex items-center justify-center backdrop-blur-sm  bg-[#FF4D00]  text-white  text-center rounded-[0.5rem] relative w-full">
                <Link href={"/subscription"}>
                  <span className="text-sm capitalize font-semibold">
                    upgrade subscription
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};
