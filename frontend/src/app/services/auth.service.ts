import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {stringify} from 'querystring';
import { User } from '../models/user';
import { LoginObject } from '../models/login';
import { Session } from '../models/session';

// tslint:disable-next-line:class-name
export interface loginRes {
  success: boolean;
  message: string;
  token: string;
  userdata: {
    id: number;
    user_name: string;
    email: string;
  };
}

@Injectable()
export class AuthService {
  public baseURL = 'http://localhost:8000/api/v1/';
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
    return this.http.post<User>(this.baseURL + 'register', user).pipe(
      map(res => {
        return 'OK';
      }),
      catchError(this.handleError)
    );
  }

  /* Realiza la petición de login con los datos del usuario y recibe el resultado
  Posteriormente guarda el ID y el token de sesión en el navegador */
  public login(loginobj: LoginObject): Observable<Session> {
    return this.http.post<loginRes>(this.baseURL + 'login', {email: loginobj.email, password: loginobj.password}).pipe(
      map(res => {
        console.log(res);
        localStorage.setItem('user_id', res.userdata.id.toString());
        localStorage.setItem('user_token', res.token);

        return new Session(res.token, new User(res.userdata.user_name, res.userdata.email, res.userdata.id));
      }),
      catchError(this.handleError)
    );
  }

  /* Comprueba si existe un token de sesión almacenado en el navegador
  Si existe, manda una petición al servidor para que recoger los datos del usuario  */
  public loginRefresh(): Observable<Session> {
    if (localStorage.getItem('user_id') && localStorage.getItem('user_token')) {
      console.log(`ID del usuario: ${localStorage.getItem('user_id')}`);
      console.log(`Token del usuario: ${localStorage.getItem('user_token')}`);
      try {
        return this.http
          .get<loginRes>(this.baseURL + 'refreshLogin', { headers: {authorization: 'Bearer ' + localStorage.getItem('user_token')}})
          .pipe(
            map(res => {
              return new Session(
                res.token,
                new User(
                  res.userdata.user_name,
                  res.userdata.email,
                  res.userdata.id
                )
              );
            })
          );
      } catch (error) {
        /* En caso de error, lo mejor es hacer una petición para que el servidor borre los token de sesión
        y borrar el localStorage */
        console.log('Ha ocurrido un error');
      }
    }
  }

  public cerrarSesion(): Observable<loginRes> {
    const id = localStorage.getItem('user_id');
    const token = localStorage.getItem('user_token');
    if (id && token) {
      try {
        return this.http
          .get<loginRes>(this.baseURL + 'logout', { headers: {authorization: 'Bearer ' + token}});
      } catch (error) {
        this.logInErrorSubject.next('Algo ha salido mal :(');
      }
    }
  }

  public checkEmail(email: string) {
    return this.http.get(this.baseURL + `email/${email}`);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      if (error.status === 409) {
        errorMessage = 'Ya existe un usuario registrado con ese correo.';
      }
      if (error.status === 500) {
        errorMessage = 'Algo salió mal.';
      }
      if (error.status === 500) {
        errorMessage = 'Algo salió mal.';
      }
      if (error.status === 404) {
        errorMessage = 'Usuario no encontrado. Revise los datos.';
      }
      if (error.status === 401) {
        errorMessage = 'Contraseña incorrecta.';
      }
    }
    return throwError(errorMessage);
  }
}
