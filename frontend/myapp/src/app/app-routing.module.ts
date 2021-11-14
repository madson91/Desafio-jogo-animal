import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MensagemPersComponent } from './views/mensagem-pers/mensagem-pers.component';
import { MensagemComponent } from './views/mensagem/mensagem.component';
import { MensagemImputComponent } from './views/mensagem-imput/mensagem-imput.component';

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
    path: "mensagem-pers",
    component: MensagemPersComponent
  }
  ,
  {
    path: "mensagem-input",
    component: MensagemImputComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
