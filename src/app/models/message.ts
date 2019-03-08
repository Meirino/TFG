export class Message {
  content: string;
  bot: boolean;

  constructor(content: string, bot: boolean) {
    this.content = content;
    this.bot = bot;
  }
}
