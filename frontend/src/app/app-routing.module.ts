import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth-component/auth.component";
import { SimpleChatComponent } from "./components/simple-chat/simple-chat.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

const appRoutes: Routes = [
  { path: "index", component: AuthComponent },
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "login", component: AuthComponent },
  { path: "chat", component: SimpleChatComponent },
  { path: "perfil", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
