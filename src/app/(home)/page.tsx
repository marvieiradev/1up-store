import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PormoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PormoBanner
        src="/banner-home.png"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PormoBanner
        src="/banner-mouses.png"
        alt="Até 55% de desconto em Mouses"
      />

      <div className="mt-8">
        <SectionTitle>teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
