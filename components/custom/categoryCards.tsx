import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardType = {
  title: string;
  content: ReactNode;
};

export function CategoryCards({ data }: { data: CardType[] }) {
  return (
    <div className="inline-flex">
      {data.map((card, index) => (
        <Card
          className={cn(
            "transform-gpu hover:rotate-0 hover:scale-110 select-none cursor-pointer bg-lime-100 border-lime-300",
            index % 2 === 0 ? "rotate-12" : "-rotate-12",
            `-translate-x-[${index * 30}px]`
          )}
          content={card.content}
          description={`0${index}`}
          key={card.title}
          title={card.title}
        />
      ))}
    </div>
  );
}

export default CategoryCards;

function Card({
  title,
  description,
  content,
  className,
}: Readonly<{
  title: string;
  description: string;
  content: ReactNode;
  className: string;
}>) {
  return (
    <div
      className={cn(
        "group flex h-42 w-28 rotate-12 transform-gpu flex-col rounded-xl border border-neutral-500/30 bg-white p-3 shadow-2xl shadow-neutral-500/30 transition-all hover:shadow-xl dark:bg-neutral-800",
        className
      )}
    >
      <div className="flex size-20 items-center justify-center">{content}</div>
      <p className="text-neutral-200 text-xs dark:text-neutral-500">
        {description}
      </p>
      <p className="font-medium text-neutral-700 text-xs dark:text-neutral-400">
        {title}
      </p>
    </div>
  );
}
