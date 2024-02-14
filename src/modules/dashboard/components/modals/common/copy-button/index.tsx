import { useClipboardCopy } from "@common/hooks/useClipboardCopy";
import { ButtonHTMLAttributes } from "react";
import toast from "react-hot-toast";

export const CopyButton = ({
  className,
  text,
  ...rest
}: ButtonHTMLAttributes<any> & { text: string }) => {
  const { copyTextToClipboard } = useClipboardCopy();

  const handleCopy = () => {
    copyTextToClipboard(text)
      .then(() => toast.success("Text copied"))
      .catch(() => toast.error("Unable to copy text"));
  };

  return (
    <button
      onClick={handleCopy}
      className={`${
        className || ""
      } bg-[#44CF9540] px-4 py-1 rounded text-[#42A87D] text-[0.625rem] font-bold`}
      {...rest}
    >
      Copy
    </button>
  );
};
