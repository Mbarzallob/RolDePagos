import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='/api'

  urlUsuario='/usuario'

  urlReset ='/reset'
  
  urlPruebas = '/pruebas'

  urlRol='/rolIndividual'

  constructor(private http: HttpClient) { }


  rolIndividual(usuario: string){
    const options = { params: { usuario } };
    return this.http.get(this.urlRol, options);
  }
  pruebas(){
    return this.http.post(this.urlPruebas,null)
  }


  reset(){
    return this.http.post(this.urlReset, null);
  }

  getPersonas(){
    return this.http.get(this.url);
  }


  addPersonas(persona: Persona){
    return this.http.post(this.url, persona);
  }

  getUsuario(){
    return this.http.get(this.urlUsuario);
  }


  addUsuario(usuario: Usuario){
    return this.http.post(this.urlUsuario, usuario);
  }


}

export interface Persona {

  nombre?:string,
  apellido?:string,
  direccion?:string,
  telefono?:string,
  correo_electronico?:string,
  id_cargo?:number

}
 export interface Usuario {
  usuario?:string,
  contrasena?:string
 }