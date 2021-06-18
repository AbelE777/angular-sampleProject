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
  
  // variable personas de tipo Persona
  personas: Persona[]=[
    new Persona('Juan','Perez'), 
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara')   
  ];
}
