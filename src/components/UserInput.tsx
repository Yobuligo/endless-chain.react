import { useEffect, useRef, useState } from "react";

const UserInput: React.FC<{
  onConfirm: (text: string) => void;
  typeWriterActive: boolean;
}> = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onConfirm(enteredText);
  };

  useEffect(() => {
    if (props.typeWriterActive) {
      setEnteredText("");
      setDisabled(true);
    } else {
      setDisabled(false);
      input.current?.focus();
      input.current?.select()
    }
  }, [props.typeWriterActive]);

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          id="userInput"
          name="userInput"
          type="text"
          value={enteredText}
          onChange={(event) => setEnteredText(event.target.value)}
          disabled={disabled}
          ref={input}
        />
        <button>Confirm</button>
      </form>
    </>
  );
};

export default UserInput;
