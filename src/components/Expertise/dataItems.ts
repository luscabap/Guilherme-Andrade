import { v4 as uuidv4 } from "uuid";
import { GoLaw } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";

export const dataItems = [
  {
    id: uuidv4(),
    description: "Realizamos diligências entre fóruns e unidades prisionais na Baixada Santista, garantindo o cumprimento eficiente de prazos e a entrega de documentos necessários.",
    title: "Diligências Jurídicas",
    icon: GoLaw,
    primary: true
  },
  {
    id: uuidv4(),
    description: "Oferecemos assessoria completa em diversas áreas do Direito, tanto no âmbito cível quanto no criminal. Nosso trabalho abrange desde a orientação inicial até a defesa e representação em juízo.",
    title: "Atuação em Processos Cíveis e Criminais",
    icon: FaBook,
    primary: false
  },
  {
    id: uuidv4(),
    description: "Fornecemos consultoria em questões jurídicas específicas, ajudando nossos clientes a entender suas opções legais e a tomar decisões informadas.",
    title: "Consultoria Jurídica Especializada",
    icon: FaMagnifyingGlass,
    primary: true
  },
  {
    id: uuidv4(),
    description: "Elaboramos e revisamos contratos, petições e outros documentos jurídicos, garantindo que estejam em conformidade com as normas legais e atendam às necessidades do cliente.",
    title: "Elaboração e Revisão de Documentos",
    icon: IoNewspaperOutline,
    primary: false
  },
  {
    id: uuidv4(),
    description: "Monitoramos de perto o andamento dos processos, fornecendo relatórios regulares e atualizações para que nossos clientes estejam sempre informados sobre o status de suas questões legais.",
    title: "Acompanhamento Processual",
    icon: CiBookmark,
    primary: true
  },
  {
    id: uuidv4(),
    description: "Atuamos na mediação e negociação de acordos, buscando soluções que atendam aos interesses das partes envolvidas e evitem litígios prolongados.",
    title: "Negociação e Mediação",
    icon: FaHandsHelping,
    primary: false
  },
]