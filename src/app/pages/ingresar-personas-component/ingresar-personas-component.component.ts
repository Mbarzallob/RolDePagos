import { Component, ViewChild , OnInit} from '@angular/core';
import {Persona,PersonaService} from '../../SERVICES/persona.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-personas-component',
  templateUrl: './ingresar-personas-component.component.html',
  styleUrls: ['./ingresar-personas-component.component.css']
})



export class IngresarPersonasComponentComponent implements OnInit {
    persona: Persona ={
      nombre:'',
      apellido:'',
      direccion:'',
      correo_electronico:'',
      id_cargo:undefined,
      telefono:''

    }
      constructor(private PersonaService: PersonaService, private router:Router){}
      ngOnInit(): void {
        
      }


      agregar(){
        this.PersonaService.addPersonas(this.persona).subscribe();

        this.router.navigate(['/']);
      }

     
  

}

