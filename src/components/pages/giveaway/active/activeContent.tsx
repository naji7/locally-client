import Image from "next/image";

const ActiveContent = () => {
  return (
    <div className="flex flex-col items-center pl-[2.5rem] xl:pl-[17.75rem] pr-[2.5rem] py-[2rem] w-full relative gap-[1.75rem]">
      <div className="flex rounded-[1rem] w-full h-[22.125rem] relative">
        <button className="bg-[#FF4C00] border-4 border-white rounded-[1rem] py-[2rem] max-w-[28.25rem] w-full capitalize font-extrabold text-white absolute left-0 bottom-0 z-[99]">
          enter now
        </button>
        <Image
          src={"/assets/images/giveaway/active/main-banner.png"}
          alt="banner"
          width={2000}
          height={2000}
          className="w-full h-full absolute inset-0 rounded-[1rem] object-contain -z-[2] "
        />
        <Image
            src={"/assets/images/giveaway/active/main-banner.png"}
            alt="banner"
            width={2000}
            height={2000}
            className="w-full h-full absolute inset-0 rounded-[1rem] object-cover  -z-[4]"
          />
        <div className="w-full h-full absolute inset-0 rounded-[1rem] backdrop-blur-xl bg-black/10 -z-[3]"></div>
      </div>
      <div className="grid grid-cols-7 items-start gap-[1.25rem]  w-full">
        <div className="col-span-7 lg:col-span-4 w-full h-[23.375rem] relative rounded-[1rem]">
          <Image
            src={"/assets/images/giveaway/active/banner-1.png"}
            alt="banner"
            width={2000}
            height={2000}
            className="w-full h-full absolute inset-0 rounded-[1rem] object-cover"
          />
        </div>
        <div className="col-span-7 lg:col-span-3 w-full  relative">
          <div className="rounded-[1.5rem] bg-[#EFF9FB] border border-[#5EC1DC] flex flex-col">
            <div className=" bg-black text-white rounded-t-[1.5rem] capitalize flex items-center justify-center font-normal py-6 text-[1.25rem] gap-1">
              vehicle <span className=" font-extrabold">specification</span>
            </div>
            <div className="flex flex-col py-[3rem] px-[2rem]">
              <ul className="flex flex-col timeline-ul">
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    3.5 Tonne Towing Capacity
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Apple Carplay</div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    Leather Interior & Roof Racks
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    Delivered Australia-Wide
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    Valued at $68,750
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    Brand New Mazda BT-50 SP Model
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    3.0L Turbo Diesel
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    140KW & 450NM of Torque
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    Crystal LED Headlights
                  </div>
                </li>
                <li className="flex flex-row after:h-[100%] after:w-0.5 after:bg-[#CDDEDF] relative after:absolute after:bottom-0 after:left-[0.4rem] rounded-full gap-[1.5rem] pb-[1.5rem]">
                  <div className="z-[2]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8.5"
                        r="8"
                        fill="url(#paint0_radial_1_1184)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1_1184"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8 8.5) rotate(90) scale(11.5)"
                        >
                          <stop offset="0.378148" stop-color="#5EC1DC" />
                          <stop
                            offset="1"
                            stop-color="#5EC1DC"
                            stop-opacity="0"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">
                    18 Inch Black Metallic Alloys
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveContent;
