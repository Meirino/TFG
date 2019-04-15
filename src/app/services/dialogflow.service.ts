import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DialogflowService {
  public baseURL: string = "http://localhost:4000/api/chat";
  public token: string = environment.token;
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient) {}

  public getResponse(query: string): Observable<string> {
    let data = {};
    return this.http
      .post<any>(this.baseURL, { mensaje: query }, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res.text;
        })
      );
  }
}
