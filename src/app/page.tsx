"use client";
import { HomeContent } from "@/components/HomeContent";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function Home() {
  const { themeOperator, toggleTheme } = useThemeContext();
  return (
    <>
      <div className={`${themeOperator} pt-[140px] text-colorDark`}>
        <HomeContent />
      </div>
    </>
  );
}
