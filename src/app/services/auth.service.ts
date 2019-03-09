import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export class User {
  username: string;
  password: string;

  constructor(user: string, pass: string) {
    (this.username = user), (this.password = pass);
  }
}

interface loginRes {
  user: {
    username: string;
    password: string;
  };
}

@Injectable()
export class AuthService {
  private baseURL: string = "http://localhost:4000/api/";
  private Register: User;

  constructor(private http: HttpClient) {}

  public register(user: User): Observable<string> {
    return this.http.post<User>(this.baseURL + "register", user).pipe(
      map(res => {
        return "OK";
      })
    );
  }

  public login(user: User): Observable<User> {
    return this.http.post<loginRes>(this.baseURL + "login", user).pipe(
      map(res => {
        return new User(res.user.username, res.user.password);
      })
    );
  }
}
