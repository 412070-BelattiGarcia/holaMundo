import {Component, inject, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Api} from '../../services/api';
import {TablaEncuestas} from '../tabla-encuestas/tabla-encuestas';
import {EncuestaDTO} from '../../interfaces/models';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-encuestas',
  imports: [CommonModule,
    TablaEncuestas
  ],
  templateUrl: './encuestas.html',
  styleUrl: './encuestas.css'
})
export class Encuestas implements OnInit, OnDestroy{

  private apiService = inject(Api)
  subscriptions: Subscription = new Subscription();

  listadoEncuestas: EncuestaDTO[] = [];



  ngOnInit(): void {
    this.subscriptions.add(
      this.apiService.getEncuestas().subscribe({
        next: (encuestas: EncuestaDTO[]) => {
          console.log('Datos recibidos:', encuestas); // ← Agrega esto
          this.listadoEncuestas = encuestas;
          console.log('listadoEncuestas:', this.listadoEncuestas); // ← Y esto
        },
        error: (error) => {
          console.error('Error al obtener las encuestas', error);
        }
      })
    );
  }

  ngOnDestroy() {

  }

}
