"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import { Separator } from "@radix-ui/react-separator";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/products";
import { getOrderStatus } from "./helpers/status";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subTotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);
      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subTotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" className="h-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="font-bold uppercase text-sm">Pedido com {order.orderProducts.length} produto(s)</p>
              <span className="text-xs opacity-50">Feito em {format(order.cretedAt, "d/MM/y 'às' HH:mm")}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p className="font-bold uppercase">Status</p>
                  <p className="text-[#8162ff] uppercase">{getOrderStatus(order.status)}</p>
                </div>

                <div>
                  <p className="font-bold uppercase">Data</p>
                  <p className="opacity-50">
                    {format(order.cretedAt, "d/MM/y")}
                  </p>
                </div>

                <div>
                  <p className="font-bold uppercase">Pagamento</p>
                  <p className="opacity-50">Cartão</p>
                </div>
              </div>
              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}

              <div className="w- flex h-full flex-col gap-1 text-xs">
                <Separator />

                <div className="flex h-full justify-between py-3">
                  <p>Subtotal</p>
                  <p>R$ {subTotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex h-full justify-between py-3">
                  <p>Entrega</p>
                  <p>GRÁTIS</p>
                </div>

                <Separator />

                <div className="flex h-full justify-between py-3">
                  <p>Descontos</p>
                  <p>-R$ {totalDiscounts.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex h-full justify-between py-3 text-sm font-bold">
                  <p>Total</p>
                  <p>R$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
