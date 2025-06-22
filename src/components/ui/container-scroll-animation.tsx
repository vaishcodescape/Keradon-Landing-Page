"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [isMobile ? 15 : 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);

  return (
    <div
      className="h-[40rem] sm:h-[50rem] md:h-[60rem] lg:h-[80rem] flex items-center justify-center relative p-2 sm:p-4 md:p-8 lg:p-20"
      ref={containerRef}
    >
      <div
        className="py-6 sm:py-8 md:py-16 lg:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ 
  translate, 
  titleComponent 
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-4xl sm:max-w-5xl mx-auto text-center px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-4xl sm:max-w-5xl -mt-8 sm:-mt-10 md:-mt-12 mx-auto h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[40rem] w-full border-2 sm:border-4 border-[#6C6C6C] p-2 sm:p-4 md:p-6 bg-[#222222] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2 sm:p-3 md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
