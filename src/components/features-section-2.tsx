"use client"
import { cn } from "../lib/utils";
import {
  IconBrain,
  IconRocket,
  IconCurrencyDollar,
  IconDatabase,
  IconGitFork,
  IconSparkles,
  IconBolt,
  IconChartBar,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for data driven people",
      description:
        "Built for developers, data scientists, and business analysts.",
      icon: <IconBrain className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as being bait for a shark, and as expensive as catching one.",
      icon: <IconRocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no rip off.",
      icon: <IconCurrencyDollar className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconDatabase className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Open Source",
      description: "We are open source, and we love it.",
      icon: <IconGitFork className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Future Updates Coming Soon",
      description:
        "We have exciting new features and improvements in the pipeline.",
      icon: <IconSparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Lightning-fast performance",
      description:
        "Experience blazing-fast data processing and analysis, enabling real-time insights and decision-making.",
      icon: <IconBolt className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Data is everything",
      description: "Data is the backbone of every tech citadel, fall in love with it.",
      icon: <IconChartBar className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto px-4 gap-4 sm:gap-6">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-6 sm:py-8 md:py-10 relative group/feature dark:border-neutral-800",
        // Only show borders on larger screens
        "lg:border-r",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-3 sm:mb-4 relative z-10 px-4 sm:px-6 md:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-4 sm:px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-4 sm:h-6 group-hover/feature:h-6 sm:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 sm:px-6 md:px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
