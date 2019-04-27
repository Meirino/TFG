import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.service";
import { Subject } from "rxjs";

export interface LoginInfo {
  email: string;
  password: string;
}

export interface loginRes {
  user: {
    username: string;
    password: string;
    email: string;
    avatarURL: string;
  };
}

export interface errorRes {
  info: string;
}

@Injectable()
export class AuthService {
  public baseURL: string = "http://192.168.1.39:4000/api/";
  public Register: User;
  private logInErrorSubject = new Subject<string>();

  constructor(public http: HttpClient) {}

  public getLoginErrors(): Subject<string> {
    return this.logInErrorSubject;
  }

  public register(user: User): Observable<string> {
    return this.http.post<User>(this.baseURL + "register", user).pipe(
      map(res => {
        return "OK";
      })
    );
  }

  public login(user: LoginInfo): Observable<User> {
    try {
      return this.http.post<loginRes>(this.baseURL + "login", user).pipe(
        map(res => {
          return new User(
            res.user.username,
            res.user.password,
            res.user.email,
            res.user.avatarURL
          );
        })
      );
    } catch (error) {
      this.logInErrorSubject.next("Datos incorrectos");
    }
  }
}
