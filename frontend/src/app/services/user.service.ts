import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export class User {
  username: string;
  password: string;
  email: string;
  id: string;

  constructor(user: string, email, id) {
    (this.username = user), (this.email = email), (this.id = id);
  }
}

@Injectable()
export class UserService {
  private baseURL: string = "http://192.168.1.35:4000/api/";

  public currentUser = undefined;
  public botUser = new User("AI", "AI@bot.com", "bot");

  constructor(private http: HttpClient) {}

  public modificarDatos(options: { new_name: string; new_pass: string; new_email: string; }) {
    if (options.new_name === "") {
      options.new_name = this.currentUser.username;
    }
    if (options.new_email === "") {
      options.new_email = this.currentUser.email;
    }
    if (options.new_pass === "") {
      options.new_pass = undefined;
    }

    this.http.put(this.baseURL + "datos", {id: this.currentUser.id, options: options}).subscribe(
      result => {
        this.currentUser.username = options.new_name;
        this.currentUser.email = options.new_email;
      }
    );
    console.log(options);
  }
}
