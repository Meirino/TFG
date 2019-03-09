import { Component, OnInit } from "@angular/core";
import { AuthService, User } from "src/app/services/auth.service";

@Component({
  selector: "bot-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  private newUserRegister: User = { username: "", password: "" };
  private loginInfo: User = { username: "", password: "" };
  private loggedUser: User = undefined;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  public register() {
    this.auth.register(this.newUserRegister).subscribe(res => {
      console.log(res);
    });
  }

  public login() {
    this.auth.login(this.loginInfo).subscribe(res => {
      this.loggedUser = res;
    });
  }
}
