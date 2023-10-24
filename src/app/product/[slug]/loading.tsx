import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[50px] m-auto gap-4">
      <h1 className="text-primary">Loading...</h1>
      <LoaderIcon/>
    </div>
  );
};

export default Loading;
