import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/products";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;
  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  );
};
export default ProductDetailsPage;
