import { ReactNode } from "react";
import styles from "./Card.module.css";

const Card: React.FC<{ children: ReactNode; className?: string }> = (props) => {
  const getClassNames = () => {
    if (props.className) {
      return `${props.className} ${styles.card}`;
    } else {
      return styles.card;
    }
  };
  return <div className={getClassNames()}>{props.children}</div>;
};

export default Card;
