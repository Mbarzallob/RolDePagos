import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='/api'

  constructor(private http: HttpClient) { }



  getPersonas(){
    return this.http.get(this.url);
  }


  addPersonas(persona: Persona){
    return this.http.post(this.url, persona);
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
