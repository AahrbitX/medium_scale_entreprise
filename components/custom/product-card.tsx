import { Button } from "@/components/ui/button";
import { productType } from "@/static/types/product";
import { Tag } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: productType;
  isOwnProduct: boolean;
}

export default function ProductCard({
  product,
  isOwnProduct,
}: ProductCardProps) {
  const price = product.price[0].price;

  return (
    <div
      className={`rounded-3xl h-[28rem] w-[22rem] relative border p-4 bg-neutral-200 flex flex-col`}
    >
      <div className="relative mb-4 flex-grow">
        <div className="size-full p-4 bg-zinc-400/70 rounded-xl">
          {isOwnProduct && (
            <span className="text-xs bg-emerald-300 px-3 py-2 rounded-md">
              20% OFF
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3
          className="font-semibold text-2xl line-clamp-1 "
          title={product.name}
        >
          {product.name}
        </h3>
        <span className="bg-lime-200 hover:bg-lime-300 cursor-pointer inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full">
          <Tag size={14} />
          {product.category}
        </span>
        <p className="text-sm text-gray-500 mt-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-8">
          <p className="font-bold text-2xl">${price}</p>
          <Button variant="outline" asChild className="rounded-xl">
            <Link href={`/store/${product.id}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
