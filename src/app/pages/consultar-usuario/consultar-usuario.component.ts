import { Component } from '@angular/core';
import { LoginServicioService } from 'src/app/SERVICES/login-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent {
  usuario= ''
  contrasena =''
  isLoggedIn = false;
  constructor(private LoginServicio: LoginServicioService, private router: Router){}

  login() {
    this.LoginServicio.login(this.usuario, this.contrasena).subscribe(
      response => {
        console.log("Inicio de sesión exitoso");
        this.router.navigate(['/rolPagos'])
        this.isLoggedIn = true
      },
      error => {
        console.log(error);
        alert("Usuario o contraseña incorrectos")
      }
    );
  }
  
}
