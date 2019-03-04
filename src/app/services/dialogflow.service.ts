import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DialogflowService {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
  };

  constructor(private http: HttpClient) {}

  public getResponse(query: string) {
    let data = {
      query: query,
      lang: "es",
      sessionId: "12345"
    };
    return this.http.post(`${this.baseURL}`, data, this.httpOptions).pipe(
      map(res => {
        return res; //res.result.fulfillment.speech;
      })
    );
  }
}
