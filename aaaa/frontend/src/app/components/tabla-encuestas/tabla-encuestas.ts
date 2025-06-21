import {Component, Input} from '@angular/core';
import {EncuestaDTO} from '../../interfaces/models';


@Component({
  selector: 'app-tabla-encuestas',
  imports: [],
  templateUrl: './tabla-encuestas.html',
  styleUrl: './tabla-encuestas.css'
})
export class TablaEncuestas {

  @Input() encuestas: EncuestaDTO[]= [];

}
