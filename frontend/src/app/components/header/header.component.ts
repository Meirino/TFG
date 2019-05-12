import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "bot-navbar",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    public userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  cerrarSesion() {
    this.authService.cerrarSesion().subscribe(res => {
      if (res) {
        this.userService.currentUser = undefined;
      } else {
        console.log("Ha ocurrido un error");
      }
    });
  }
}
