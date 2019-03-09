import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth-component/auth.component";
import { SimpleChatComponent } from "./components/simple-chat/simple-chat.component";

const appRoutes: Routes = [
  { path: "login", component: AuthComponent },
  { path: "chat", component: SimpleChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
