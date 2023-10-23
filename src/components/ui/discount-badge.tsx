import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge className={twMerge("py[2px] px-2", className)} {...props}>
      <ArrowDownIcon size={14} />
      {children}%
    </Badge>
  );
};

export default DiscountBadge;
