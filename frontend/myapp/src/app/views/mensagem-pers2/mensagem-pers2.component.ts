import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagemDto } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-pers2',
  templateUrl: './mensagem-pers2.component.html',
  styleUrls: ['./mensagem-pers2.component.scss']
})
export class MensagemPers2Component implements OnInit {
  
  title:string;
  msgD: mensagemDto;

  constructor(private router: Router, private animalService: AnimalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.animalService.title; 
    this.msgD =  this.animalService.mensagemDto;
  }

  ButoonSim(): void {
    this.msgD.resposta = true;
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.msgD = obj
      this.animalService.mensagemDto = obj;
      this.animalService.title = obj.mensagem!; 
      if(obj.mensagem =="Eu Venci!")
        this.router.navigate(["mensagem-vencedora"])
      
    })
  }

  buttonNao(): void {
    this.msgD.resposta = false;
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.msgD = obj
      this.animalService.mensagemDto = obj;
      this.animalService.title = obj.mensagem!; 
      if(obj.mensagem =="Qual animal você pensou?")
        this.router.navigate(["mensagem-input"])
      
    })
  }

}
