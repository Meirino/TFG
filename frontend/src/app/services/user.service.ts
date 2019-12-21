import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {Session} from '../models/session';

@Injectable()
export class UserService implements OnInit {
  private baseURL = 'http://18.212.103.97:4000/api/';

  public currentUser: Session = undefined;
  public botUser = new User('AI', 'AI@bot.com', 'bot');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // if (localStorage.getItem("user_id")) {
    //   this.currentUser = localStorage.getItem("user_id");
    // }
  }

  public modificarDatos(options: {
    new_name: string;
    new_pass: string;
    new_email: string;
  }) {
    if (options.new_name === '') {
      options.new_name = this.currentUser.username;
    }
    if (options.new_email === '') {
      options.new_email = this.currentUser.email;
    }
    if (options.new_pass === '') {
      options.new_pass = undefined;
    }

    this.http
      .put(this.baseURL + 'datos', {
        id: this.currentUser.id,
        options
      })
      .subscribe(result => {
        this.currentUser.username = options.new_name;
        this.currentUser.email = options.new_email;
      });
    console.log(options);
  }

  completarEjercicio(ejercicio_id: Number) {
    this.http
      .put(this.baseURL + 'ejercicios', {
        ejercicio: ejercicio_id,
        id: this.currentUser.id
      })
      .subscribe(result => {
        console.log(result);
      });
  }

  getUserLessonProgress() {
    return this.http.get(this.baseURL + 'lecciones/' + this.currentUser.id);
  }

  getUserExerciseProgress() {
    return this.http.get(this.baseURL + 'ejercicios/' + this.currentUser.id);
  }

  cambiarAvatar(archivo: File) {
    const formData: FormData = new FormData();
    formData.append(this.currentUser.id, archivo, archivo.name);
    return this.http.post(this.baseURL + 'avatar', formData);
  }
}
