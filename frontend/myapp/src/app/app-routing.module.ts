import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MensagemPersComponent } from './views/mensagem-pers/mensagem-pers.component';
import { MensagemComponent } from './views/mensagem/mensagem.component';
import { MensagemInputCaractComponent } from './views/mensagem-input-caract/mensagem-input-caract.component';
import { MensagemImputComponent } from './views/mensagem-imput/mensagem-imput.component';
import { MsgVencedoraComponent } from './views/msg-vencedora/msg-vencedora.component';
import { MensagemPers2Component } from './views/mensagem-pers2/mensagem-pers2.component';
import { MensagemErroComponent } from './views/mensagem-erro/mensagem-erro.component';

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
  },
  {
    path: "mensagem-pers2",
    component: MensagemPers2Component
  }
  ,
  {
    path: "mensagem-input",
    component: MensagemImputComponent
  }
  ,
  {
    path: "mensagem-input-caract",
    component: MensagemInputCaractComponent
  }
  ,
  {
    path: "mensagem-vencedora",
    component: MsgVencedoraComponent
  }
  ,
  {
    path: "mensagem-erro",
    component: MensagemErroComponent
  }
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
