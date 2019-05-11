import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "TFG-Angular";

  constructor(public auth: AuthService, public user: UserService) {}

  ngOnInit() {
    this.auth.loginRefresh().subscribe(res => {
      this.user.currentUser = res;
      console.log(res);
    });
  }
}
