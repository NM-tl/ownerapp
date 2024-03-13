import Image from "next/image";
import { Inter } from "next/font/google";
import IntroNavBar from "@/ui/Intro/introNavBar/introNavBar";
import Header from "@/ui/Intro/header/header";
import Hero from "@/ui/Intro/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 ${inter.className}`}
    >
      <Header />
      <Hero />
      <IntroNavBar />
    </main>
  );
}
