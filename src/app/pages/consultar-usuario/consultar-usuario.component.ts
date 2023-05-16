import { Component } from '@angular/core';
import { LoginServicioService } from 'src/app/SERVICES/login-servicio.service';
import { PersonaService } from 'src/app/SERVICES/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent {
  usuario= ''
  contrasena =''
  constructor(private LoginServicio: LoginServicioService, private router: Router, private personaService: PersonaService){}

  async login () {

    await this.LoginServicio.login(this.usuario, this.contrasena).subscribe(
      response => {
        console.log("Inicio de sesión exitoso");
        
      },
      error => {
        console.log(error);
        alert("Usuario o contraseña incorrectos")
      }
    );

    this.personaService.rolIndividual(this.usuario).subscribe(
      Response => {
        const idPersona = (Response as {id_persona: number}[])[0].id_persona;
        console.log(idPersona);
        this.personaService.setidrol(idPersona)
        this.router.navigate(['/rolPagos', idPersona]);

      },
      error => {
        console.log(error)
      }
    )
   
  }

  
  
}
