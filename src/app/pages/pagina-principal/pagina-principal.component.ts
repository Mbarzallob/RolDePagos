import { Component, OnInit } from '@angular/core';
import { Persona, PersonaService } from '../../SERVICES/persona.service';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  ListaPersonas: Persona[] =[];
  constructor(private PersonaService: PersonaService) { }
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

