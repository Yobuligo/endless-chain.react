import { useMemo, useState } from "react";
import Message from "./components/Message";
import TypeWriter from "./components/TypeWriter";
import UserInput from "./components/UserInput";
import { IMessage } from "./model/IMessage";
import { MessageType } from "./model/MessageType";
import { LetterPicker } from "./services/LetterPicker";

const App: React.FC = () => {
  const letterPicker = useMemo(() => new LetterPicker(), []);
  const [text, setText] = useState(letterPicker.next());
  const [message, setMessage] = useState<IMessage>({
    text: "",
    type: MessageType.Info,
  });

  const [typeWriterActive, setTypeWriterActive] = useState(true);

  const onConfirm = (enteredText: string) => {
    if (enteredText.toUpperCase() !== text.toUpperCase()) {
      setMessage({ text: "You lose", type: MessageType.Error });
      return;
    }

    setMessage({ text: "", type: MessageType.Info });
    setTypeWriterActive(true);
    setText((previous) => `${previous}${letterPicker.next()}`);
  };

  const onPrint = () => {
    setTypeWriterActive(false);
    setMessage({ text: "Enter the text", type: MessageType.Info });
  };

  return (
    <>
      <TypeWriter text={text} onPrint={onPrint} />
      <UserInput onConfirm={onConfirm} typeWriterActive={typeWriterActive} />
      {message ? <Message message={message} /> : ""}
    </>
  );
};

export default App;
