import { useCallback, useEffect, useState } from "react";
import { formatText } from "../services/LetterFormatter";
import { PortionTypeWriter } from "../services/PortionTypeWriter";
import styles from "./TypeWriter.module.css";

const TypeWriter: React.FC<{ text: string; onPrint?: () => void }> = (
  props
) => {
  const [printedText, setPrintedText] = useState("");
  const [hideText, setHideText] = useState(false);

  const runTypeWriter = useCallback((typeWriter: PortionTypeWriter) => {
    setTimeout(() => {
      if (typeWriter.hasNext) {
        setPrintedText(() => formatText(typeWriter.next()));
        runTypeWriter(typeWriter);
      } else {
        setTimeout(() => {
          setHideText(true);
          props.onPrint?.();
        }, 500);
      }
    }, 500);
  }, []);

  useEffect(() => {
    setPrintedText("");
    setHideText(false);
    const typeWriter = new PortionTypeWriter(props.text);
    runTypeWriter(typeWriter);
  }, [props.text, runTypeWriter]);

  return <div className={styles.typeWriter}>{hideText ? "" : printedText}</div>;
};

export default TypeWriter;
