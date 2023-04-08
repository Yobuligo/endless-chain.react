export const formatText = (text: string): string => {
  let formattedText = "";
  for (const letter of text) {
    if (!formattedText) {
      formattedText += letter;
    } else {
      formattedText += ` ${letter}`;
    }
  }
  return formattedText;
};
