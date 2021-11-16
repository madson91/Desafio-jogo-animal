import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/components/animal.service';

@Component({
  selector: 'app-msg-vencedora',
  templateUrl: './msg-vencedora.component.html',
  styleUrls: ['./msg-vencedora.component.scss']
})
export class MsgVencedoraComponent implements OnInit {

  public title:string;
  constructor(private animalService:AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.title = this.animalService.title;
  }

  ok(): void {
     this.router.navigate(["/mensagem"])
      
  }

}
