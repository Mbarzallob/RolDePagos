import { Component, OnInit } from '@angular/core';
import { Persona, PersonaService } from '../../SERVICES/persona.service';


@Component({
  selector: 'app-rol-pagos',
  templateUrl: './rol-pagos.component.html',
  styleUrls: ['./rol-pagos.component.css']
})
export class RolPagosComponent implements OnInit {
  constructor(private PersonaService: PersonaService) {

  }
  ngOnInit(): void {


    

  }


}
