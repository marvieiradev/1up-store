"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";
import { OrderProduct, User } from "@prisma/client";

export const createOrder = async (
  cartProdutcs: CartProduct[],
  userId: string,
) => {
  const order = await prismaClient.order.create({
    data: {
      userId,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: {
        createMany: {
          data: cartProdutcs.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
  return order;
};
