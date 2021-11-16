import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mensagemDto } from './animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public TIPO_AGUA = 1;
  public TIPO_TERRA = 2;

  public BASE_URL = "http://localHost:8080/animais";
  
  title:string;

  mensagemDto:mensagemDto;

  constructor(private http: HttpClient) { }

  read(msgD: mensagemDto): Observable<mensagemDto> {
    return this.http.post<mensagemDto>(this.BASE_URL, msgD);
  }
}
