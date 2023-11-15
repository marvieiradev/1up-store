import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="mr-5 ml-5 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
      <Image
        height={0}
        width={0}
        className="h-[150px] w-full md:h-[150px] lg:h-[180px] xl:h-[220px] 2xl:h-[320px] banner"
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
