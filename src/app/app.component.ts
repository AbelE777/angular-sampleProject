import { Component } from '@angular/core';
// importo clase creada en ./persona.model.ts
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // variable title de tipo string
  title = 'Listado de personas';
  
  // creo variable personas de tipo Persona
  personas:Persona[]=[
    new Persona('Julia','Robert'),
    new Persona('Sergio','Goyón'),
    new Persona('Lucas', 'Lopez')
  ]

  personaAgregada(persona:Persona) {
    this.personas.push( persona )
  }
  
}
