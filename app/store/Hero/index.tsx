import React from "react";
import CategoryCards, {
  type CardType,
} from "@/components/custom/categoryCards";
import { Drill, MessageCircleIcon, PocketKnife, Waypoints } from "lucide-react";

const dataClassName =
  "size-12 transform-gpu fill-emerald-100 stroke-emerald-200 transition-colors group-hover:fill-emerald-200 ";

const data: CardType[] = [
  {
    title: "Category 1",
    content: <PocketKnife className={dataClassName} />,
  },
  {
    title: "Category 2",
    content: <Drill className={dataClassName} />,
  },
  {
    title: "Category 3",
    content: <MessageCircleIcon className={dataClassName} />,
  },
  {
    title: "Category 4",
    content: <Waypoints className={dataClassName} />,
  },
];

function StoreHeroSection() {
  return (
    <div className="w-full min-h-max container px-0 bg-neutral-100 rounded-3xl py-12 lg:flex justify-between overflow-hidden">
      <div className=" px-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-dmsans text-gray-900 mb-12">
            Explore Various
            <br /> Products in One Place
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
        </div>
        <div className="-translate-x-6 md:translate-x-5 lg:translate-x-9">
          <CategoryCards data={data} />
        </div>
      </div>
    </div>
  );
}

export default StoreHeroSection;
