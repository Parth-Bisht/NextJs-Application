import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
      <Hero />
      <Search />
      <GameList />
    </div>
  );
}
