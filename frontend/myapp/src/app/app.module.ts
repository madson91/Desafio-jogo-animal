import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MensagemComponent } from './views/mensagem/mensagem.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { MensagemPersComponent } from './views/mensagem-pers/mensagem-pers.component';
import { MensagemImputComponent } from './views/mensagem-imput/mensagem-imput.component';
import { HttpClientModule } from '@angular/common/http';
import { MsgVencedoraComponent } from './views/msg-vencedora/msg-vencedora.component';
import { MensagemPers2Component } from './views/mensagem-pers2/mensagem-pers2.component';
import { MensagemErroComponent } from './views/mensagem-erro/mensagem-erro.component';
import { MensagemInputCaractComponent } from './views/mensagem-input-caract/mensagem-input-caract.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MensagemComponent,
    HomeComponent,
    MensagemPersComponent,
    MensagemImputComponent,
    MsgVencedoraComponent,
    MensagemPers2Component,
    MensagemErroComponent,
    MensagemInputCaractComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
