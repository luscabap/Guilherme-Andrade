"use client";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeContent } from "@/components/HomeContent";
import { Introduction } from "@/components/Introduction";
import { ModalWhatsapp } from "@/components/ModalWhatsapp";
import { useThemeContext } from "@/hooks/useThemeContext";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

export default function Home() {
  const { themeOperator, toggleTheme } = useThemeContext();

  const [modalWPIsOpen, setModalWPIsOpen] = useState(false);

  const toggleModalWP = () => {
    setModalWPIsOpen(prevValue => !prevValue)
  }


  return (
    <>
      <div className={`${themeOperator} text-colorFont bg-colorBackground md:text-xl lg:text-2xl 2xl:text-3xl`}>
        <div className="rounded-full bg-colorPrimary bottom-2 right-2 p-2 fixed z-50">
            {modalWPIsOpen ? <IoMdClose className="w-14 h-14" onClick={toggleModalWP}/> : <FaWhatsapp className="w-14 h-14" onClick={toggleModalWP}/>}
        </div>
        <AnimatePresence>
          {modalWPIsOpen && <ModalWhatsapp />}
        </AnimatePresence>
        <Header />
        <div className="pt-[160px] flex flex-col gap-12 px-4 lg:px-12 2xl:px-32">
          <Introduction />
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
