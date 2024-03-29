import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth-component/auth.component';
import { SimpleChatComponent } from './components/simple-chat/simple-chat.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EjerciciosComponent } from './components/ejercicios-component/ejercicios.component';
import { IndexComponent } from './components/index-component/index.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'chat', component: SimpleChatComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'ejercicios', component: EjerciciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
