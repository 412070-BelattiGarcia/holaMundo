import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EncuestaDTO} from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class Api {

  apiUrl = "http://localhost:8080/api/encuestas"
  private http = inject(HttpClient)

  getEncuestas(){
    return this.http.get<EncuestaDTO[]>(`${this.apiUrl}`);
  }
}
