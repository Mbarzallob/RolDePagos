import { Component, OnInit } from '@angular/core';
import { Persona, PersonaService } from '../../SERVICES/persona.service';


@Component({
  selector: 'app-rol-pagos',
  templateUrl: './rol-pagos.component.html',
  styleUrls: ['./rol-pagos.component.css']
})
export class RolPagosComponent implements OnInit{
  ListaPersonas: Persona[] =[];
  constructor(private PersonaService: PersonaService) { 
   
  }
  ngOnInit(): void {

    
    this.listarPersonas();
    
  }

  listarPersonas() {
    this.PersonaService.getPersonas().subscribe(
      res => {
        console.log(res)
        this.ListaPersonas=<any>res;
      },
      err => console.log(err)
    )
  }
 }
