import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mensagemDto } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-input-caract',
  templateUrl: './mensagem-input-caract.component.html',
  styleUrls: ['./mensagem-input-caract.component.scss']
})
export class MensagemInputCaractComponent implements OnInit {

  title:string;
  msgD: mensagemDto; 

  caracteristica:string = "";

  constructor(private animalService:AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.title = this.animalService.title; 
    this.msgD =  this.animalService.mensagemDto;
  }

  createAnimal():void {
    this.msgD.caracteristica = this.caracteristica;
    console.log(this.caracteristica)
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.animalService.mensagemDto = obj;
      this.router.navigate(["mensagem"])
    })
  }

  cancel():void {
    this.router.navigate(["mensagem-erro"]);
  }

}

