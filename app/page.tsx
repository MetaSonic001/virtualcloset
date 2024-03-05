"use client";


import { useRouter } from "next/navigation";
import Home from "./Home/page";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      
      <Home/>
      
    </main>
  );
}
