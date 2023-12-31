"use client";

import {
  BadgePercent,
  HomeIcon,
  LayoutList,
  LogOutIcon,
  MenuIcon,
  ShoppingBasket,
  ShoppingCartIcon,
  UserCircle2,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const HeaderSm = () => {
  const { status, data } = useSession();
  const { products } = useContext(CartContext);

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div>
      <Card className="flex justify-between p-[1.875rem] py-[1rem] lg:py-[0.5rem] items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>
            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>

                <Separator />
              </div>
            )}

            <div className="mt-2 flex flex-col gap-2">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <UserCircle2 size={16} />
                  Fazer Login
                </Button>
              )}

              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon size={16} />
                  Fazer Logout
                </Button>
              )}
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ShoppingBasket size={16} />
                    Meus Pedidos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/deals">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <BadgePercent size={18} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LayoutList size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="font-bold text-primary">1UP</span> Store
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="relative">
              <ShoppingCartIcon />
              {products.length > 0 && (
                <Badge className="absolute text-xs left-6 top-0 py-0 px-1">
                  <span>{products.length}</span>
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[350px]">
            <Cart />
          </SheetContent>
        </Sheet>
      </Card>
    </div>
  );
};

export default HeaderSm;
