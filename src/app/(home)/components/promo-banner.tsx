import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="mr-5 ml-5">
      <Image
        height={0}
        width={0}
        className="h-[150px] w-full md:h-[150px] lg:h-[200px] xl:h-[250px] banner"
        sizes="100vw"
        alt={alt}
        {...props}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default PromoBanner;
