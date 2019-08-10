import { Component, OnInit } from "@angular/core";
import { AuthService, LoginInfo } from "src/app/services/auth.service";
import { User, UserService } from "src/app/services/user.service";

@Component({
  selector: "bot-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  public newUserRegister: User = {
    username: "",
    password: "",
    email: "",
    id: ""
  };
  public errorMessage: string = undefined;
  public errorMessageLogin: string = undefined;

  public loginInfo: LoginInfo = { email: "", password: "password" };

  constructor(public auth: AuthService, public userService: UserService) {
    this.auth.getLoginErrors().subscribe(error => {
      this.errorMessage = error;
    });
  }

  ngOnInit() {}

  public register() {
    if (
      this.newUserRegister.email !== "" &&
      this.newUserRegister.password !== "" &&
      this.newUserRegister.username !== ""
    ) {
      this.auth.register(this.newUserRegister).subscribe(
        res => {
          this.errorMessage = "Registro completado";
        },
        error => {
          this.errorMessage = error;
        }
      );
    } else {
      this.errorMessage = "Datos incorrectos";
    }
  }

  public login() {
    try {
      this.auth.login(this.loginInfo).subscribe(
        res => {
          this.userService.currentUser = res;
        },
        err => {
          this.errorMessageLogin = err;
        }
      );
    } catch (error) {
      console.log("Error");
    }
  }

  public checkEmail() {
    return this.auth
      .checkEmail(this.newUserRegister.email)
      .subscribe(result => {
        console.log(result);
      });
  }
}
