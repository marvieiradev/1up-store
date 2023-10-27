import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
      <h2 className="font-bold text-primary">Aguarde...</h2>
      <LoaderIcon />
    </div>
  );
};

export default Loading;
