import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  ok():void{
    this.router.navigate(['/mensagem2']);
  }
  cancel():void{
    this.router.navigate(['/']);
  }

}
