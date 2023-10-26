"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { useContext, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


interface ProductInfoProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } =
    useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="mt-8 flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R$ {product.totalPrice.toFixed(2)}</h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descriçao</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="mt-8 font-bold uppercase">Adicionar ao carrinho</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col border-2 items-center max-w-[400px] rounded-lg text-center">
          <AlertDialogHeader>
            <AlertDialogTitle>Produto adicionado ao carrinho</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleAddToCartClick}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-bold italic">UP-Packet®</span>
            </p>
            <p className="text-sm text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-sm font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
