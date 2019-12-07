import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"]
})
export class PerfilComponent implements OnInit {
  constructor(public userService: UserService) {}

  public archivo: File = null;

  public options = {
    new_name: "",
    new_pass: "",
    new_email: ""
  };

  ngOnInit() {}

  cambiarDatos() {
    console.log(this.options);
    this.userService.modificarDatos(this.options);
  }

  subirArchivo(files: FileList) {
    this.archivo = files.item(0);
  }

  subirAvatar() {
    this.userService.cambiarAvatar(this.archivo).subscribe(
      data => {
        // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );
  }
}
