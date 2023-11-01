import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase md:px-10 lg:px-20" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
