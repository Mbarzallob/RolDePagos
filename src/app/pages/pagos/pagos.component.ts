import { Component } from '@angular/core';
import { PersonaService, Rol } from 'src/app/SERVICES/persona.service';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {


  idpersona?:any  
  constructor(private personaService: PersonaService){
    this.idpersona= this.personaService.getidpersona()
  }

  rol: Rol={
    idpersona:this.idpersona,
    horas_extras:undefined,
    comisiones:undefined,
    anticipos:undefined
  }

  

  agregarRol(){
    this.personaService.ingresoRol(this.rol).subscribe()
  }


}
