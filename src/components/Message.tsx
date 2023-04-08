import { IMessage } from "../model/IMessage";
import { MessageType } from "../model/MessageType";
import styles from "./Message.module.css";

const Message: React.FC<{ message: IMessage }> = (props) => {
  const getMessageStyle = () => {
    switch (props.message.type) {
      case MessageType.Error: {
        return styles.error;
      }
      default: {
        return styles.info;
      }
    }
  };

  return <div className={getMessageStyle()}>{props.message.text}</div>;
};

export default Message;
