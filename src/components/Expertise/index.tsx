import { dataItems } from "@/data/dataItems";
import { ItemDescriptive } from "../ItemDescriptive";
import { TitleSection } from "../TitleSection";

export const Expertise = () => {
  return (
    <div id="area-atuacao">
      <TitleSection texto="Área de atuação"/>
      <div className="flex flex-col gap-8 my-4 items-center justify-center 2xl:flex-row flex-wrap">
        { dataItems.map(item => (
          <ItemDescriptive key={item.id} description={item.description} icon={<item.icon className="text-colorPrimary" size={45}/>} title={item.title} primary={item.primary}/>
        )) }
      </div>
    </div>
  )
}