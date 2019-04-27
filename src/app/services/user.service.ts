import { Injectable } from "@angular/core";

export class User {
  username: string;
  password: string;
  email: string;
  avatarURL: string;

  constructor(user: string, pass: string, email, avatarURL) {
    (this.username = user),
      (this.password = pass),
      (this.email = email),
      (this.avatarURL = avatarURL);
  }
}

@Injectable()
export class UserService {
  public currentUser = undefined;
  public botUser = new User(
    "AI",
    "123456789",
    "AI@bot.com",
    "/avatars/bot.jpg"
  );

  constructor() {}
}
