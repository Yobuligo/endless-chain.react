export class PortionTypeWriter {
  private cursor = 0;

  constructor(private text: string) {}

  get hasNext(): boolean {
    return this.cursor < this.text.length;
  }

  next(): string {
    this.cursor++;
    return this.text.slice(0, this.cursor);
  }
}
