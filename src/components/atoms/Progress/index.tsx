import { use, useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import { useRouter } from "next/router";

const ProgressDemo = ({ finished }: any) => {
  const [progress, setProgress] = useState(13);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (finished) {
      const timer = setTimeout(() => setProgress(100), 1500);
      return () => clearTimeout(timer);
    }
  }, [finished]);

  useEffect(() => {
    if (progress === 100) {
      void router.push("/");
    }
  }, [progress]);

  return (
    <Progress.Root
      className="relative h-[25px] w-[300px] overflow-hidden rounded-full bg-slate-200"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-emerald-100 transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;
