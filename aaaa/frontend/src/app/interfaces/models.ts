export interface EncuestaDTO{
  id:number;
  titulo:string;
  cantidadPreguntas: number;
  cantidadRespuestas:number;
}

export interface EncuestaDetalleDTO{
  id:number;
  titulo:string;
  preguntas: PreguntaDTO[];
}

export interface PreguntaDTO{
  id:number;
  contenido:string
}

export interface NuevaRespuestaDTO{
  idencuesta: number;
  respuestas: RespuestaIndividualDTO[]
}

export interface RespuestaIndividualDTO{
  preguntaId:number;
  contenido:string;
}

export interface EstadisticaEncuestaDTO{
  encuestaId:number;
  tituloEncuesta: string;
  estadisticasPreguntas:EstadisticaPreguntaDTO;
}

export interface EstadisticaPreguntaDTO{
  preguntaId:number;
  contenidoPregunta: string;
  cantidadTotalRespuesta:number;
}
