import { ProductWithTotalPrice } from "@/helpers/products";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex min-w-[156px] flex-col gap-4">
      <div className=" relative flex min-h-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge className="py[2px] absolute left-2 top-2 px-2">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex justify-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="text-sm font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;