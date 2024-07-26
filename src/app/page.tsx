"use client";
import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { HomeContent } from "@/components/HomeContent";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function Home() {
  const { themeOperator, toggleTheme } = useThemeContext();
  return (
    <>
      <div className={`${themeOperator} text-colorDark`}>
        <Header />
        <div className="pt-[140px] px-4">
          <HomeContent />
          <AboutMe />
        </div>
      </div>
    </>
  );
}
