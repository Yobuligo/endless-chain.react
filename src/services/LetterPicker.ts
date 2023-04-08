import { Letters } from "./Letters";

export class LetterPicker {
  next() {
    const positionInAlphabet = Math.floor(Math.random() * Letters.length);
    return Letters[positionInAlphabet];
  }
}
