import { MessageType } from "./MessageType";

export interface IMessage {
  readonly text: string;
  readonly type: MessageType;
}
