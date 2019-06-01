import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"]
})
export class PerfilComponent implements OnInit {
  constructor(public userService: UserService) {}

  public options = {
    new_name: "",
    new_pass: "",
    new_email: ""
  }

  ngOnInit() {}

  cambiarDatos() {
    console.log(this.options);
    this.userService.modificarDatos(this.options);
  }
}
