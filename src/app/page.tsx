import Image from "next/image";

import { Input } from "@/components/ui/input"
import HomeHero from "@/components/homeHero/homeHero"
import Testimonials from "@/components/testimonials/testimonials"

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeHero/>
      <Testimonials/>
    </main>
  );
}
