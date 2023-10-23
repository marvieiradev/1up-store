import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import CartProvider, { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Cart = () => {
    const {products} = useContext(CartContext)
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.4rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.map(product => <h1 key={product.id}>{product.name}</h1>)}
    </div>
  );
};

export default Cart;
