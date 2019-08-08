import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/header/header.component";
import { AuthComponent } from "./components/auth-component/auth.component";
import { DialogflowService } from "./services/dialogflow.service";
import { SimpleChatComponent } from "./components/simple-chat/simple-chat.component";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { EjerciciosComponent } from "./components/ejercicios-component/ejercicios.component";

import {
  MzNavbarModule,
  MzCardModule,
  MzValidationModule,
  MzInputModule
} from "ngx-materialize";
import { MzButtonModule } from "ngx-materialize";
import { MzTabModule } from "ngx-materialize";
import { MzProgressModule } from "ngx-materialize";
import { MzCollapsibleModule } from "ngx-materialize";
import { MessageComponentComponent } from "./components/simple-chat/message-component/message-component.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { Ejercicio1Component } from "./components/ejercicios-component/ejercicio1-component/ejercicio1.component";
import { ProgressComponent } from "./components/progress-component/progress.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    SimpleChatComponent,
    MessageComponentComponent,
    PerfilComponent,
    EjerciciosComponent,
    Ejercicio1Component,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzNavbarModule,
    MzTabModule,
    MzCardModule,
    MzValidationModule,
    MzInputModule,
    MzCollapsibleModule,
    MzProgressModule,
    MzButtonModule
  ],
  providers: [DialogflowService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
