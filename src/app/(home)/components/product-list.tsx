import { computeProductTotalPrice } from "@/helpers/products";
import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="min-w-[170px] w-[170px]">
          <ProductItem
            product={computeProductTotalPrice(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
