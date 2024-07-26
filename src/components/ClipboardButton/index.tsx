import { useCopyClipboard } from "@/hooks/useCopyClipboard";
import { useState } from "react";
import { FaCopy, FaCheck  } from "react-icons/fa6";

type ClipboardButtonProps = {
  dataToClipboard: string
}

const iconProps = {
  size: 15,
  color: "black"
}

export const ClipboardButton = ({ dataToClipboard }: ClipboardButtonProps) => {

  const { isCopied, copyToClipboard } = useCopyClipboard();

  return (
    <button onClick={() => copyToClipboard(dataToClipboard)} className="absolute">
      { isCopied
        ? <FaCheck {...iconProps}/>
        : <FaCopy {...iconProps}/>
      }
    </button>
  )
}