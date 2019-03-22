import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DialogflowService {
  public baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  public token: string = environment.token;
  public httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
  };

  constructor(public http: HttpClient) {}

  public getResponse(query: string): Observable<string> {
    let data = {
      query: query,
      lang: "es",
      sessionId: "12345"
    };
    return this.http.post<any>(`${this.baseURL}`, data, this.httpOptions).pipe(
      map(res => {
        return res.result.fulfillment.speech;
      })
    );
  }
}
