import { computeProductTotalPrice } from "@/helpers/products";
import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 pb-3 lg:flex-wrap lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 lg:gap-8 xl:gap-16 md:px-10 lg:px-20 list-itens">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] min-w-[170px]">
          <ProductItem
            product={computeProductTotalPrice(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
