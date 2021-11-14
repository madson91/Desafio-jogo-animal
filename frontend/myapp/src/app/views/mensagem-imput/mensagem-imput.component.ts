import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/components/animal.model';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-mensagem-imput',
  templateUrl: './mensagem-imput.component.html',
  styleUrls: ['./mensagem-imput.component.scss']
})
export class MensagemImputComponent implements OnInit {

  animal:Animal;   

  constructor(private animalService:AnimalService, private router: Router) { }

  ngOnInit(): void {
  }

  createAnimal():void {
    this.animalService.create(this.animal).subscribe(() =>{
      this.router.navigate(["/mensagem-pers"])
    })
  }

  cancel():void {
    
  }

}
