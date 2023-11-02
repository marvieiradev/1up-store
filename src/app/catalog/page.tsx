import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <>
      <div className="flex flex-col gap-8 p-5 md:px-10 lg:px-20">
        <Badge
          variant="heading"
        >
          <ShapesIcon size={16} />
          Catálogo
        </Badge>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 md:px-10 lg:px-20">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
