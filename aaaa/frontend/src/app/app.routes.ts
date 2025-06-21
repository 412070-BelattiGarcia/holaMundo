import { Routes } from '@angular/router';
import {Encuestas} from './components/encuestas/encuestas';
import {Estadisticas} from './components/estadisticas/estadisticas';
import {Respuestas} from './components/respuestas/respuestas';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'encuestas',
    pathMatch:'full'
  },
  {
    path:'encuestas',
    component: Encuestas
  },
  {
    path:'estadisticas/:id',
    component: Estadisticas
  },
  {
    path:'respuestas/id',
    component: Respuestas
  }
  /*,
  {
    path:'**',
    redirectTo:'encuestas',
    pathMatch:'full'
  } */

];
