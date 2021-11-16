import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mensagemDto } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-pers',
  templateUrl: './mensagem-pers.component.html',
  styleUrls: ['./mensagem-pers.component.scss']
})
export class MensagemPersComponent implements OnInit {

  title = "Este animal que você pensou vive na água?";
  msgD: mensagemDto;

  constructor(private router: Router, private animalService: AnimalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ButoonSim(): void {
    this.msgD = {
      resposta: true,
      tipoAnimal:this.animalService.TIPO_AGUA

    };
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.msgD = obj
      this.animalService.mensagemDto = obj;
      this.router.navigate(["mensagem-pers2"])
      this.animalService.title = obj.mensagem!;
      
    })
  }

  buttonNao(): void {
    this.msgD = {
      resposta: false,
      tipoAnimal:this.animalService.TIPO_TERRA
    };
    this.animalService.read(this.msgD).subscribe((obj) => {
      this.msgD = obj
      this.animalService.mensagemDto = obj;
      this.router.navigate(["mensagem-pers2"])
      this.animalService.title = obj.mensagem!;
    })
  }

}
