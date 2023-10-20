import Image, { ImageProps } from "next/image";

const PormoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="mt-5 h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PormoBanner;