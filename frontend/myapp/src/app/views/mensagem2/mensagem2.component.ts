import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem2',
  templateUrl: './mensagem2.component.html',
  styleUrls: ['./mensagem2.component.scss']
})
export class Mensagem2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  respostaYes():void{
    this.router.navigate(['/mensagem']);
  }

  no():void{
    this.router.navigate(['/']);
  }

}
