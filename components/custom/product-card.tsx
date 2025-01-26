import { product } from "@/static/product";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  product: product;
  isOwnProduct: boolean;
}

export default function ProductCard({
  product,
  isOwnProduct,
}: ProductCardProps) {
  return (
    <div className={`rounded-lg relative border p-4 bg-blue-200`}>
      <div className="relative aspect-square mb-4">
        <div className="size-full p-4 bg-sky-400/50 rounded-md">
          {isOwnProduct && (
            <span className="text-xs bg-amber-300 px-3 py-2 rounded-full">
              20% OFF
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">${product.price}</p>
          <Button variant="outline" asChild>
            <Link href={`/store/${product.id}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
