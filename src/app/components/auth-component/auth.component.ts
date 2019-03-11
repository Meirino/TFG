import { Component, OnInit } from "@angular/core";
import { AuthService, LoginInfo } from "src/app/services/auth.service";
import { User, UserService } from "src/app/services/user.service";

@Component({
  selector: "bot-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  private newUserRegister: User = {
    username: "",
    password: "",
    email: "",
    avatarURL: ""
  };
  private loginInfo: LoginInfo = { email: "", password: "password" };
  constructor(private auth: AuthService, private userService: UserService) {}

  ngOnInit() {}

  public register() {
    this.auth.register(this.newUserRegister).subscribe(res => {
      console.log(res);
    });
  }

  public login() {
    this.auth.login(this.loginInfo).subscribe(res => {
      this.userService.currentUser = res;
    });
  }
}
