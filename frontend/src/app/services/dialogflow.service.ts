import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "./user.service";

@Injectable()
export class DialogflowService {
  public baseURL: string = "http://192.168.1.38:4000/api/chat";
  private nextContext: string = "";
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient, public userService: UserService) {}

  public getResponse(query: string): Observable<string> {
    let data = {};
    return this.http
      .post<any>(
        this.baseURL,
        { mensaje: query, context: this.nextContext },
        this.httpOptions
      )
      .pipe(
        map(res => {
          if (res.intent === "secureBrowsing - Phising Final") {
            console.log("¡Lección completada!");
            this.completeLesson(2);
          }
          this.nextContext = res.context;
          return res.text;
        })
      );
  }

  public completeLesson(id: Number) {
    this.http
      .put("http://192.168.1.38:4000/api/lecciones", {
        leccion: id,
        usuario: parseInt(this.userService.currentUser.id)
      })
      .subscribe(result => {
        console.log(result);
      });
  }
}
