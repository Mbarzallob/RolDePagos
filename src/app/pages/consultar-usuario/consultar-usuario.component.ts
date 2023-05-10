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
        this.router.navigate(['/rolPagos'])
      },
      error => {
        console.log(error);
        alert("Usuario o contraseña incorrectos")
      }
    );

    this.personaService.rolIndividual(this.usuario).subscribe(
      response=>{
        console.log(response)
        this.personaService.setidpersona(response)
      },
      error =>{
        console.log(error)
      }
    )
   
  }

  
  
}
