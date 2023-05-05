import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../SERVICES/persona.service';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  constructor(private PersonaService: PersonaService) { }
  ngOnInit(): void {

    
    this.listarPersonas();
    
  }

  listarPersonas() {
    this.PersonaService.getPersonas().subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
