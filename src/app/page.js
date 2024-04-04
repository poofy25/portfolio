import Image from "next/image";

import Navbar from "@/components/Navbar/NavBar";
import HeroComponent from "@/components/Home/Home";


export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between bg-primary">
        <HeroComponent/>
      </main>
    </>
  );
}
