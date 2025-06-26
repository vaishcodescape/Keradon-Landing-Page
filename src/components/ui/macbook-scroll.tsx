"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";
import Image from "next/image";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";


export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 800 : 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const rotateMobile = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-15, -15, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[100vh] sm:min-h-[150vh] md:min-h-[200vh] shrink-0 scale-[0.4] sm:scale-[0.5] md:scale-[0.7] lg:scale-100 transform flex-col items-center justify-start py-0 [perspective:800px] md:py-80"
    >
      {title && (
        <motion.h2
          style={{
            translateY: textTransform,
            opacity: textOpacity,
          }}
          className="mb-6 sm:mb-10 md:mb-20 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-white px-3 sm:px-4"
        >
          {title}
        </motion.h2>
      )}
      {/* Lid */}
      <div className="relative [perspective:800px]">
        <div
          style={{
            transform: isMobile ? "perspective(800px) rotateX(-15deg) translateZ(0px)" : "perspective(800px) rotateX(-25deg) translateZ(0px)",
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
          }}
          className="relative h-[6rem] w-[16rem] sm:h-[8rem] sm:w-[20rem] md:h-[10rem] md:w-[24rem] lg:h-[12rem] lg:w-[32rem] rounded-xl sm:rounded-2xl bg-[#010101] p-2"
        >
          <div
            style={{
              boxShadow: "0px 2px 0px 2px #171717 inset",
            }}
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
          >
          </div>
        </div>
        <motion.div
          style={{
            scaleX: scaleX,
            scaleY: scaleY,
            rotateX: isMobile ? rotateMobile : rotate,
            translateY: translate,
            transformStyle: "preserve-3d",
            transformOrigin: "top",
          }}
          className="absolute inset-0 h-48 w-[16rem] sm:h-64 sm:w-[20rem] md:h-80 md:w-[24rem] lg:h-96 lg:w-[32rem] rounded-xl sm:rounded-2xl bg-[#010101] p-2"
        >
          <div className="absolute inset-0 rounded-lg bg-[#272729] overflow-hidden">
            {src && (
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt="Macbook Screen"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 800px"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
      {/* Base area */}
      <div className="relative -z-10 h-[10rem] w-[16rem] sm:h-[14rem] sm:w-[20rem] md:h-[18rem] md:w-[24rem] lg:h-[22rem] lg:w-[32rem] overflow-hidden rounded-xl sm:rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-4 sm:h-6 md:h-8 lg:h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-2 sm:h-3 md:h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-1 sm:h-1 md:h-2 w-8 sm:w-12 md:w-16 lg:w-20 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-12 sm:h-20 md:h-32 lg:h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 w-[40%] rounded-lg sm:rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      {/* First Row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn
          className="w-8 sm:w-10 items-end justify-start pb-[1px] sm:pb-[2px] pl-[2px] sm:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className="text-[4px] sm:text-[5px]">esc</span>
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F9</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px]">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">~</span>
          <span className="mt-1 block text-[4px] sm:text-[5px]">`</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">!</span>
          <span className="block text-[4px] sm:text-[5px]">1</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">@</span>
          <span className="block text-[4px] sm:text-[5px]">2</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">#</span>
          <span className="block text-[4px] sm:text-[5px]">3</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">$</span>
          <span className="block text-[4px] sm:text-[5px]">4</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">%</span>
          <span className="block text-[4px] sm:text-[5px]">5</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">^</span>
          <span className="block text-[4px] sm:text-[5px]">6</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">&</span>
          <span className="block text-[4px] sm:text-[5px]">7</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">*</span>
          <span className="block text-[4px] sm:text-[5px]">8</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">(</span>
          <span className="block text-[4px] sm:text-[5px]">9</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">)</span>
          <span className="block text-[4px] sm:text-[5px]">0</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">&mdash;</span>
          <span className="block text-[4px] sm:text-[5px]">_</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">+</span>
          <span className="block text-[4px] sm:text-[5px]"> = </span>
        </KBtn>
        <KBtn
          className="w-8 sm:w-10 items-end justify-end pr-[2px] sm:pr-[4px] pb-[1px] sm:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className="text-[4px] sm:text-[5px]">delete</span>
        </KBtn>
      </div>

      {/* Third row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn
          className="w-8 sm:w-10 items-end justify-start pb-[1px] sm:pb-[2px] pl-[2px] sm:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className="text-[4px] sm:text-[5px]">tab</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">Q</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">W</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">E</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">R</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">T</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">Y</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">U</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">I</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">O</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">P</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`{`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`}`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`|`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`\\`}</span>
        </KBtn>
      </div>

      {/* Fourth Row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn
          className="w-[2.2rem] sm:w-[2.8rem] items-end justify-start pb-[1px] sm:pb-[2px] pl-[2px] sm:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className="text-[3px] sm:text-[4px] md:text-[5px]">caps lock</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">A</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">S</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">D</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">F</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">G</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">H</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">J</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">K</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">L</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`:`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`"`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[2.2rem] sm:w-[2.85rem] items-end justify-end pr-[2px] sm:pr-[4px] pb-[1px] sm:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className="text-[3px] sm:text-[4px] md:text-[5px]">return</span>
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn
          className="w-[2.8rem] sm:w-[3.65rem] items-end justify-start pb-[1px] sm:pb-[2px] pl-[2px] sm:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className="text-[3px] sm:text-[4px] md:text-[5px]">shift</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">Z</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">X</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">C</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">V</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">B</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">N</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">M</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`<`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`>`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`.`}</span>
        </KBtn>
        <KBtn>
          <span className="block text-[4px] sm:text-[5px]">{`?`}</span>
          <span className="block text-[4px] sm:text-[5px]">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[2.8rem] sm:w-[3.65rem] items-end justify-end pr-[2px] sm:pr-[4px] pb-[1px] sm:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className="text-[3px] sm:text-[4px] md:text-[5px]">shift</span>
        </KBtn>
      </div>

      {/* sixth Row */}
      <div className="mb-[1px] sm:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[2px]">
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">fn</span>
          </div>
          <div className="flex w-full justify-start pl-1">
            <IconWorld className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <IconChevronUp className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[4px]">
          <div className="flex w-full justify-end pr-1">
            <OptionKey className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-6 sm:w-8"
          childrenClassName="h-full justify-between py-[2px] sm:py-[4px]"
        >
          <div className="flex w-full justify-end pr-1">
            <IconCommand className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">command</span>
          </div>
        </KBtn>
        <KBtn className="w-[6rem] sm:w-[8.2rem]"></KBtn>
        <KBtn
          className="w-6 sm:w-8"
          childrenClassName="h-full justify-between py-[2px] sm:py-[4px]"
        >
          <div className="flex w-full justify-start pl-1">
            <IconCommand className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[4px]">
          <div className="flex w-full justify-start pl-1">
            <OptionKey className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block text-[3px] sm:text-[4px] md:text-[5px]">option</span>
          </div>
        </KBtn>
        <div className="mt-[1px] sm:mt-[2px] flex h-4 sm:h-6 w-[3.5rem] sm:w-[4.9rem] flex-col items-center justify-end rounded-[3px] sm:rounded-[4px] p-[0.5px]">
          <KBtn className="h-2 w-4 sm:h-3 sm:w-6">
            <IconCaretUpFilled className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-2 w-4 sm:h-3 sm:w-6">
              <IconCaretLeftFilled className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
            </KBtn>
            <KBtn className="h-2 w-4 sm:h-3 sm:w-6">
              <IconCaretDownFilled className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
            </KBtn>
            <KBtn className="h-2 w-4 sm:h-3 sm:w-6">
              <IconCaretRightFilled className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px]" />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[3px] sm:rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 items-center justify-center rounded-[2.5px] sm:rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[2px] sm:text-[3px] md:text-[4px] lg:text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-1 sm:mt-2 flex h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 gap-[1px] sm:gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "2px 2px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
