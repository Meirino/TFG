import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DialogflowService {
  public baseURL: string = "http://192.168.1.44:4000/api/chat";
  private nextContext: string = "";
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(public http: HttpClient) {}

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
          console.log(res);
          this.nextContext = res.context;
          return res.text;
        })
      );
  }
}
