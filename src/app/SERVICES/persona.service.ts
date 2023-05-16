import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private id?:number;

  private idRol!: number;

  url = '/api'


  urlUsuario = '/usuario'

  urlReset = '/reset'

  urlPruebas = '/pruebas'

  urlRol = "/rolIndividual"

  urlIngresoRol= '/ingresoRol'

  urlRolNombre='/nombre'

  urlCargo='/cargo'

  urlRolId='/rolId'

  constructor(private http: HttpClient) { }

  getidrol():number{
    return this.idRol
  }

  setidrol(idrol:number){
    this.idRol=idrol
  }

  getid(){
    return this.id;
  }
  setid(id: number){
    this.id=id
  }

  cargo(id:number){
    return this.http.get(this.urlCargo+"/"+id)
  }
  rolId(id:number){
    return this.http.get(this.urlRolId+"/"+id)

  }

  ingresoRol(rol:Rol){
    return this.http.post(this.urlIngresoRol,rol)
  }



  rolNombre(id:number){
    return this.http.get(this.urlRolNombre+"/"+id)
  }




  rolIndividual(usuario: string){
 
    return this.http.get(this.urlRol +"/" +usuario)
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

