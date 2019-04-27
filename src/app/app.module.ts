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

import { MzNavbarModule } from "ngx-materialize";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    SimpleChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzNavbarModule
  ],
  providers: [DialogflowService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
