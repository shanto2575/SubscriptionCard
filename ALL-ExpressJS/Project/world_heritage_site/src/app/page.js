import HeritageBanner from "@/components/shared/Banner";
import FeaturedPage from "@/components/shared/Feature";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeritageBanner/>
      <FeaturedPage/>
    </div>
  );
}
