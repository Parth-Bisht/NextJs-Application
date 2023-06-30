import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/shared/FirebaseConfig";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getPost = async (db) => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window);
      const db = getFirestore(app);
      getPost(db);
    }
  }, []);
  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
      <Hero />
      <Search />
      <GameList />
    </div>
  );
}
