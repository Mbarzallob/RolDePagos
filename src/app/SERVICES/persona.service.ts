import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private idpersona: any
  url = '/api'


  urlUsuario = '/usuario'

  urlReset = '/reset'

  urlPruebas = '/pruebas'

  urlRol = '/rolIndividual'

  urlIngresoRol= '/ingresoRol'

  constructor(private http: HttpClient) { }

  ingresoRol(rol:Rol){
    return this.http.post(this.urlIngresoRol,rol)
  }

  setidpersona(idpersona: any) {
    this.idpersona = idpersona
  }

  getidpersona() {
    return this.idpersona
  }

  rolIndividual(usuario: string) {

    return this.http.post(this.urlRol, { usuario });
  }
  pruebas() {
    return this.http.post(this.urlPruebas, null)
  }


  reset() {
    return this.http.post(this.urlReset, null);
  }

  getPersonas() {
    return this.http.get(this.url);
  }


  addPersonas(persona: Persona) {
    return this.http.post(this.url, persona);
  }

  getUsuario() {
    return this.http.get(this.urlUsuario);
  }


  addUsuario(usuario: Usuario) {
    return this.http.post(this.urlUsuario, usuario);
  }


}

export interface Persona {

  nombre?: string,
  apellido?: string,
  direccion?: string,
  telefono?: string,
  correo_electronico?: string,
  id_cargo?: number

}
export interface Usuario {
  usuario?: string,
  contrasena?: string
}

export interface Rol{
  idpersona?: number,
  horas_extras?: number,
  comisiones?:number,
  anticipos?:number
}