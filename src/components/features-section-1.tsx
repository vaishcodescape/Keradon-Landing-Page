"use client"
import React, { useState, useEffect } from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} mounted={mounted} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
  title: "Simple Web Scraping",
  description:
    "Keradon simplifies web scraping by providing an easy-to-use interface for extracting data from websites without the need for complex coding and fancy libraries.",
},
{
  title: "Automated Web Data Extraction",
  description:
    "Extract and structure data from websites automatically, reducing manual effort and enabling faster research and analysis workflows.",
},
{
  title: "Advanced Data Analytics",
  description:
    "Uncover insights from large datasets with robust analytics tools, visualizations, and performance metrics tailored for data-driven decision-making.",
},
{
  title: "LLM-Powered Insights",
  description:
    "Leverage the power of large language models to gain deeper insights from your data, enabling more informed decision-making.",
},
{
  title: "Smart Data Filtering",
  description:
    "Target relevant data points using intelligent filters based on keywords, topics, domains, and other customizable parameters.",
},
{
  title: "Legitimacy of Data",
  description:
    "Keradon Scraped Data is verified for accuracy and reliability, ensuring you can trust the insights derived from it.",
},
{
  title: "Its simple and easy to use",
  description:
    "Keradon offers a user-friendly interface that simplifies the process of data extraction and analysis, making it accessible for everyone.",
},
{
  title: "Business Intelligence",
  description:
    "Leverage advanced analytics and reporting tools to gain insights into your business performance and make data-driven decisions.",
}
];

export const Grid = ({
  pattern,
  size,
  mounted,
}: {
  pattern?: number[][];
  size?: number;
  mounted?: boolean;
}) => {
  // Use deterministic patterns to prevent hydration mismatch
  const defaultPatterns = [
    [[7, 1], [8, 2], [9, 3], [10, 4], [11, 5]],
    [[8, 2], [9, 3], [10, 4], [11, 5], [7, 1]],
    [[9, 3], [10, 4], [11, 5], [7, 1], [8, 2]],
    [[10, 4], [11, 5], [7, 1], [8, 2], [9, 3]],
    [[11, 5], [7, 1], [8, 2], [9, 3], [10, 4]],
    [[7, 2], [8, 3], [9, 4], [10, 5], [11, 1]],
    [[8, 3], [9, 4], [10, 5], [11, 1], [7, 2]],
    [[9, 4], [10, 5], [11, 1], [7, 2], [8, 3]],
  ];

  const p = pattern ?? (mounted ? defaultPatterns[Math.floor(Math.random() * defaultPatterns.length)] : defaultPatterns[0]);
  
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: { width: number, height: number, x: string, y: string, squares: number[][], [key: string]: unknown }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], index: number) => (
            <rect
              strokeWidth="0"
              key={`${patternId}-${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
