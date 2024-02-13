export const useClipboardCopy = () => {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      throw new Error("unable to copy");
    }
  }

  return { copyTextToClipboard };
};
