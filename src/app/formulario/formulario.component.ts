import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string;
  // apellidoInput:string="";

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  agregarPersona(){
    // creamos nuevo objeto de tipo persona para agregarla
    let first_person = new Persona(
      this.nombre.nativeElement.value, 
      this.apellido.nativeElement.value)

    // agregando first_person al arreglo de tipo persona
    // this.personas.push(first_person) 
    this.personaCreada.emit(first_person)
  }
}