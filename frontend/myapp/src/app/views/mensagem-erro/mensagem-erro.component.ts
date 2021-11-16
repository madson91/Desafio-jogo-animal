import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.scss']
})
export class MensagemErroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ok():void {
    this.router.navigate(["mensagem-input"]);
  }


}
