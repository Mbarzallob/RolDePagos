import { Component, ViewChild , OnInit} from '@angular/core';
import {Persona,PersonaService, Usuario} from '../../SERVICES/persona.service'
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

    usuario: Usuario={
      usuario:'',
      contrasena:''
    }


      constructor(private PersonaService: PersonaService, private router:Router){}
      ngOnInit(): void {
        
      }



      async agregar() {
        
          await this.PersonaService.addPersonas(this.persona).subscribe();
           this.PersonaService.addUsuario(this.usuario).subscribe();
          this.router.navigate(['/']);
          

      }

      prueba(){
        return this.PersonaService.pruebas().subscribe();
      }

    


     
  

}

