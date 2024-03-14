import BentoGrid from "@/components/BentoGrid";
import DescripcionWrapper from "@/components/DescripcionWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <DescripcionWrapper />
      <BentoGrid />
    </main>
  );
}
