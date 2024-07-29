"use client";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeContent } from "@/components/HomeContent";
import { useThemeContext } from "@/hooks/useThemeContext";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const { themeOperator, toggleTheme } = useThemeContext();
  return (
    <>
      <div className={`${themeOperator} text-colorFont bg-colorBackground`}>
        <Header />
        <div className="pt-[140px] px-4 flex flex-col gap-4">
          <HomeContent />
          <AboutMe />
          <Expertise />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
