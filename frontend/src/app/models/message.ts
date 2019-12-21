import {User} from './user';


export class Message {
  content: string;
  bot: boolean;
  user: User;

  constructor(content: string, bot: boolean, user: User) {
    this.content = content;
    this.bot = bot;
    this.user = user;
  }
}
