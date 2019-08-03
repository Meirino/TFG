import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "ejercicio1",
  templateUrl: "./ejercicio1.component.html",
  styleUrls: ["./ejercicio1.component.scss"]
})
export class Ejercicio1Component implements OnInit {
  constructor(private userservice: UserService) {}

  password1: String = "";
  password2: String = "";

  progress1: Number = 0;
  progress2: Number = 0;

  ngOnInit() {}

  onSubmit() {
    // Comprobar fuerza de ambas contraseñas
    if (
      this.validarPassword(this.password1) > 0 &&
      this.validarPassword(this.password2) > 0
    ) {
      // Llamar al servicio de usuario para que de el ejercicio como completado
      this.userservice.completarEjercicio(1);
    } else {
      // Mostrar mensaje de seguir intentándolo
    }
    // Si pasa la verificación, añadir a la base de datos el ejercicio completado
  }

  onKey1(event: any) {
    this.progress1 = this.validarPassword(event.target.value);
  }

  onKey2(event: any) {
    this.progress2 = this.validarPassword(event.target.value);
  }

  validarPassword(pass) {
    let puntuacion = 0;

    // Puntos longitud
    if (pass.length < 8) {
      return 0;
    } else {
      puntuacion = +(pass.length * 4);
    }

    // Puntos por mayúsculas
    var mayúsculas = pass.length - pass.replace(/[A-Z]/g, "").length;
    if (mayúsculas === 0) {
      return 0;
    } else {
      puntuacion = +((pass.length - mayúsculas) * 2);
    }

    // Puntos por minúsculas
    var minúsculas = pass.length - pass.replace(/[a-z]/g, "").length;
    if (minúsculas === 0) {
      return 0;
    } else {
      puntuacion = +((pass.length - minúsculas) * 2);
    }

    // Puntos por números
    var numeros = pass.length - pass.replace(/[0-9]/g, "").length;
    if (numeros === 0) {
      return 0;
    } else {
      puntuacion = +((pass.length - numeros) * 4);
    }

    // Puntos por símbolos
    var simbolos = pass.length - pass.replace(/[/ñ@_-|]/g, "").length;
    if (simbolos === 0) {
      return 0;
    } else {
      puntuacion = +((pass.length - simbolos) * 6);
    }

    if (puntuacion > 100) {
      return 100;
    } else {
      return puntuacion;
    }
  }
}
