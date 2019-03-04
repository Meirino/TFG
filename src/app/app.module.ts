import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/header/header.component";
import { AuthComponent } from "./components/auth-component/auth.component";
import { DialogflowService } from "./services/dialogflow.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DialogflowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
