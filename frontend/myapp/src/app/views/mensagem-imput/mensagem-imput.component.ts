import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mensagemDto } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-imput',
  templateUrl: './mensagem-imput.component.html',
  styleUrls: ['./mensagem-imput.component.scss']
})
export class MensagemImputComponent implements OnInit {

  title: string;
  msgD: mensagemDto;
  descricaoAnimal: string;

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.title = this.animalService.title;
    this.msgD = this.animalService.mensagemDto;
  }

  createAnimal(): void {
    this.msgD.descricaoAnimal = this.descricaoAnimal;
    //this.msgD.caracteristica = "";
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.router.navigate(["mensagem-input-caract"])
      this.animalService.mensagemDto = obj;
      this.animalService.title = obj.mensagem!;
    })

  }

  cancel(): void {
    this.router.navigate(["mensagem-erro"]);
  }

}
