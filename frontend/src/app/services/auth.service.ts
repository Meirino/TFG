import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User, UserService } from "./user.service";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

// Interfaz para recoger los datos de login
export interface LoginInfo {
  email: string;
  password: string;
}

// Interfaz para recoger la respuesta del servidor
export interface loginRes {
  user: {
    username: string;
    sessionToken: string;
    email: string;
    id: string;
  };
}

export interface loginRefreshRes {
  username: string;
  sessionToken: string;
  email: string;
  id: string;
}

export interface SignoutRes {
  status: boolean;
}

// Interfaz para recoger errores
export interface errorRes {
  info: string;
}

@Injectable()
export class AuthService {
  public baseURL: string = "http://192.168.1.36:4000/api/";
  public Register: User;
  private logInErrorSubject = new Subject<string>();

  constructor(
    public http: HttpClient,
    public router: Router,
    public userService: UserService
  ) {}

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

  /* Realiza la petición de login con los datos del usuario y recibe el resultado
  Posteriormente guarda el ID y el token de sesión en el navegador */
  public login(user: LoginInfo): Observable<User> {
    try {
      return this.http.post<loginRes>(this.baseURL + "login", user).pipe(
        map(res => {
          localStorage.setItem("user_id", res.user.id);
          localStorage.setItem("user_token", res.user.sessionToken);

          return new User(res.user.username, res.user.email, res.user.id);
        })
      );
    } catch (error) {
      this.logInErrorSubject.next("Datos incorrectos");
    }
  }

  /* Comprueba si existe un token de sesión almacenado en el navegador
  Si existe, manda una petición al servidor para que recoger los datos del usuario  */
  public loginRefresh(): Observable<User> {
    if (localStorage.getItem("user_id") && localStorage.getItem("user_token")) {
      console.log(`ID del usuario: ${localStorage.getItem("user_id")}`);
      console.log(`Token del usuario: ${localStorage.getItem("user_token")}`);
      try {
        return this.http
          .post<loginRefreshRes>(this.baseURL + "refreshLogin", {
            user_id: localStorage.getItem("user_id"),
            user_token: localStorage.getItem("user_token")
          })
          .pipe(
            map(res => {
              this.userService.currentUser = new User(
                res.username,
                res.email,
                res.id
              );
              return new User(res.username, res.email, res.id);
            })
          );
      } catch (error) {
        /* En caso de error, lo mejor es hacer una petición para que el servidor borre los token de sesión
        y borrar el localStorage */
        console.log("Ha ocurrido un error");
      }
    }
  }

  public cerrarSesion(): Observable<boolean> {
    const id = localStorage.getItem("user_id");
    const token = localStorage.getItem("user_token");
    if (id && token) {
      try {
        return this.http
          .post<SignoutRes>(this.baseURL + "signout", {
            user_id: id,
            user_token: token
          })
          .pipe(
            map(res => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("user_token");
              this.router.navigateByUrl("/");

              return res.status;
            })
          );
      } catch (error) {
        this.logInErrorSubject.next("Algo ha salido mal");
      }
    }
  }
}
