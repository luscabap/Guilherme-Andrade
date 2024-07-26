import Link from "next/link";

export const Menu = () => {
  return (
    <nav className="bg-colorPrimary absolute top-[140px] left-0 w-1/2 h-96 rounded-b-3xl">
      <ul className="flex flex-col justify-between p-4 items-start h-full">
        <Link href={"/"} className="text-xl underline text-colorLight">Home</Link>
        <Link href={"/"} className="text-xl underline text-colorLight">Sobre mim</Link>
        <Link href={"/"} className="text-xl underline text-colorLight">Área de Atuação</Link>
        <Link href={"/"} className="text-xl underline text-colorLight">Entre em contato</Link>
      </ul>
    </nav>
  );
};
