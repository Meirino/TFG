import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

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
    "Diana",
    "123456789",
    "diana@bot.com",
    "/avatars/bot.jpg"
  );

  constructor() {}
}
