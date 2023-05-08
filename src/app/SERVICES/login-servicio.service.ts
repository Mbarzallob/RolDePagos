import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {

  urlLogin='/login'
  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string) {
    return this.http.post(this.urlLogin, { usuario, contrasena });
  }
}
