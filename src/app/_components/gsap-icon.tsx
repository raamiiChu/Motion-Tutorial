import Image from "next/image";

import { cn } from "@/lib/utils";

const GsapIcon = ({ className }: { className?: string }) => {
  return (
    <div
      role="img"
      className={cn("relative size-16 bg-transparent", className)}
    >
      <Image src="/GSAP.png" alt="GSAP" fill className="object-contain" />
    </div>
  );
};
export default GsapIcon;
