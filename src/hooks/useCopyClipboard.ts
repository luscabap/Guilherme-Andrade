import { useState } from "react";

export const useCopyClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    } catch (err) {
      console.log(err);
    }

  }
  
  return { copyToClipboard, isCopied } 
}