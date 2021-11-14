import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-pers',
  templateUrl: './mensagem-pers.component.html',
  styleUrls: ['./mensagem-pers.component.scss']
})
export class MensagemPersComponent implements OnInit {

  public title = "Este animal que você pensou vive na água?";
  animais: Animal[] = [];
  msg:string[] = [];

  constructor(private router: Router, private animalService: AnimalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalService.read().subscribe(animais => {
      this.animais = animais
      //console.log(animais)
    })
  }

  ButoonSim(): void {
    this.animalService.getMessage(this.animalService.TIPO_AGUA).subscribe(msg =>{
      this.msg  = msg;
      this.title = msg[0];
      
    })
      //this.router.navigate(['/mensagem-pers']);
  }

  buttonNao(): void {
    this.animalService.getMessage(this.animalService.TIPO_TERRA).subscribe(msg =>{
      this.msg  = msg;
      this.title = msg[0];
      this.router.navigate(['/mensagem-input']);
    })
  }

}
