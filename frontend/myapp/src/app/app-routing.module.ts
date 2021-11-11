import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MensagemComponent } from './views/mensagem/mensagem.component';
import { Mensagem2Component } from './views/mensagem2/mensagem2.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "mensagem",
    component: MensagemComponent
  },
  {
    path:"mensagem2",
    component:Mensagem2Component

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
