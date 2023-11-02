import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <>
      <div className="flex flex-col gap-8 p-5 md:px-10 lg:px-20">
        <Badge
          variant="heading"
        >
          <PercentIcon size={16} />
          Ofertas
        </Badge>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 md:px-10 lg:px-20">
          {deals.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DealsPage;