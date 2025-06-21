## 🧹 Simulacro Parcial

### Sistema de Encuestas Web

Se debe desarrollar una **aplicación web fullstack** para gestionar **encuestas online** y sus **respuestas**. El
sistema permitirá:

- Crear encuestas con título y preguntas.
- Responder encuestas.
- Visualizar las estadísticas de respuestas.

---

## 🖥️ FRONTEND

### Requisitos

- Usar Angular **17+ con Standalone Components**.
- Formularios **template-driven** para responder encuestas.
- Usar **HttpClient** para consumir el backend.
- Uso de **Observables** (`subscribe()`).
- Comunicación entre componentes con `@Input`, `@Output` y `EventEmitter`.
- CSS mínimo o Bootstrap para maquetado.

### Páginas requeridas

#### 1. Página de **Listado de Encuestas**

- Tabla que muestre:
    - Título de la encuesta.
    - Cantidad de preguntas.
    - Cantidad de respuestas registradas.
- Cada fila tendrá:
    - Botón para **responder** la encuesta.
    - Botón para **ver estadísticas**.

#### 2. Página de **Respuesta a Encuesta**

- Muestra el **título** y lista de **preguntas** de la encuesta.
- Cada pregunta debe tener un campo para responder (input tipo texto).
- Validación: todas las respuestas deben ser completadas.
- Al enviar, se envían las respuestas al backend.
- Mostrar mensaje de éxito o error tras la respuesta.

#### 3. Página de **Estadísticas**

- Mostrar título de la encuesta y cada pregunta.
- Para cada pregunta, mostrar:
    - Cantidad total de respuestas.
    - *(Extra: mostrar respuestas más comunes si hay tiempo).*

### Extra (opcional para nota adicional)

- Uso de un componente hijo para el formulario de respuesta.
- Componente padre que recibe el evento al responder y redirige a estadísticas.
