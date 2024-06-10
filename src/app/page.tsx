import Image from "next/image";

import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Resume Builder</h1>
     <Input type="email" placeholder="Email" />
    </main>
  );
}
