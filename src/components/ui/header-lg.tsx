"use client";

import {
  BadgePercent,
  HomeIcon,
  LayoutList,
  LogOutIcon,
  ShoppingBasket,
  ShoppingCartIcon,
  UserCircle2,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import Cart from "./cart";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const HeaderLg = () => {
  const { status, data } = useSession();
  const { products } = useContext(CartContext);

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="flex justify-between p-[1.875rem] py-[1rem] lg:py-[0.5rem] items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold">
            <span className="font-bold text-primary">1UP</span> Store
          </h1>
        </Link>

        <div className="flex flex-row justify-between py-2 gap-4 xl:gap-16">
          <Link href="/">
            <div className="menu justify-center gap-2 flex flex-row items-center">
              <HomeIcon size={16} />
              Início
            </div>
          </Link>

          <Link href="/orders">
            <div className="menu justify-center gap-2 flex flex-row items-center">
              <ShoppingBasket size={16} />
              Meus Pedidos
            </div>
          </Link>

          <Link href="/deals">
            <div className="menu justify-center gap-2 flex flex-row items-center">
              <BadgePercent size={18} />
              Ofertas
            </div>
          </Link>

          <Link href="/catalog">
            <div className="menu justify-center gap-2 flex flex-row items-center">
              <LayoutList size={16} />
              Catálogo
            </div>
          </Link>
        </div>

        <div className="flex flex-row gap-4">
          {status === "authenticated" && data?.user ? (
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-sm">{data.user.name}</p>
                  <p className="text-xs opacity-75">Boas compras!</p>
                </div>

                <Button
                  onClick={handleLogoutClick}
                  variant="ghost"
                  className="justify-start"
                >
                  <LogOutIcon size={20} />
                </Button>

              </div>
            </div>
          ) : (
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="w-full justify-center gap-2"
            >
                <UserCircle2 size={16} />
              Fazer Login
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="relative gap-4">
                <ShoppingCartIcon />
                {products.length > 0 && (
                  <Badge className="absolute text-xs left-8 top-0 py-0 px-1">
                    <span>{products.length}</span>
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[350px]">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </div>
  );
};

export default HeaderLg;
