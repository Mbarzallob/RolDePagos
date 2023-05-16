import { Component, ViewChild, OnInit } from '@angular/core';
import { Persona, PersonaService, Usuario } from '../../SERVICES/persona.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-personas-component',
  templateUrl: './ingresar-personas-component.component.html',
  styleUrls: ['./ingresar-personas-component.component.css']
})



export class IngresarPersonasComponentComponent implements OnInit {
  persona: Persona = {
    nombre: '',
    apellido: '',
    direccion: '',
    correo_electronico: '',
    id_cargo: undefined,
    telefono: ''

  }

  usuario: Usuario = {
    usuario: '',
    contrasena: ''
  }

  usuarioI = ''
  constructor(private PersonaService: PersonaService, private router: Router) { }
  ngOnInit(): void {

  }

  async agregar() {
    await this.PersonaService.addPersonas(this.persona).subscribe();
    await this.PersonaService.addUsuario(this.usuario).subscribe();
 
  }
  agregarRol() {
    this.PersonaService.rolIndividual(this.usuarioI).subscribe(Response => {
      const idPersona = (Response as {id_persona: number}[])[0].id_persona;
      console.log(idPersona);
      this.PersonaService.setid(idPersona);
      this.router.navigate(['/pagos', idPersona]); // navigate to PagosComponent with the idPersona as a parameter
    },
    error => {
      console.log(error)
    });
  }
  
  
  prueba() {
    return this.PersonaService.pruebas().subscribe();
  }







}

