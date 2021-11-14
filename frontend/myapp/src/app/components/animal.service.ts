import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public TIPO_AGUA = 1;
  public TIPO_TERRA = 2;

  public BASE_URL = "http://localHost:8080/animais";

  constructor(private http: HttpClient) { }

  read(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.BASE_URL);
  }

  readByTipo(tipo: number): Observable<Animal[]> {
    const url = `${this.BASE_URL}/${tipo}`;
    return this.http.get<Animal[]>(url);
  }

  getMessage(tipo: number): Observable<string[]> {
    const url = `${this.BASE_URL}/msg/${tipo}`;
    return this.http.get<string[]>(url);
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.BASE_URL, animal)
  }


}
