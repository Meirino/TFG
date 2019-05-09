import { Injectable } from "@angular/core";

export class User {
  username: string;
  password: string;
  email: string;
  id: string;

  constructor(user: string, pass: string, email, id) {
    (this.username = user),
      (this.password = pass),
      (this.email = email),
      (this.id = id);
  }
}

@Injectable()
export class UserService {
  public currentUser = undefined;
  public botUser = new User("AI", "123456789", "AI@bot.com", "bot");

  constructor() {}
}
